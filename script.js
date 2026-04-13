const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("tasklist");

addBtn.addEventListener("click", function(){
    const newTask = input.value.trim();

    if(newTask === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = newTask;
    li.appendChild(span);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", function(){
        const updatedTask = prompt("Enter the updated task", span.textContent);
        if(updatedTask !== null && updatedTask.trim() !== "") {
            span.textContent = updatedTask.trim();
        }
    });
    li.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function(){
        li.remove();
    });
    li.appendChild(deleteBtn);

    list.appendChild(li);
    input.value = "";
});

