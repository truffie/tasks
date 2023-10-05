const log = document.querySelector("#log")
const pass = document.querySelector("#pass")
const email = document.querySelector("#mail")
const button = document.querySelector('button')

const input = document.querySelectorAll('input')
button.addEventListener('click', () => {
  try {
    if (!/^[\w]+@+[a-z]+\.[a-z]{1,5}$/gm.test(email.value)) throw new Error('email isn`t valid')
    if (!/^[\w]{8,30}$/gm.test(pass.value)) throw new Error('pass isn`t valid')
    alert('successful')
  } catch (error) {
    alert(error.message)

  }
  finally {
    input.forEach((el) => {
      if (!el.value) {
        el.style.backgroundColor = 'red'
      } else {
        el.style.backgroundColor = 'white'
      }
    })
  }
  input.forEach((el) => {
    if (!el.value) {
      el.style.backgroundColor = 'red'
    } else {
      el.style.backgroundColor = 'white'
    }
  })
})
