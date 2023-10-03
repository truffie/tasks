// После нажатия на кнопку «Разблокировать» мы можем вносить изменения в
// инпут. После нажатия на заблокировать данное действие запрещается, тем самым
// выключая возможность редактирования значения инпута

const btnUnblock = document.querySelector('.unblock')
const btnBlock = document.querySelector('.block')
const input = document.querySelector('input')

btnUnblock.addEventListener('click', () => input.disabled = false)
btnBlock.addEventListener('click', () => input.disabled = true)