document.addEventListener('DOMContentLoaded', () => {
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  //Add a new task
  function addTodo() {
    const todoText = todoInput.value.trim();

    // Create li element  
    if (todoText !== '') {
      const todoItem = document.createElement('li');
      todoItem.classList.add('todo-item');
    // Add text to li item
      const todoAddText = document.createElement('span')
      todoAddText.textContent = todoText
      todoItem.appendChild(todoAddText)
      
      // Delete li item
      const deleteBtn = document.createElement('button')
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', () => {
        todoList.removeChild(todoItem)
      })
      //  Add delete button to each todo item
      todoItem.appendChild(deleteBtn);
      // Add item to todo list
      todoList.appendChild(todoItem);
      // Clear input field
      todoInput.value = ''
      todoInput.focus()
    }
  }
  todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addTodo()

    }
  })
})
