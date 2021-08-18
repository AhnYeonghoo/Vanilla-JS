const loginForm = document.querySelector('.login-form')
const loginInput = document.querySelector('.login-form input')
const h1 = document.querySelector('h1')
const HIDDEN_CLASS = 'hidden'
const USERNAME_KEY = localStorage.getItem('username')
const removeBtn = document.querySelector('.log-out')

function onSubmitLogin (e) {
  e.preventDefault()
  const username = loginInput.value
  localStorage.setItem('username', username)
  loginForm.classList.add(HIDDEN_CLASS)
  appearName(username)
}

function appearName (name) {
  h1.classList.remove(HIDDEN_CLASS)
  removeBtn.classList.remove(HIDDEN_CLASS)
  h1.textContent = `hello ${name}!`
}

function deleteUserName () {
  localStorage.removeItem('username')
  h1.classList.add(HIDDEN_CLASS)
  loginForm.classList.remove(HIDDEN_CLASS)
  removeBtn.classList.add(HIDDEN_CLASS)
  loginInput.value = ''

}

if (USERNAME_KEY === null) {
  loginForm.classList.remove(HIDDEN_CLASS)
  //loginForm.addEventListener('submit', onSubmitLogin)
} else {
  appearName(USERNAME_KEY)
}

loginForm.addEventListener('submit', onSubmitLogin)
removeBtn.addEventListener('click', deleteUserName)





