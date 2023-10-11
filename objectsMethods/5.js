// Создайте функцию, которая принимает объект и возвращает массив всех его
// значений, используя Object.values().
const obj = {
  яблоко: 'красное',
  банан: 'желтый',
  апельсин: 'оранжевый'
}

const getValues = (obj) => Object.values(obj)
console.log(getValues(obj));