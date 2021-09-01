const toDoForm = document.getElementById('todo-form')
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.getElementById('todo-list') //submit 새로고침됨

//todos String이 두번 사용되니까  아예 상수로 만들자
const TODOS_KEY = 'todos'

let toDos = []

function saveToDos() {
  // JSON.stringify(toDos) String으로 바꿔줌
  //Json.parse() array로 만듬
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event) {
  const li = event.target.parentElement

  li.remove()
  //toDo는 toDos의 each item
  //클릭한 li.id와 다른 toDo는 남겨두고 싶어!!꺄앙옹
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
  saveToDos()
}

function paintToDo(newTodo) {
  const toDoLi = document.createElement('li')
  toDoLi.id = newTodo.id
  const toDoSpan = document.createElement('span')
  toDoSpan.innerText = newTodo.text
  const toDoButton = document.createElement('button')
  toDoButton.innerText = 'X'
  toDoButton.addEventListener('click', deleteToDo)
  toDoLi.appendChild(toDoSpan)
  toDoLi.appendChild(toDoButton)

  toDoList.appendChild(toDoLi)
}

function handleToDoSubmit(event) {
  event.preventDefault()
  //input현재 value를 새로운 변수 newTodo 복사
  const newTodo = toDoInput.value
  //그리고 input 비워주기
  toDoInput.value = ''
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj)
  paintToDo(newTodoObj)
  saveToDos()
}

toDoForm.addEventListener('submit', handleToDoSubmit)

// function sayHello(item) {
//   console.log('hello', item)
// }

const savedToDos = localStorage.getItem(TODOS_KEY)
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos)
  toDos = parsedToDos
  parsedToDos.forEach(paintToDo)
}
//return true  arr.filter(sexyFilter)
//return 에 true값인것만 남는다
//filtler는 기본 array를 유지함
