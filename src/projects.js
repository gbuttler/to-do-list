import { myTasks } from "./task";

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
  console.log(filteredTasks);
};

export { myProjects, loadProjects, Project, filterByProjects, addNewProject };
