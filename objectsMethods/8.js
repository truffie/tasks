// На вход подается число. Необходимо каждое значение возвести в степень
// индекса и вычислить сумму. 12345 = 1
// 0+2
// 1+3
// 2+4
// 3+5
// 4
const sumSquares = (num) => {
  try {
    if (isNaN(num)) throw new Error('not number')
    return Array.from(num + '').reduce((acc, el, index) => acc += el ** index, 0)
  } catch (error) {
    return error.message
  }
}
console.log(sumSquares(123));