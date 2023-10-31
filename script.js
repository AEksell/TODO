// ALL VARIABLES
const MainDiv = document.getElementById("MainDiv");
let AddButton = document.getElementById("AddTask");
const TaskDiv = document.getElementById("TaskDiv");
const TaskList = document.getElementById("TaskList");
let Counter = document.getElementById("Counter");
        



let numberOfTasks = 0;
let taskCompleted = 0;
const SizeIncrease = 80;
// ALL FUNCTIONS
function Save()
{
    console.log("Save Note");
}

function Clear()
{
    console.log("Destroy Note")
}

function AddTask()
{   // I NEED THESE VARIABLES IN BOTH ADDTASK AND REMOVETASK FOR IT TO BE LOCALLY SAVED AND BE REPEATING
    // counter of tasks
    numberOfTasks ++;

   //Adds the actual Text to edit your task
    const taskInput = document.createElement("li");
 TaskList.appendChild(taskInput);
    taskInput.classList.add("TaskText");
    taskInput.classList.add(`number${numberOfTasks}`)
    taskInput.innerHTML = "Type here to edit!";
    taskInput.contentEditable = true;
    MainDiv.appendChild(TaskDiv);
    taskInput.focus();


    // StatusImage  to mark tasks as finished
const StatusImage = document.createElement("img");
StatusImage.src = "Images/Unchecked.png";
StatusImage.setAttribute(`class`, `number${numberOfTasks}`);
StatusImage.setAttribute("class", "UnChecked");
TaskList.appendChild(StatusImage);


    // Changes Src of StatusImage
    StatusImage.addEventListener("mouseover", () => {
        StatusImage.src = "Images/Checkmark.png"
    });

    StatusImage.addEventListener("mouseleave", () => {
        StatusImage.src = "Images/Unchecked.png"
    }); 

    // Code that changes height of MainDiv
    const MainDivCurrentHeight = window.getComputedStyle(MainDiv).height;
    const MainDivCurrentHeightValue = parseInt(MainDivCurrentHeight);
    let ExtraHeight = MainDivCurrentHeightValue + SizeIncrease;

    if (numberOfTasks > 3)
    {
        MainDiv.style.height = ExtraHeight + `px`;
    }

    Counter.innerHTML = `Tasks completed ${taskCompleted}/${numberOfTasks}`;
    
}   


function Check(){

}


function RemoveTask()
{   // I NEED THESE VARIABLES IN BOTH ADDTASK AND REMOVETASK FOR IT TO BE LOCALLY SAVED AND BE REPEATING

}
