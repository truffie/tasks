// По нажатию на кнопку поменять местами значения 2 инпутов

const btn1 = document.querySelector('.btn1')
const inp1 = document.querySelector('.inp1')
const inp2 = document.querySelector('.inp2')
  
btn1.addEventListener('click', () => [inp1.value, inp2.value] = [inp2.value, inp1.value])