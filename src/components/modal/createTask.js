document.addEventListener('DOMContentLoaded', () => {
    const confirmBtn = document.querySelector('.action.primary.confirm'); 
    const messageBox = document.querySelector('.page-messages');
    var modal = document.querySelector('.modals');

    confirmBtn.addEventListener('click', (e) => {

        const data = {
            title: document.querySelector('.title-text').value,
            project_name: document.getElementById('project').value,
            description: document.getElementById('desrciption').value,
            due_date: document.getElementById('due-date').value,
            priority: document.getElementById('priority').value
        };

        fetch('http://localhost/todo-endpoints/api/createTask.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
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
            console.log('Server response:', result);

            if (result.status === 'success') {
                document.querySelector('#modal-form').reset();

                setTimeout(() => {
                    messageBox.innerHTML = '';
                    messageBox.classList.remove('show-message');
                    window.location.reload();
                }, 3000);
            }
        })
        .catch(error => {
            console.error('Failed to create task:', error);
            messageBox.innerHTML = '<div class="message error">Failed to create task.</div>';
        });
    });
});
