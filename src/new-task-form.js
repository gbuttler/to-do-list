let taskForm = document.querySelector(".task-form-div");

const taskFormFunc = () => {
  console.log("task form is running");
  taskForm.style.visibility = "visible";
  taskForm.style.zIndex = "5";
};

const cancelTaskForm = () => {
  taskName.value = " ";
  project.value = "";
  due.value = "";
  notes.value = "";

  taskForm.style.zIndex = "-5";
  taskForm.style.visibility = "hidden";
};

export { taskFormFunc, cancelTaskForm, taskForm };
