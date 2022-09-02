document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target.new_task.value);
    form.reset();
  })
});

function buildToDo(todo) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.textContent = 'x'
  li.textContent = `${todo} `;
  li.appendChild(btn);
  btn.addEventListener('click', handleDelete);
  document.querySelector('ul').appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
