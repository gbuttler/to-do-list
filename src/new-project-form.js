import { loadProjects, myProjects, Project, addNewProject } from "./projects";
import { newProject } from "./sidebar";

let projectForm = document.querySelector(".project-form-div");

const projectFormFunc = () => {
  console.log("project form is running");

  projectForm.style.zIndex = "6";
};

const cancelProjectForm = () => {
  pName.value = " ";

  projectForm.style.zIndex = "-6";
};

export { projectFormFunc, cancelProjectForm, projectForm };
