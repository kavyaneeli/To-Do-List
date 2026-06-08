alert("JS Connected");
const addBtn = document.getElementById("addBtn")
const taskInput = document.getElementById("taskinput")
const taskList = document.getElementById("taskList")
const totalCount = document.getElementById("totalCount")
const completedCount = document.getElementById("completedCount")

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress",(event)=>{
    if(event.key ==="Enter"){
        addTask();
    }
});

function addTask(){
    const taskText = taskInput.ariaValueMax.trim();

    if(taskText ===""){
        alert("Please enter a task");
    return;
}
const li = document.createElement("li");

const checkbox = document.createElement("input")
checkbox.type = "checkbox";

const span = document.createElement("span")
span.typeContect= " "+taskText+" ";

const deleteBtn = document.createElement("button");
deleteBtn.textContect = "Delete"
deleteBtn.classList.add("delete-btn");

checkbox.addEventListener("change" ,function(){
    if (checkbox.checked){
        span.classList.add("completed");
    }else{
        span.classList.remove("completed");
    }
    updatedCounts();
});
deleteBtn.addEventListener("click", function(){
    taskList.removeChild(li);
    updatedCounts();
});

li.appendChild(checkbox);
li.appendChild(span);
li.appendChild(deleteBtn);

taskList.appendChild(li);

taskInput.value = "";
updatecounts();
}
function updateCounts(){
    const totalTasks = taskList.children.length;

    const checkboxes =
    taskList.querySelectorAll('input[type="checkbox"]');

    let completedTesks = 0;
    checkboxes.forEach(function(box){
        if(box.checked){
            completedTasks++;
        }
    });
    totalCount.textContect = totalTasks;
    completedCount.textCount = completedTasks;
}
