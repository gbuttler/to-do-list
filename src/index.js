import "./styles/styles.css";
import { loadTasks } from "./task";
import { taskFormFunc, cancelTaskForm } from "./new-task-form";
import { newProject, filterDueToday } from "./sidebar";
import {
  loadProjects,
  filterByProjects,
  myProjects,
  Project,
} from "./projects";

loadTasks();
loadProjects();

//access new task and project buttons
const newTaskBtn = document.querySelector(".new-task-btn");
const newProjectBtn = document.querySelector(".new-project-btn");
const cancelTaskButton = document.querySelector(".form-cancel-button");
const dueTodayButton = document.querySelector(".due-today-button");
const allTasksButton = document.querySelector(".all-tasks-button");
const indivProjectBtn = document.querySelector(".indv-project");

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

dueTodayButton.addEventListener("click", function () {
  filterDueToday();
});

allTasksButton.addEventListener("click", function () {
  loadTasks();
});

indivProjectBtn.addEventListener("click", function () {
  myProjects.forEach((Project, j) => {
    console.log("filtering projects");
  });
});
