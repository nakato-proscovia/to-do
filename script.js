const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn")
const list = document.getElementById("taskList")

// CRUD - Create, Read, Update, Delete

// Create - create a new task 
addBtn.addEventListener("click", function(){
    const newTask = input.value.trim();

    if(newTask === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = newTask;
    list.appendChild(li);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit"
    editBtn.addEventListener("click", function(){
        const updatedTask = prompt("Enter the updated task", li.textContent);
        if(updatedTask !== null && updatedTask.trim() !== "") {
            li.textContent = updatedTask.trim();
            li.appendChild(editBtn)
        }
    })
    
    // Delete button for each task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete"
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function(){
        li.remove();
    })


    input.value = "";
})

// Read - display task (already done by default)

// Edit - update a task
