import { myTasks, Task, currentDate, taskScreen, displayTasks } from "./task";

const filterDueToday = () => {
  console.log("tasks due today");

  const result = myTasks.filter(checkDate);

  function checkDate(Task) {
    console.log("date being checked");
    return Task.due === currentDate;
  }

  console.log("tasks due today are loading");
  let i = 0;
  taskScreen.innerHTML = "";

  result.forEach((Task, j) => {
    console.log(i, myTasks.length);
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

    //create bottom task line div and append to single task
    let bottomTaskLine = document.createElement("div");
    bottomTaskLine.className = "bottom-task-line";
    singleTask.appendChild(bottomTaskLine);

    //complete task
    let taskCompleteButton = document.createElement("button");
    taskCompleteButton.className = "completed-status";
    taskCompleteButton.addEventListener("click", () => {
      console.log("task completed", j);
      myTasks.splice(j, 1);
      displayTasks();
    });
    let taskCompleteIcon = document.createElement("i");
    taskCompleteIcon.className = "fa-solid fa-circle-check";
    taskCompleteButton.appendChild(taskCompleteIcon);
    bottomTaskLine.appendChild(taskCompleteButton);

    i++;

    return singleTask;
  });

  console.log(result);
};

export { filterDueToday };
