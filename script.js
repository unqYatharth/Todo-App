const inputElem = document.getElementById("input-el")
const addBtn = document.getElementById("add-btn")
const ulElem = document.getElementById("ul-el")

const todos = []

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
  let todo = ""
  for(let i = 0; i < todos.length; i++) {
    todo = todos[i].text
  }
  // console.log(todo)
  ulElem.innerHTML += `
                        <li>${todo}</li>
                      `
}

