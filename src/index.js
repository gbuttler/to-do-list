import "./styles/styles.css";
import { loadTasks } from "./task";
import { taskForm } from "./new-task-form";

loadTasks();

//access new task button
const newTaskBtn = document.querySelector(".new-task-btn");

newTaskBtn.addEventListener("click", function () {
  taskForm();
});
