// На входе статичный объект и строка str. Написать функцию на поиск в объекте
// значения str используя Object.values ()

const obj = {
  яблоко: 'красное',
  банан: 'желтый',
  апельсин: 'оранжевый'
}
const hasValue = (obj,str) => Object.values(obj).includes(str)
console.log(hasValue(obj, 'красное'));