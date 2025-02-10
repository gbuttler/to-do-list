// task object
function task(name, project, due, notes, completed) {
  this.name = name;
  this.project = project;
  this.due = due;
  this.notes = notes;
  this.completed = function () {
    if (this.completed == true) {
      console.log("completed");
      return true;
    } else {
      console.log("not completed");
      return false;
    }
  };
}

export { task };
