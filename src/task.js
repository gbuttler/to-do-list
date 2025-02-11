const loadTasks = () => {
  //array to hold the tasks
  const myTasks = [];

  //access the content div
  const taskScreen = document.querySelector(".content");

  // task object
  function task(name, project, due, notes, completed) {
    this.name = name;
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
  function addNewTask(name, project, due, notes, completed) {
    const newTask = new task(name, project, due, notes, completed);

    myTasks.push(newTask);
  }

  //dummy tasks
  addNewTask("hang up laundry", "Daily", "today", "", false);

  addNewTask(
    "clean the bathroom",
    "Weekly",
    "today",
    "don't forget to change the towels",
    false
  );
  addNewTask(
    "clean the bathroom",
    "Weekly",
    "today",
    "don't forget to change the towels blah blah blah blah blah blah blah blah blah",
    false
  );
  addNewTask(
    "clean the bathroom",
    "Weekly",
    "today",
    "don't forget to change the towels",
    false
  );
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
          <p class='task-name'>${Task.name}</p>
          <p class='task-project'>${Task.project}</p>
          <p class='task-due'>${Task.due}</p>
          <p class='task-notes'>${Task.notes}</p>
          <p class='task-completed'>${Task.completed()}</p>
        </div>`;

      taskScreen.innerHTML = tasksToDisplay;

      console.log(`Task name is:${Task.name}`);

      i++;
    });
  }
  console.log(myTasks);
  displayTasks();
};

export { loadTasks };
