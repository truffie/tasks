// Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута.
// Проверки на ввод. Обработать ошибки

const button = document.querySelector('button')
const input = document.querySelector('input')

button.addEventListener('click',() => {
  try{
if(!input.value || typeof input.value !== 'string') throw new Error('пустое значение')
alert(input.value)
  }catch(error){
    alert(error.message);
  }
})