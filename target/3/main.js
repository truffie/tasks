// Создайте блок текста с кнопкой "Показать/Скрыть". При клике на кнопку текст
// должен показываться или скрываться.
const text = document.querySelector('.text');
const btn = document.querySelector('button');
let cont = text.textContent;
let flag = true;
btn.addEventListener('click', () => {
  if (flag) {
    text.style = 'visibility: hidden'
    flag = false;
  } else {
    text.style = 'visibility: visible'
    flag = true;

  }
})