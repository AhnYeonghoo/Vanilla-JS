document.addEventListener('DOMContentLoaded', () => {
  //문서 객체를 가져옵니다.
  const input = document.querySelector('#todo')
  const todoList = document.querySelector('#todo-list')
  const addButton = document.querySelector('#add-button')
  
  let keyCount = 0 // removeTodo() 함수에서 문서 객체를 쉽게 제거하기 위한 변수
  
  //할 일 목록 추가하는 함수 시작
  const addTodo = () => {
    //입력 양식에 아무 내용이 없으면 경고창 띄우기
    if (input.value.trim() === '') {
      alert('할 일을 입력해주세요.')
      return 
    }

    //문서 객체 생성
    const item = document.createElement('div')
    const checkbox = document.createElement('input')
    const text = document.createElement('span')
    const button = document.createElement('button')

    const key = keyCount
    keyCount += 1
    
    item.setAttribute('data-key', key)
    item.appendChild(checkbox)
    item.appendChild(text)
    item.appendChild(button)
    todoList.appendChild(item)

    checkbox.type = 'checkbox'
    //checkbox 객체 조작, 체크박스 클릭시 line 그어짐
    checkbox.addEventListener('change', (event) => {
      item.style.textDecoration = event.target.checked ? 'line-through' : ''
    })
    
    text.textContent = input.value

    button.textContent = '제거하기'
    button.addEventListener('click', () => {
      removeTodo(key)
    })
    input.value = ''
  }
  const removeTodo = (key) => {
    const item = document.querySelector(`[data-key="${key}"]`)
    todoList.removeChild(item)
  }

  addButton.addEventListener('click', addTodo)
  input.addEventListener('keyup', (event) => {
    const ENTER = 13
    if (event.keyCode === ENTER) {
      addTodo()
    }
  })
})