//array to hold the tasks
const myTasks = [];

// task object
function Task(taskName, project, due, notes, completed) {
  this.taskName = taskName;
  this.project = project;
  this.due = due;
  this.notes = notes;
  this.completed = function () {
    if (this.completed == true) {
      console.log("completed");
      return true;
    } else {
      console.log("not completed");
      return false;
    }
  };
}

//add a task to the html
function addNewTask(taskName, project, due, notes, completed) {
  const newTask = new Task(taskName, project, due, notes, completed);

  myTasks.push(newTask);
}

//access the content div
const taskScreen = document.querySelector(".content");

//dummy tasks
addNewTask("hang up laundry", "Daily", "today", "", false);

addNewTask(
  "clean the bathroom",
  "Weekly",
  "today",
  "don't forget to change the towels",
  false
);

//display books in the content div

function displayTasks() {
  console.log("tasks are loading");
  let i = 0;
  taskScreen.innerHTML = "";

  //name, project, due, notes, completed

  myTasks.forEach((Task) => {
    while (i < myTasks.length) {
      // single task div
      let singleTask = document.createElement("div");
      singleTask.className = "singleTask";
      taskScreen.appendChild(singleTask);

      //task name
      let taskNamePara = document.createElement("p");
      taskNamePara.className = "task-name";
      taskNamePara.textContent = Task.taskName;
      singleTask.appendChild(taskNamePara);

      //project name
      let projectNamePara = document.createElement("p");
      projectNamePara.className = "task-project";
      projectNamePara.textContent = Task.project;
      singleTask.appendChild(projectNamePara);

      //due date
      let dueNamePara = document.createElement("p");
      dueNamePara.className = "task-due";
      dueNamePara.textContent = Task.due;
      singleTask.appendChild(dueNamePara);

      //notes div
      let notesNamePara = document.createElement("p");
      notesNamePara.className = "task-notes";
      notesNamePara.textContent = Task.notes;
      singleTask.appendChild(notesNamePara);

      //div for buttons
      let completedPara = document.createElement("p");
      completedPara.className = "task-completed";
      completedPara.textContent = Task.completed();
      singleTask.appendChild(completedPara);

      //create bottom task line div and append to single task
      let bottomTaskLine = document.createElement("div");
      bottomTaskLine.className = "bottom-task-line";
      singleTask.appendChild(bottomTaskLine);

      //complete task
      let taskCompleteButton = document.createElement("button");
      taskCompleteButton.className = "completed-status";
      taskCompleteButton.addEventListener("click", () => {
        console.log("task completed");
      });
      let taskCompleteIcon = document.createElement("i");
      taskCompleteIcon.className = "fa-solid fa-circle-check";
      taskCompleteButton.appendChild(taskCompleteIcon);
      bottomTaskLine.appendChild(taskCompleteButton);

      //delete task
      let taskDeleteButton = document.createElement("button");
      taskDeleteButton.className = "delete-task";
      taskDeleteButton.addEventListener("click", () => {
        console.log("task deleted");
      });
      let taskDeleteIcon = document.createElement("i");
      taskDeleteIcon.className = "fa-solid fa-trash";
      taskDeleteButton.appendChild(taskDeleteIcon);
      bottomTaskLine.appendChild(taskDeleteButton);

      console.log(`Task name is:${Task.taskName}`);

      return singleTask;
    }

    i++;
  });
}

console.log(myTasks);

const loadTasks = () => {
  displayTasks();
};

//function to delete task
function deleteTask(i) {
  console.log(`task deleted`);
  console.log(i);
  myTasks.splice(i, 1);
  console.log(myTasks);
  displayTasks();
}

//function to complete task
function completeTask() {}

//function to filter array based on projects

export {
  loadTasks,
  myTasks,
  Task,
  addNewTask,
  displayTasks,
  deleteTask,
  completeTask,
};
