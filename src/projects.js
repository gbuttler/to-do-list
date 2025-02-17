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

//function to load projects
const loadProjects = () => {
  console.log("projects are loading");
  console.log(myProjects);

  myProjects.forEach((Project, j) => {
    //add the new project to the html
    let projectList = document.querySelector(".project-list");
    const btn = document.createElement("button");
    btn.classList.add("indv-project");
    btn.innerHTML = Project.pName;
    projectList.appendChild(btn);

    //add project options to the form
    let formOption = document.getElementById("project");
    const option = document.createElement("option");
    option.text = Project.pName;
    formOption.add(option);
  });
};

//function to allow you to filter by project
const filterByProjects = () => {};
//get project name
//compare inner HTML to Task.project
//create a new array with those filtered tasks
//display the new array of tasks

export { myProjects, loadProjects, Project, filterByProjects };
