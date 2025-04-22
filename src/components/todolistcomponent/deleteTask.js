document.addEventListener('DOMContentLoaded', () => {
    function removeTask() {
        const messageBox = document.querySelector('.page-messages');
        const modal = document.querySelector('.modals');

        document.querySelectorAll('.remove-button button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();

                const listItem = button.closest('.list-items');
                const titleElement = listItem.querySelector('#title');
                const taskId = titleElement?.getAttribute('data-id');

                if (!taskId) {
                    console.error('Task ID not found for deletion.');
                    return;
                }

                fetch('http://localhost/todo-endpoints/api/deleteTask.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `Id=${taskId}`
                })
                .then(response => response.json())
                .then(result => {
                    messageBox.innerHTML = '';

                    const msg = document.createElement('div');
                    msg.className = `message ${result.status}`;
                    msg.textContent = result.message;
                    messageBox.appendChild(msg);

                    modal.classList.remove('show-modal');
                    messageBox.classList.add('show-message');
                    console.log('Delete response:', result);

                    if (result.status === 'success') {
                        listItem.remove();

                        setTimeout(() => {
                            msg.remove();
                            window.location.reload();
                        }, 3000);
                    }
                })
                .catch(error => {
                    console.error('Error deleting task:', error);
                });
            });
        });
    }

    setTimeout(removeTask, 1500);
});
