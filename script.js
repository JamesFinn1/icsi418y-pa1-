const form = document.querySelector("#task-form");
const taskNameForm = document.querySelector("#task-input");
const taskArea = document.querySelector("#task-list");

// Radio buttons
const lowPrio = document.querySelector("#priority-low");
const medPrio = document.querySelector("#priority-medium");
const highPrio = document.querySelector("#priority-high");

const taskList = [];

form.addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.querySelector("#task-input").value;
    const selectedRadio = document.querySelector('input[name="priority"]:checked');
    var priority;

    if(name.trim() == "") {
        alert("Missing Task Name");
        return;
    }

    // Check if a choice was actually made, then get its value
    if (selectedRadio) 
        priority = selectedRadio.value;
    else {
        priority = "Low"; // No radio button selected
    }

    // Create the object here
    const task = {
        name: name,
        priority: priority,
        completed: false
    };

    // Add to array
    taskList.push(task);

    displayTasks(taskList);
});


function displayTasks(array) { 
    const lastTask = array.at(-1); 

    const taskElement = document.createElement("div"); 
    taskElement.classList.add("div-box");  

    // Task Name group
    const nameGroup = document.createElement("div");
    nameGroup.classList.add("data-group");

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Task Name";

    const taskName = document.createElement("p"); 
    taskName.textContent = lastTask.name; 
    nameGroup.append(nameLabel, taskName);

    // Priority group
    const priorityGroup = document.createElement("div");
    priorityGroup.classList.add("data-group");

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority";

    const priority = document.createElement("p"); 
    priority.textContent = lastTask.priority; 

    priorityGroup.append(priorityLabel, priority);

    // Buttons
    const completeButton = document.createElement("button"); 
    completeButton.textContent = "Complete"; 
    completeButton.type = "button"; 

    const deleteButton = document.createElement("button"); 
    deleteButton.textContent = "Delete"; 
    deleteButton.type = "button"; 
    
    completeButton.addEventListener("click", function () { 
        lastTask.completed = true; 
        taskElement.style.backgroundColor = "#1bea00"; 
    }); 

    deleteButton.addEventListener("click", function () { 
        taskElement.remove(); 
    }); 

    // Add everything to new div
    taskElement.append(
        nameGroup,
        priorityGroup,
        completeButton,
        deleteButton
    ); 

    // add div to body
    taskArea.appendChild(taskElement); 
}