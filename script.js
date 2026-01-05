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
  inputElem.value = ""
}

