const list = document.querySelector('ul');
const p = document.querySelector('p')

list.addEventListener(('click'), (event) => {
  p.textContent = event.target.textContent
})