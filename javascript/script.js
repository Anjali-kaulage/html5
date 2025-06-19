document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Event listener for adding a new task
    addTaskButton.addEventListener('click', addTask);

    // Function to add a new task
    function addTask(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            createTaskElement(taskText);
            taskInput.value ='';
        }
    }

    // Function to create task element and append to the list
    function createTaskElement(taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', deleteTask);

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    }

    // Event listener for deleting a task
    function deleteTask(event) {
        const taskItem = event.target.parentElement;
        taskItem.remove();
    }

    // Event listener for marking a task as completed
    taskList.addEventListener('click', function(event) {
        const taskItem = event.target;
        if (taskItem.tagName === 'LI') {
            taskItem.classList.toggle('completed');
        }
    });
});
