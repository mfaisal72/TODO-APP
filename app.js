var tasks = [];

function renderTasks() {
  var todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  tasks.forEach((task, index) => {
    var taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = `
            <span>${task}</span>
            <div>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
    todoList.appendChild(taskElement);
  });
}

function addTask() {
  var taskInput = document.getElementById("taskInput");
  var task = taskInput.value.trim();

  if (task !== "") {
    tasks.push(task);
    taskInput.value = "";
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  var updatedTask = prompt("Edit task:", tasks[index]);

  if (updatedTask !== null) {
    tasks[index] = updatedTask.trim();
    renderTasks();
  }
}

function deleteAll() {
  tasks = [];
  renderTasks();
}

document.addEventListener("DOMContentLoaded", renderTasks);
