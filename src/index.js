import "./styles/styles.css";
import { loadTasks } from "./task";
import { taskFormFunc, cancelTaskForm } from "./new-task-form";
import { filterDueToday } from "./sidebar";
import {
  loadProjects,
  filterByProjects,
  myProjects,
  Project,
} from "./projects";
import { projectFormFunc } from "./new-project-form";

loadTasks();
loadProjects();

//access new task and project buttons
const newTaskBtn = document.querySelector(".new-task-btn");
const newProjectBtn = document.querySelector(".new-project-btn");
const cancelTaskButton = document.querySelector(".form-cancel-button");
const dueTodayButton = document.querySelector(".due-today-button");
const allTasksButton = document.querySelector(".all-tasks-button");

newTaskBtn.addEventListener("click", function () {
  taskFormFunc();
});

newProjectBtn.addEventListener("click", function () {
  projectFormFunc();
});

cancelTaskButton.addEventListener("click", function (event) {
  event.preventDefault();
  cancelTaskForm();
});

dueTodayButton.addEventListener("click", function () {
  filterDueToday();
});

allTasksButton.addEventListener("click", function () {
  loadTasks();
});
