// Записать в результат удвоенное значение инпута. Добавить проверки
const inp = document.querySelector('input')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
  let res = +inp.value * 2

  try {
    if (isNaN(res) || !res) throw new Error('invalid')
    alert(res)
  } catch (error) {
    alert(error.message)
  }
})