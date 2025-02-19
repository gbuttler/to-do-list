import { loadProjects, myProjects, Project, addNewProject } from "./projects";
import { newProject } from "./sidebar";

let projectForm = document.querySelector(".project-form-div");

const projectFormFunc = () => {
  console.log("project form is running");

  projectForm.style.zIndex = "6";

  //get information from form and create a new project
  document
    .getElementById("new-project-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("project added");

      //form values

      Project.pName = event.target.pName.value;

      console.log(Project.pName);

      addNewProject(Project.pName);

      projectForm.style.zIndex = "-6";

      document.getElementById("new-project-form").reset();

      console.log(myProjects);

      loadProjects();
    });
};

const cancelProjectForm = () => {
  pName.value = " ";

  projectForm.style.zIndex = "-6";
};

export { projectFormFunc, cancelProjectForm };
