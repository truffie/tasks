// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое

(function showRes(){
  const span = document.querySelector('span');
  const input = document.querySelector('input')
  const btn = document.querySelector('button')
  let arr = []
  btn.addEventListener('click', () => {
  
    try {
      if (!input.value) throw new Error('invalid')
      arr.push(input.value)
      span.textContent = arr
      input.value = ''
    } catch (error) {
      alert(error.message)
    }
  })
}())

