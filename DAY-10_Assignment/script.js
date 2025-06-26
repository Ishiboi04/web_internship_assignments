const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = 'delete-btn';
    li.appendChild(deleteBtn);

    // Add click event to mark as completed
    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    // Add right-click or delete button to delete
    li.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        li.remove();
    });

    deleteBtn.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent triggering complete toggle
        li.remove();
    });

    // Add to the list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}
