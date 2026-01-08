const inputElem = document.getElementById("input-el")
const addBtn = document.getElementById("add-btn")
const ulElem = document.getElementById("ul-el")

let todos = []

addBtn.addEventListener('click', addTodo)

function addTodo() {
  if(!inputElem.value) return
  
  todos.push(
    {
      id: Date.now(),
      text: inputElem.value,
      isCompleted: false
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
                ${todo.text}
                <button onclick="deleteTodo(${todo.id})">x</button>
              </li>
            `
  ))
  ulElem.innerHTML = html 
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id)
  renderTodo(todos)
}

