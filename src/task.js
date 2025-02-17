import { Project } from "./projects";

//array to hold the tasks
const myTasks = [];

// task object
function Task(taskName, project, due, notes) {
  this.taskName = taskName;
  this.project = project;
  this.due = due;
  this.notes = notes;
}

//add a task to the html
function addNewTask(taskName, project, due, notes) {
  const newTask = new Task(taskName, project, due, notes);

  myTasks.push(newTask);
}

//access the content div
const taskScreen = document.querySelector(".content");

//create current date constant for dummy tasks
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${year}-${month}-${day}`;
console.log(currentDate);

//dummy tasks
addNewTask("hang up laundry", "Personal", currentDate, "");

addNewTask(
  "clean the bathroom",
  "Personal",
  currentDate,
  "don't forget to change the towels"
);

//display books in the content div

function displayTasks() {
  console.log("tasks are loading");
  let i = 0;
  taskScreen.innerHTML = "";

  myTasks.forEach((Task, j) => {
    console.log(i, myTasks.length);
    // single task div
    let singleTask = document.createElement("div");
    singleTask.className = "singleTask";
    taskScreen.appendChild(singleTask);

    //task name
    let taskNamePara = document.createElement("p");
    taskNamePara.className = "task-name";
    taskNamePara.textContent = Task.taskName;
    singleTask.appendChild(taskNamePara);

    //project name
    let projectNamePara = document.createElement("p");
    projectNamePara.className = "task-project";
    projectNamePara.textContent = Task.project;
    singleTask.appendChild(projectNamePara);

    //due date
    let dueNamePara = document.createElement("p");
    dueNamePara.className = "task-due";
    dueNamePara.textContent = Task.due;
    singleTask.appendChild(dueNamePara);

    console.log(Task.due);

    //notes div
    let notesNamePara = document.createElement("p");
    notesNamePara.className = "task-notes";
    notesNamePara.textContent = Task.notes;
    singleTask.appendChild(notesNamePara);

    //create bottom task line div and append to single task
    let bottomTaskLine = document.createElement("div");
    bottomTaskLine.className = "bottom-task-line";
    singleTask.appendChild(bottomTaskLine);

    //complete task
    let taskCompleteButton = document.createElement("button");
    taskCompleteButton.className = "completed-status";
    taskCompleteButton.addEventListener("click", () => {
      console.log("task completed", j);
      myTasks.splice(j, 1);
      displayTasks();
    });
    let taskCompleteIcon = document.createElement("i");
    taskCompleteIcon.className = "fa-solid fa-circle-check";
    taskCompleteButton.appendChild(taskCompleteIcon);
    bottomTaskLine.appendChild(taskCompleteButton);

    console.log(`Task name is:${Task.taskName}`);
    i++;

    return singleTask;
  });
}

console.log(myTasks);

const loadTasks = () => {
  displayTasks();
};

//function to complete task
function completeTask() {}

//function to filter array based on projects

export {
  loadTasks,
  myTasks,
  Task,
  addNewTask,
  displayTasks,
  completeTask,
  currentDate,
  taskScreen,
};
