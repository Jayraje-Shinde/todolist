function addTODO() {
  if (document.getElementById("todo-input").value == "" || document.getElementById("todo-input").value == null) {
    alert("At least do a task u fatso");
  } else {
    let task_name = document.getElementById("todo-input").value;
    const taskNumber = todoList.children.length += 1;
    const todoItem = document.createElement('li');
    const todoTask = document.createElement('span');
    const Delete = document.createElement('buttom');
    const Update = document.createElement('buttom');
    const done = document.createElement('button');

    todoItem.className = "todo-item";
    todoItem.id = "todo-item" + taskNumber;
    todoTask.innerHTML = task_name;
    todoTask.className = "todo-text";

    Update.className = "edit-button";
    Update.id = "todo-item" + taskNumber;
    Update.innerHTML = "Edit";
    Delete.className = "delete-button"
    Delete.id = "todo-item" + taskNumber;
    Delete.innerHTML = "Delete";

    done.className = "delete-button done";
    done.id = "todo-item" + taskNumber;
    done.innerHTML = "Compeleted";

    todoItem.appendChild(todoTask);
    todoItem.appendChild(done);
    todoItem.appendChild(Update);
    todoItem.appendChild(Delete);

    document.getElementById("todoList").appendChild(todoItem);
    document.getElementById("todo-input").value = null;

    Delete.addEventListener('click', function () {
      const clickedElement = event.target;
      const classid = clickedElement.id;
      const element = document.getElementById(classid);

      if (element) {
        element.remove();
      }
    });

    Update.addEventListener('click', function () {
      const clickedElement = event.target;
      const classid = clickedElement.id;
      const userInput = prompt("Changes in the task");
      if (userInput != null || userInput != "") {
        const span_query = document.getElementById(classid);
        const span = span_query.querySelector('span'); // or 'span.inner-text' if you want to be more specific
        span.innerHTML = userInput.valueOf();
      }
    });

    done.addEventListener('click', function () {
      const clickedElement = event.target;
      const classid = clickedElement.id;
      const element = document.getElementById(classid);
      if (element) {
        const span_query = document.getElementById(classid);
        const span = span_query.querySelector('span');

        span.classList.toggle("strikethrough");


      }
    });
  }
}

