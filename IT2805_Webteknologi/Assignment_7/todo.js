document.querySelector("#add").addEventListener("click", addTask);

const taskList = document.querySelector("#taskList");
const input = document.querySelector("#task");
var tasks = [];

//Creates an empty output tag
const output = document.createElement('output');
output.id = "output";
document.querySelector('#todo').appendChild(output);
output.innerHTML = '';

function addTask(){
  event.preventDefault();

  //Fetches task input and creates list element with checkbox.
  let listElement = document.createElement('li');
  //const task = document.querySelector("#task").value;
  let task = document.createTextNode(input.value);
  let checkbox = document.createElement('input');
  checkbox.type = "checkbox";

  checkbox.addEventListener("click", checkCount);
  /*
  listElement.appendChild(checkbox);
  listElement.innerHTML += task;*/


  //Writes task to an object which in turn is stored in an array.
  today = new Date();
  timestamp = today.getTime()
  /*
  const object = [
    {
      task: task,
      date: timestamp,
      checkbox.checked
    }
  ];
  tasks.push(object);
  */
  tasks.unshift([task.nodeValue, checkbox.checked, timestamp]);

  listElement.appendChild(checkbox);
  listElement.appendChild(task);

  //Inserts the new task at the top of the list.
  taskList.insertBefore(listElement, taskList.firstChild);

  //Clears and focuses on the input box
  input.value = '';
  input.focus();

  completionTracker();
}

function checkCount(){
  let boxList = taskList.children;
  for(let i = 0; i < boxList.lenght; ++i){
    let element = boxList[i];
    let children = element.childNodes;
    let checkbox = children[0];
    if(checkbox.checked){
      element.classList.add("checked");
      tasks[i][1] = true;
    }
    else{
      element.classList.remove("checked");
      tasks[i][1] = false;
    }
  }
  completionTracker();
}

function completionTracker(){
  let completed = 0;
  let total = 0;
  for(tasks of tasks){
    total++;
    let checkbox = tasks[1];
    if (checkbox){
      completed++;
    }
  }
  output.innerText = completed + "/" + total + "completed."
}
