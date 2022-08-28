document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    buildTaskList(e.target.new-task-description.value);
    form.reset();
  })
});

function buildTaskList(todo) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x';
  li.textContent = `${todo} `;
  
  let ul = document.getElementById('tasks');
  ul.appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}

