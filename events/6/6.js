// Необходимо отобразить кнопку и инпут со значением по умолчанию. По клику на
// кнопку заменить значение инпута

const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const inp1 = document.querySelector('.inp1')
const inp2 = document.querySelector('.inp2')

btn1.addEventListener('click', () => alert(inp1.value))
btn2.addEventListener('click', () => alert(inp2.value))