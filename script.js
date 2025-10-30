// --- NEW FUNCTION TO SAVE DATA ---
function saveData() {
    const taskList = document.getElementById("taskList");
    localStorage.setItem("data", taskList.innerHTML);
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("taskList");
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();

    taskDiv.innerHTML = `
        <div>
            <strong>${taskValue}</strong>
            <small>${dateString} - ${timeString}</small>
        </div>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(taskDiv);
    taskInput.value = ""; // clear input
    
    // Call save function after adding a task
    saveData();
}

function deleteTask(button) {
    button.parentElement.remove();
    
    // Call save function after deleting a task
    saveData();
}

// --- NEW FUNCTION TO SHOW DATA ON LOAD ---
function showTask() {
    const taskList = document.getElementById("taskList");
    // Load the data into the list container
    taskList.innerHTML = localStorage.getItem("data");
}

// Execute this when the script runs to load any existing data
showTask();
