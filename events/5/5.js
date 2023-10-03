// Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0. Если
// проверка true, то вывести в Результат ряд Фибоначчи

const input = document.querySelector('input')
const button = document.querySelector('button')

const createFab = (len) => {
  let res = [];
  for (let i = 0; i < len; i++) {
    if (i < 2) {
      res.push(i);
    }
    else if (i === 2) {
      res.push(1)
    }
    else if (i >= 3) {
      res.push(res[i - 1] + res[i - 2])
    }
  }
  return res
}
button.addEventListener('click', () => {
  let length = input.value;
  try {
    if (length <= 0) throw new Error('invalid!')
    alert(createFab(length));

  } catch (error) {
    alert(error.message)
  }
})