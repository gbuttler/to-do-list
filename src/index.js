import "./styles/styles.css";
import { loadTasks, deleteTask, completeTask, myTasks } from "./task";
import { taskFormFunc, cancelTaskForm } from "./new-task-form";
import { newProject } from "./sidebar";

loadTasks();

//access new task and project buttons
const newTaskBtn = document.querySelector(".new-task-btn");
const newProjectBtn = document.querySelector(".new-project-btn");
const cancelTaskButton = document.querySelector(".form-cancel-button");
const deleteTaskButton = document.querySelector(".delete-task");
const completeTaskButton = document.querySelector(".completed-status");

newTaskBtn.addEventListener("click", function () {
  taskFormFunc();
});

newProjectBtn.addEventListener("click", function () {
  newProject();
});

cancelTaskButton.addEventListener("click", function (event) {
  event.preventDefault();
  cancelTaskForm();
});

// deleteTaskButton.addEventListener("click", function () {
//   deleteTask();
// });

// completeTaskButton.addEventListener("click", function () {
//   console.log("task completed");
//   completeTask();
// });
