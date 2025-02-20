let projectForm = document.querySelector(".project-form-div");

const projectFormFunc = () => {
  console.log("project form is running");
  projectForm.style.visibility = "visible";
  projectForm.style.zIndex = "6";
};

const cancelProjectForm = () => {
  pName.value = " ";

  projectForm.style.zIndex = "-6";
  projectForm.style.visibility = "hidden";
};

export { projectFormFunc, cancelProjectForm, projectForm };
