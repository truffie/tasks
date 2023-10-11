let choose = document.querySelector('.choose')
let cont = document.querySelector('.container');
let p = document.querySelectorAll('p');
let flag = false;

p.forEach((el) => el.addEventListener(('mouseover'), () => el.style.backgroundColor = '#f2f2f2'))

p.forEach((el) => el.addEventListener(('mouseleave'), () => el.style.backgroundColor = '#fff'))

choose.addEventListener(('click'), () => {
  p.forEach((el) => {

    if (el.textContent === choose.textContent) {
      el.style.color = "red"
    } else {
      el.style.color = "black"
    }
  })

  if (!flag) {
    cont.style.visibility = 'visible'
    flag = true;
  } else {
    cont.style.visibility = 'hidden'
    flag = false;
  }
})
cont.addEventListener(('click'), (event) => {
  choose.textContent = event.target.textContent
  cont.style.visibility = 'hidden'
  flag = false;
})