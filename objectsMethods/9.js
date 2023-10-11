// Создайте функцию, которая принимает два объекта. Используйте hasOwnProperty,
// чтобы объединить только те свойства, которые существуют в обоих объектах

const obj1 = {
  яблоко: 'красное',
  банан: 'желтый',
  апельсин: 'оранжевый'
}
const obj2 = {
  яблоко: 'зеленое',
  огурец: 'зеленый',
  апельсин: 'оранжевый'
}
const hasOwnInTwo = (first, second) => {
  const obj = {};
  for (let key in first) {
    if (first[key] === second[key]) { obj[key] = first[key] }
  }
  return obj
}
console.log(hasOwnInTwo(obj1, obj2));