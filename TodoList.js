document.addEventListener('DOMContentLoaded', () => {

  const h1 = document.createElement('h1')
  h1.textContent = '할 일 목록'
  document.body.appendChild(h1)

  const inputText = document.createElement('input')
  document.body.appendChild(inputText)
  inputText.type = 'text'
  
  const addBtn = document.createElement('button')
  document.body.appendChild(addBtn)
  addBtn.textContent = '추가하기'

  addBtn.addEventListener('click', (event) => {
    if (inputText.value !== '') {
     const div = document.createElement('div')
     document.body.appendChild(div)
     
     //체크박스 클릭시 TodoList에 선이 그어짐
     const todoCheck = document.createElement('input')
     todoCheck.type = 'checkbox'
     todoCheck.addEventListener('change' ,() => {
       if (todoCheck.checked) {
         div.style.textDecoration = 'line-through'
       } else {
         div.style.textDecoration = 'none'
       }
     })
     div.appendChild(todoCheck)
 
     //추가하기 눌렀을 때 TodoList 생성
     const span = document.createElement('span')
     span.textContent = inputText.value
     inputText.value = ''
     div.appendChild(span)
  
    //TodoList 삭제 구현
    const deleteBtn = document.createElement('button')
    div.appendChild(deleteBtn)
    deleteBtn.textContent = '제거하기'
    deleteBtn.addEventListener('click', (event) => {
      div.parentNode.removeChild(div)
    })
  } else {
    alert('텍스트를 입력하세요.')
  }

   
    
  })
  
})
