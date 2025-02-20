import "./styles/styles.css";
import {
  loadTasks,
  Task,
  addNewTask,
  myTasks,
  displayTasks,
  initialTaskLoad,
} from "./task";
import { taskFormFunc, cancelTaskForm, taskForm } from "./new-task-form";
import { filterDueToday } from "./sidebar";
import {
  loadProjects,
  myProjects,
  Project,
  addNewProject,
  initialProjectLoad,
} from "./projects";
import {
  projectFormFunc,
  cancelProjectForm,
  projectForm,
} from "./new-project-form";

initialTaskLoad();
initialProjectLoad();
loadTasks();
loadProjects();

//access new task and project buttons
const newTaskBtn = document.querySelector(".new-task-btn");
const newProjectBtn = document.querySelector(".new-project-btn");
const cancelTaskButton = document.querySelector(".form-cancel-button");
const cancelProjectButton = document.querySelector(
  ".project-form-cancel-button"
);
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

cancelProjectButton.addEventListener("click", function (event) {
  event.preventDefault();
  cancelProjectForm();
});

dueTodayButton.addEventListener("click", function () {
  filterDueToday();
});

allTasksButton.addEventListener("click", function () {
  loadTasks();
});

//submission from task form
document
  .getElementById("new-task-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("task submitted");

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
    taskForm.style.visibility = "hidden";

    document.getElementById("new-task-form").reset();

    console.log(myTasks);

    displayTasks();
  });

//submission from project form
document
  .getElementById("new-project-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("project added");

    Project.pName = event.target.pName.value;

    console.log(Project.pName);

    addNewProject(Project.pName);

    projectForm.style.zIndex = "-6";
    projectForm.style.visibility = "hidden";

    document.getElementById("new-project-form").reset();

    console.log(myProjects);
    loadProjects();
  });
