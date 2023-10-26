// ALL VARIABLES
const MainDiv = document.getElementById("MainDiv");

let AddButton = document.getElementById("AddTask");

 const TaskDiv = document.getElementById("TaskDiv");
 const TaskList = document.getElementById("TaskList")
        

let numberOfTasks = 0
const SizeIncrease = 80;
// ALL FUNCTIONS
function New()
{
    console.log("Making new Note")
}

function Open()
{
    console.log("Open Note")
}

function Save()
{
    console.log("Save Note")
}


function AddTask()
{   // I NEED THESE VARIABLES IN BOTH ADDTASK AND REMOVETASK FOR IT TO BE LOCALLY SAVED AND BE REPEATING
    // counter of tasks
    numberOfTasks ++;

   //Adds the actual Text to edit your task
    const taskInput = document.createElement("li");
   
 TaskList.appendChild(taskInput);
    taskInput.classList.add("TaskText");
    taskInput.innerHTML = "Type here to edit!";
    taskInput.contentEditable = true;
    MainDiv.appendChild(TaskDiv);

    taskInput.focus();

    // Code that changes height of MainDiv
    const MainDivCurrentHeight = window.getComputedStyle(MainDiv).height;
    const MainDivCurrentHeightValue = parseInt(MainDivCurrentHeight)
    let ExtraHeight = MainDivCurrentHeightValue + SizeIncrease;

    if (numberOfTasks > 6)
    {
        MainDiv.style.height = ExtraHeight + `px`;
    }

}   

function RemoveTask()
{   // I NEED THESE VARIABLES IN BOTH ADDTASK AND REMOVETASK FOR IT TO BE LOCALLY SAVED AND BE REPEATING

}

function Destroy()
{
    console.log("Destroy Note")
}