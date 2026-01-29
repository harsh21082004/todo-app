// Get the elements
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// Initialize an empty array to store todo items
let todoItems = [];

// Function to add a todo item
function addTodoItem() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const todoItem = {
            text: todoText,
            completed: false,
            selected: false
        };
        todoItems.push(todoItem);
        todoInput.value = '';
        renderTodoList();
    }
}

// Function to render the todo list
function renderTodoList() {
    todoList.innerHTML = '';
    todoItems.forEach((todoItem, index) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todoItem.selected;
        checkbox.onchange = () => {
            todoItem.selected = !todoItem.selected;
            renderTodoList();
        };
        li.appendChild(checkbox);
        li.textContent = todoItem.text;
        if (todoItem.completed) {
            li.style.textDecoration = 'line-through';
        }
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTodoItem(index);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
    const deleteSelectedBtn = document.createElement('button');
    deleteSelectedBtn.textContent = 'Delete Selected';
    deleteSelectedBtn.onclick = deleteSelectedTodos;
    todoList.appendChild(deleteSelectedBtn);
}

// Function to delete a todo item
function deleteTodoItem(index) {
    todoItems.splice(index, 1);
    renderTodoList();
}

// Function to delete selected todo items
function deleteSelectedTodos() {
    todoItems = todoItems.filter(todoItem => !todoItem.selected);
    renderTodoList();
}

// hi
// Add event listener to the add todo button
addTodoBtn.addEventListener('click', addTodoItem);

// Initialize the todo list
renderTodoList();