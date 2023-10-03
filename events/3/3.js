// Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута

const button = document.querySelector('button')
const input = document.querySelector('input')

button.addEventListener('click',() => alert(input.value))