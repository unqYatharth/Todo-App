const inputElem = document.getElementById("input-el")
const addBtn = document.getElementById("add-btn")
const ulElem = document.getElementById("ul-el")

let todos = []

addBtn.addEventListener('click', addTodo)

function addTodo() {
  if (!inputElem.value) return

  todos.push(
    {
      id: Date.now(),
      text: inputElem.value,
      isCompleted: false,
      isEditing: false
    }
  )
  renderTodo(todos)
  inputElem.value = ""
}

function renderTodo(todos) {
  let html = ""
  todos.forEach(todo => (
    html += `
              <li>
                ${todo.isEditing ?
      `<input type="text" value="${todo.text}" id="edit-${todo.id}">
                      <button id="save-todo-btn" onclick="saveUpdatedTodo(${todo.id})"><i class="fa-solid fa-floppy-disk"></i></button>`
      : `<div class="todo-text">
                        <input id="todo-${todo.id}" type="checkbox" ${todo.isCompleted ? 'checked' : ''} onclick="toggleComplete(${todo.id})">
                        <label class="${todo.isCompleted ? 'completed' : ''}" for="todo-${todo.id}">${todo.text}</label>
                      </div>
                      <div class="todo-btns">
                        <button id="update-btn" onclick="updateTodo(${todo.id})"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button id="delete-btn" onclick="deleteTodo(${todo.id})"><i class="fa-solid fa-trash"></i></button>
                      </div>`
    }
              </li>
            `
  ))
  ulElem.innerHTML = html
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id)
  renderTodo(todos)
}

function updateTodo(id) {
  todos = todos.map(todo => (
    todo.id === id ? { ...todo, isEditing: true } : todo
  ))
  renderTodo(todos)
}

function saveUpdatedTodo(id) {
  const updateInputEl = document.getElementById(`edit-${id}`)
  const newText = updateInputEl.value.trim()
  if (!newText) return;
  todos = todos.map(todo => (
    todo.id === id ? { ...todo, text: newText, isEditing: false } : todo
  ))
  renderTodo(todos)
}

function toggleComplete(id) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
  )
  renderTodo(todos)
}