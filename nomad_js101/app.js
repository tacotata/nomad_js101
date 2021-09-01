const loginForm = document.querySelector('#login-form')
const loginInput = loginForm.querySelector('#login-form Input')
const link = document.querySelector('a')
const greeting = document.querySelector('#greeting')

//중요한 정보담은게 아니라 string만 포함된 변수는 대문자로 퓨ㅛ기하고  담으면 대문자로
const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

function handleLinkClick(event) {
  event.preventDefault()
  console.dir(event)
}

link.addEventListener('click', handleLinkClick)

function onLoginSubmit(event) {
  event.preventDefault()
  loginForm.classList.add(HIDDEN_CLASSNAME)

  localStorage.setItem(USERNAME_KEY, loginInput.value)
  paintGreetings()
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY)
  greeting.innerText = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', onLoginSubmit)
} else {
  paintGreetings()
}
