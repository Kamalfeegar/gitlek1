const addTodoInput = document.getElementById("addTodo");
const addBtn = document.querySelector('.addBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const todoList = document.getElementById('todoList');

addBtn.addEventListener('click', () => {
    addTodo();
   


})
addTodoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        addTodo()
    }
})


deleteBtn.addEventListener('click', () => {
  const selectedTodos = todoList.querySelector('.selected');
  selectedTodos.forEach((selectedTodo) => {
        todoList.removeChild(selectedTodo)
      
    });
  }); 

 todoList.addEventListener('click', (event) => {
      const clickedItem = event.target;
      if (clickedItem.tagName === 'LI') {
        clickedItem.classList.toggle('selected');
      }
    });

    const addTodo = () => {
        const newTodo = addTodoInput.value.trim();
        if (newTodo) {
          const listItem = document.createElement('li');
          listItem.textContent = newTodo
          todoList.appendChild(listItem)
          addTodoInput.value = '';
        }

    }