// У вас есть объект, представляющий собой список студентов и их оценок
// (например, { Анна: 95, Иван: 88, Мария: 92 }). Используйте Object.keys() и Array.filter()
// для фильтрации студентов, у которых оценки выше определенного порога.

const obj = {
  Анна: 95,
  Иван: 88,
  Мария: 92
}
const getGradeAfterAvarage = (obj, grade) => {
let flag = false;
for(let keys in obj){
  if(keys){

    flag = true;
  }
}
  try {
    if (!flag) throw new Error('invalid')
    return Object.values(obj).filter(el => el > grade);

  } catch (error) {
    return error.message
  }
}
console.log(getGradeAfterAvarage(obj, 90));