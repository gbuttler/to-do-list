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
  let tasksToDisplay = "";

  console.log("tasks are loading");
  let i = 0;

  //name, project, due, notes, completed

  myTasks.forEach((Task) => {
    tasksToDisplay += `
      <div class='singleTask'>
        <p class='task-name'>${Task.taskName}</p>
        <p class='task-project'>${Task.project}</p>
        <p class='task-due'>${Task.due}</p>
        <p class='task-notes'>${Task.notes}</p>
        <p class='task-completed'>${Task.completed()}</p>
      </div>`;

    taskScreen.innerHTML = tasksToDisplay;

    console.log(`Task name is:${Task.taskName}`);

    i++;
  });
}
console.log(myTasks);

const loadTasks = () => {
  displayTasks();
};

//function to filter array based on projects

export { loadTasks, myTasks, Task, addNewTask, displayTasks };
