//new project button

const newProject = () => {
  console.log("creating a new project");

  //add the new project to the html
  let newProject = prompt("Please enter your project name", "New Project");
  let projectList = document.querySelector(".project-list");
  const para = document.createElement("p");
  para.classList.add("indv-project");
  para.innerHTML = newProject;
  projectList.appendChild(para);

  //add project options to the form
  let formOption = document.getElementById("project");
  const option = document.createElement("option");
  option.text = newProject;
  formOption.add(option);
};

export { newProject };
