//array to hold projects
const myProjects = ["Personal", "Work", "Hobbies"];

//new project button
const newProject = () => {
  console.log("creating a new project");

  //using prompt to create a new project
  let newProjectItem = prompt("Please enter your project name", "New Project");

  //add projects to project array
  function addNewProject() {
    myProjects.push(newProjectItem);
  }

  //add the new project to the html
  let projectList = document.querySelector(".project-list");
  const para = document.createElement("p");
  para.classList.add("indv-project");
  para.innerHTML = newProjectItem;
  projectList.appendChild(para);

  //add project options to the form
  let formOption = document.getElementById("project");
  const option = document.createElement("option");
  option.text = newProjectItem;
  formOption.add(option);

  //add new project to the array
  addNewProject();

  //show project list in console
  console.log(myProjects);
};

export { newProject };
