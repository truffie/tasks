// Необходимо отобразить кнопку с надписью «Нажми на меня» и инпут со
// значением по-умолчанию «+375(хх)ххх-хх-хх». По клику на кнопку заменить
// значение инпута на «+375(29)111-11-11»

const button = document.querySelector('button')
const input = document.querySelector('input')

button.addEventListener('click',() => input.value = '+375(29)111-11-11')