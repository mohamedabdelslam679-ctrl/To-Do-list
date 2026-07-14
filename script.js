let title = document.getElementById("title");
let taskInput = document.getElementById("taskInput");
let addBTN = document.getElementById("addBTN");
let message = document.getElementById("message");
let taskCount = document.getElementById("taskCount");
let taskList = document.getElementById("taskList");
let count = 0;
addBTN.addEventListener("click", function() {
    let taskText = taskInput.value;
    if (taskText === "") {
        message.style.color = "red"
        message.textContent =  "Please enter your Task"; 
       return; 
    }
    let li = document.createElement("li");
    let taskSpan = document.createElement("span")
    taskSpan.textContent = taskText;
    taskSpan.style.fontWeight = "bold";
    taskSpan.style.fontsize = "18px";
    let noteInput = document.createElement("Input");
    noteInput.type = "text";
    noteInput.placeholder = "add a note";

    let deleteBTN = document.createElement("button");
    deleteBTN.textContent = "Delete";
   
    li.appendChild(taskSpan);
    li.appendChild(noteInput)
    li.appendChild(deleteBTN);
    taskList.appendChild(li);
    
    
    count++;
    taskCount.textContent = count;
    message.style.color = "#1d4ed8";
    message.textContent =  "Task Added Successfully" ;
    taskInput.value = "";

    deleteBTN.addEventListener("click", function() {
        li.remove();
        count--;
        taskCount.textContent = count;
        message.textContent = "Task Deleted";
    });
});