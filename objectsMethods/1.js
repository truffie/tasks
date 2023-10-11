//  Создайте объект, представляющий информацию о товарах в интернет-магазине
// (например, { product1: 10, product2: 5, product3: 8 }). Используйте Object.keys() для
// подсчета общего количества различных товаров
const obj = {
  product1: 10,
  product2: 5,
  product3: 8,
  product4: '23',
  product5: true
}

const countValues = (obj) => Object.values(obj).reduce((acc,el) => typeof el === 'number' ? acc += el: acc += 0, 0)
console.log(countValues(obj));