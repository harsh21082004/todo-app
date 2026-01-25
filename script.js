const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

let todos = [];

addTodoBtn.addEventListener('click', addTodo);

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const todo = {
            text: todoText,
            completed: false
        };
        todos.push(todo);
        todoInput.value = '';
        renderTodoList();
    }
}

function renderTodoList() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
            <span>${todo.text}</span>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(todoItem);

        const completeBtn = todoItem.querySelector('.complete-btn');
        completeBtn.addEventListener('click', () => {
            todos[index].completed = true;
            renderTodoList();
        });

        const deleteBtn = todoItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            todos.splice(index, 1);
            renderTodoList();
        });

        if (todo.completed) {
            todoItem.querySelector('span').classList.add('completed');
        }
    });
}