var title = document.querySelector('.title-text'),
    addButton = document.querySelector('.action.primary.add'),
    modal = document.querySelector('.modals');

addButton.addEventListener('click', function(e) {
    e.preventDefault();

    if (title.value === '') {
        alert('Please enter a task title!');
    }else {
        modal.classList.add('show-modal');
    }
    
});
