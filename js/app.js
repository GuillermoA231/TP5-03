const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Evitar que se recargue la página

  const inputTask = document.getElementById('inputTask');
  const taskText = inputTask.value.trim(); // Quitar espacios en blanco al inicio y fin

  if (taskText !== '') {
    const newTask = document.createElement('li');
    newTask.className = 'list-group-item d-flex justify-content-between align-items-center';
    newTask.innerHTML = `
      <span>${taskText}</span>
      <button type="button" class="btn btn-danger btn-sm">Eliminar</button>
    `;
    taskList.appendChild(newTask);

    inputTask.value = ''; // Limpiar el input
  }
});
taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-danger')) {
      const task = event.target.closest('.list-group-item');
      task.remove();
    }
  });
  