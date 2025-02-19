import { myTasks, taskScreen } from "./task";

//array to hold projects
const myProjects = [];

function Project(pName) {
  this.pName = pName;
}

//add projects to project array
function addNewProject(pName) {
  const newProject = new Project(pName);

  myProjects.push(newProject);
}

//default projects
addNewProject("Personal");
addNewProject("Work");

let projectList = document.querySelector(".project-list");
let formOption = document.getElementById("project");

//function to load projects
const loadProjects = () => {
  console.log("projects are loading");
  console.log(myProjects);

  projectList.innerHTML = "";
  formOption.innerHTML = "";

  myProjects.forEach((Project, j) => {
    //add the new project to the html
    let projectList = document.querySelector(".project-list");
    const btn = document.createElement("button");
    btn.classList.add("indv-project");
    btn.innerHTML = Project.pName;
    projectList.appendChild(btn);
    //add filter capabilities to button
    btn.addEventListener("click", function () {
      filterByProjects(Project.pName);
    });

    //add project options to the form

    const option = document.createElement("option");
    option.text = Project.pName;
    formOption.add(option);
  });
};

//function to allow you to filter by project
const filterByProjects = (projName) => {
  console.log("filtering....");

  console.log(projName);

  let filteredTasks = myTasks.filter((Task) => {
    return Task.project === projName;
  });

  let i = 0;
  taskScreen.innerHTML = "";

  filteredTasks.forEach((Task, j) => {
    console.log(i, filteredTasks.length);
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

    console.log(`Task name is:${Task.taskName}`);
    i++;

    return singleTask;
  });
};

export { myProjects, loadProjects, Project, filterByProjects, addNewProject };
