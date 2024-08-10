// Event listener for adding new task when "Add Task" button is clicked
document.getElementById('add-task').addEventListener('click', function() {
    // Get input field element
    let taskInput = document.getElementById('new-task');
    // Get and trim the task text
    let taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
        // Alert the user to enter a task
        alert("Please enter a task!");
        print(taskText)
    }
})