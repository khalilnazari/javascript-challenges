/*
  Khalil Nazari 19 Dec 2019
*/ 


const addButton = document.querySelector('.add-task-btn');
const ul = document.querySelector('.tasks_list');

class task {
  constructor (taskName) {
    this.createTask(taskName);
  }

  createTask (taskName) {
    
    // create task item 
    let li = document.createElement('li'); 
    li.classList.add('list-group-item');
    li.classList.add('list-group-item-dark');
    li.setAttribute('id', 'task_item_sample');
    
    // create input field 
    let input = document.createElement('input');
    input.classList.add('task');
    input.disabled = true; 
    
    input.value = taskName; 
    input.type = 'text'; 

    // create button div
    let divButton = document.createElement('div');
    divButton.classList.add('action_buttons');

    // create edit button
    let editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn-sm';
    editBtn.innerHTML = 'EDIT';

    // create delete button 
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm'; 
    deleteBtn.innerHTML = "Delete"

    // create edit button
    let updateBtn = document.createElement('button');
    updateBtn.className = 'btn btn-success btn-sm w-100';
    updateBtn.innerHTML = 'Update';
    updateBtn.setAttribute('style', 'display:none;');
    
    // appedchild 
    li.appendChild(input);
    divButton.appendChild(editBtn);
    divButton.appendChild(deleteBtn);
    divButton.appendChild(updateBtn);
    li.appendChild(divButton);
    ul.prepend(li);
    
    // hide error message 
    this.error_message()

    // edit task 
    editBtn.addEventListener('click', () => {
      this.editTask(input, editBtn, deleteBtn, updateBtn)
    });

    // delete task 
    deleteBtn.addEventListener('click', () => {
      this.deleteTask(ul, li)
    });

    // update 
    updateBtn.addEventListener('click', () => {
      this.updateTask(input, editBtn, deleteBtn, updateBtn)
    })

  }

  deleteTask(ul, li) {
    ul.removeChild(li);
    if(ul.children.length == 0) {
      let err_msg = document.querySelector('.error_message');
      err_msg.style.cssText = 'display:block';
    }
  }

  editTask(input, editBtn, deleteBtn, updateBtn) {
      editBtn.setAttribute('style', 'display:none; '); 
      deleteBtn.setAttribute('style', 'display:none; '); 
      updateBtn.setAttribute('style', 'display:block; '); 
      input.disabled = false;
      input.setAttribute('style', 'border: none; outline:none; padding:10px; font-size:18px; background-color:white; color:#000;');
  }


  updateTask(input, editBtn, deleteBtn, updateBtn) {
    input.value= input.value; 
    editBtn.setAttribute('style', 'display:block; '); 
    deleteBtn.setAttribute('style', 'display:block; '); 
    updateBtn.setAttribute('style', 'display:none; '); 
    input.disabled = false;
    input.setAttribute('style', 'border: none; background-color:inhirit;');
    input.disabled = true; 
  }

  error_message (){
    let err_msg = document.querySelector('.error_message');
    err_msg.style.cssText = 'display:none'; 
  }

}


// addButton.addEventListener('click', () => {
//   const newTaskValue= document.querySelector("#taskInput");

//   if(newTaskValue.value != ""){
//     new task(newTaskValue.value); 
//     newTaskValue.value = "";
//   } 

// });

window.addEventListener('keydown', (e) => {
  if(e.which == 13) {
    const newTaskValue= document.querySelector("#taskInput");

  if(newTaskValue.value != ""){
    new task(newTaskValue.value); 
    newTaskValue.value = "";
  } 
  }
});


const taskForm = document.getElementById('taskForm'); 
const title = document.getElementById('taskTitle');
const description = document.getElementById('tastDetail');
const taskWrapper = document.getElementById('taskWrapper');
let taskArray = []; 

taskForm.addEventListener('submit', (e) => {
  e.preventDefault(); 

  const date = new Date(); 
  const today = date.getDate() +"-"+ date.getMonth() +"-"+ date.getFullYear();
  
  if(title.value === '') return; 
  
  const taskObj = {
    
    title:title.value, 
    description: description.value,
    modifiedAt: today,
    id: uid(),
  }

  title.value = ''; 
  description.value = ''; 

  taskArray.push(taskObj)


  console.log(taskArray)


  const taskString = taskArray.map((task) => (
      `
      <div class="taskCart" id=${task.id}>
        <div class="taskCart__header">
          <h3>${task.title}</h3>
          <div class="menu">
            <i class="fa-solid fa-ellipsis-vertical taskMenuButton"></i>
            <div class="menuBar">
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </div>
        </div>

        <div class="taskCart__body">
          <p>${task.description}</p>
        </div>
        <div class="taskDate">
          <span>Last modified: ${task.modifiedAt}</span>
        </div>
      </div>
      `
  )).join('')
  
  appendTask(taskString)
})


function appendTask(taskString) {
  taskWrapper.innerHTML = taskString;
}

const taskMenuButton = document.querySelectorAll('.taskMenuButton'); 
taskMenuButton.forEach(button => {
  button.addEventListener('click', () => {
    button.nextElementSibling.classList.toggle('show'); 
  })
})

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}