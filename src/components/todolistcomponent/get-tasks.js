document.addEventListener('DOMContentLoaded', () => {
   const getURL = 'http://localhost/todo-endpoints/api/getTask.php';
   
    fetch(getURL)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                const listContainer = document.getElementById('todoListContainer');
                
                data.tasks.forEach(todo => {
                    const li = document.createElement('li');
                    li.className = 'list-items card';
                    li.innerHTML = `
                        <div class="card-body">
                            <div class="title${todo.Id}" id="title" data-id="${todo.Id}">
                                <h4>${todo.title}</h4>
                            </div>
                            <div class="description">
                                <p>${todo.project_name}</p>
                            </div>
                            <div class="description">
                                <p>${todo.description}</p>
                            </div>
                            <div class="due-date">
                                <p>${todo.due_date}</p>
                            </div>
                            <div class="priority">
                                <p>${todo.priority}</p>
                            </div>
                        </div>
                        <div class="remove-button">
                            <button class="remove-button">Remove</button>
                        </div>
                    `;
                    listContainer.appendChild(li);

                    console.log(todo.Id);
                });
            } else {
                console.log('No tasks found.');
            }
        })
        .catch(error => {
            console.error('Error fetching tasks:', error);
        });
});

