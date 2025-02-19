import { myTasks, Task, addNewTask, displayTasks } from "./task";

let taskForm = document.querySelector(".task-form-div");

const taskFormFunc = () => {
  console.log("form is running");

  taskForm.style.zIndex = "5";
};

const cancelTaskForm = () => {
  taskName.value = " ";
  project.value = "";
  due.value = "";
  notes.value = "";

  taskForm.style.zIndex = "-5";
};

export { taskFormFunc, cancelTaskForm, taskForm };
