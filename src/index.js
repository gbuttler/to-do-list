import "./styles/styles.css";
import { loadTasks } from "./task";
import { taskForm } from "./new-task-form";
import { newProject } from "./sidebar";

loadTasks();

//access new task and project buttons
const newTaskBtn = document.querySelector(".new-task-btn");
const newProjectBtn = document.querySelector(".new-project-btn");

newTaskBtn.addEventListener("click", function () {
  taskForm();
});

newProjectBtn.addEventListener("click", function () {
  newProject();
});
