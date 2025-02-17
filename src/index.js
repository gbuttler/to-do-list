import "./styles/styles.css";
import { loadTasks } from "./task";
import { taskFormFunc, cancelTaskForm } from "./new-task-form";
import { newProject } from "./sidebar";
import { loadProjects } from "./projects";

loadTasks();
loadProjects();

//access new task and project buttons
const newTaskBtn = document.querySelector(".new-task-btn");
const newProjectBtn = document.querySelector(".new-project-btn");
const cancelTaskButton = document.querySelector(".form-cancel-button");

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
