const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("tasklist");

let tasks = [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const stored = localStorage.getItem("tasks");
    if (stored !== null) {
        tasks = JSON.parse(stored);
        tasks.forEach(function(task) {
            renderTask(task);
        });
    }
}

function renderTask(task) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.title;
    li.appendChild(span);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", function() {
        const updatedTask = prompt("Enter the updated task", span.textContent);
        if (updatedTask !== null && updatedTask.trim() !== "") {
            span.textContent = updatedTask.trim();
            task.title = updatedTask.trim();
            saveTasks();
        }
    });
    li.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
        li.remove();
        tasks = tasks.filter(function(t) {
            return t.id !== task.id;
        });
        saveTasks();
    });
    li.appendChild(deleteBtn);

    list.appendChild(li);
}

addBtn.addEventListener("click", function() {
    const newTask = input.value.trim();

    if (newTask === "") {
        alert("Please enter a task");
        return;
    }

    const task = {
        id: Date.now(),
        title: newTask
    };

    tasks.push(task);
    saveTasks();
    renderTask(task);
    input.value = "";
});

loadTasks();


