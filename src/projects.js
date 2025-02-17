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

const loadProjects = () => {
  console.log("projects are loading");
  console.log(myProjects);

  myProjects.forEach((Project, j) => {
    //add the new project to the html
    let projectList = document.querySelector(".project-list");
    const para = document.createElement("p");
    para.classList.add("indv-project");
    para.innerHTML = Project.pName;
    projectList.appendChild(para);

    //add project options to the form
    let formOption = document.getElementById("project");
    const option = document.createElement("option");
    option.text = Project.pName;
    formOption.add(option);
  });
};

export { myProjects, loadProjects };
