// У вас есть кнопка. После нажатия поменять background
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
  btn.style = 'background-color: #222; color: #fff'
})