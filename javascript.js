function addtask() {
  let task_name = document.getElementById("task").value;
  const task = document.createElement("li");
  task.innerText = task_name;
  document.getElementById("displayingtask").appendChild(task);
  document.getElementById("task").value = "";
}