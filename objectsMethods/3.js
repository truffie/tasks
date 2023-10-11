
// Преобразуйте объект с данными о фруктах (например, { яблоко: 'красное', банан:
// 'желтый', апельсин: 'оранжевый' }) в массив пар ключ-значение, используя
// Object.entries()

const obj = {
  яблоко: 'красное',
  банан: 'желтый',
  апельсин: 'оранжевый'
}
const getArrray = (obj) => {
let flag = false;
try{
  for(let keys in obj){
    if(keys){
      flag = true;
    }
  }
  if(!flag) throw new Error('empty')
  return Object.entries(obj)
}catch(error){
  return error.message
}

}
console.log(getArrray(obj));