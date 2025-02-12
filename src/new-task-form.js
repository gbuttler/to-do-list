import { myTasks, Task, addNewTask, displayTasks } from "./task";

const taskForm = () => {
  console.log("form is running");
  let taskForm = document.querySelector(".task-form-div");

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

export { taskForm };
