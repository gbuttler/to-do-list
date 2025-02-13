import { myTasks, Task, addNewTask, displayTasks } from "./task";

let taskForm = document.querySelector(".task-form-div");

const taskFormFunc = () => {
  console.log("form is running");

  taskForm.style.zIndex = "5";

  //get information from form and create a new task
  document
    .getElementById("new-task-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("task submitted");

      //form values

      Task.taskName = event.target.taskName.value;
      Task.project = event.target.project.value;
      Task.due = event.target.due.value;
      Task.notes = event.target.notes.value;
      Task.completed = false;

      console.log(Task.taskName);

      addNewTask(
        Task.taskName,
        Task.project,
        Task.due,
        Task.notes,
        Task.completed
      );

      taskForm.style.zIndex = "-5";

      document.getElementById("new-task-form").reset();

      console.log(myTasks);

      displayTasks();
    });
};

const cancelTaskForm = () => {
  taskName.value = " ";
  project.value = "";
  due.value = "";
  notes.value = "";

  taskForm.style.zIndex = "-5";
};

export { taskFormFunc, cancelTaskForm };
