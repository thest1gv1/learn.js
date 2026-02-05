// function calculateTotal(price, quantity, discount) {
//   debugger; // ← здесь выполнение остановится
//
//   const subtotal = price * quantity;
//   const discountAmount = subtotal * discount;
//   const total = subtotal - discountAmount;
//
//   return total;
// }
//
// const result = calculateTotal(100, 3, 0.2);
// console.log("Итого:", result);

//
// function calculateTotal(price, quantity, discount) {
//   debugger; // остановка здесь
//
//   const subtotal = price * quantity;
//   const discountAmount = subtotal * discount;
//
//   // ❌ ошибка: опечатка (subTotal вместо subtotal)
//   const total = subTotal - discountAmount;
//
//   return total;
// }
//
// const result = calculateTotal(100, 3, 0.2);
// console.log("Итого:", result);

// function test() {
//   const numbers = [5, 10, -3];
//
//   for (let i = 0; i <= numbers.length; i++) {
//     // debugger;
//     console.log(numbers[i])
//   }
//
// }
//
// test();

// function handleClick(e) {
//   debugger; // здесь проверяем event и state
//   console.log("Clicked", e.target);
// }

// const prices = {
//   bread: 50,
//   milk: 80,
//   cheese: 200,
//   coffee: 400,
//   tea: 90,
// };
//
// const products = Objects.entries(prices)
//
// const arrayMoreThanHundred = []
//
// products.forEach(([key, value]) => {
//   if(value >= 100) {
//     arrayMoreThanHundred.push(key)
//   }
// })
//
// console.log(arrayMoreThanHundred)

// const prices2 = {
//   bread: 500,
//   milk: 80,
//   cheese: 200,
//   coffee: 400,
//   tea: 90,
// };
//
//
// const products = Objects.entries(prices2)
//
// const arrDiscount = []
//
// const newObj = {}
//
//
//
// products.forEach(([key, value]) => {
//
//   if(value >= 100) {
//     const discount = value * 0.8
//     arrDiscount.push(key, discount)
//
//     newObj[key] = discount
//   }
// })
//
// console.log(newObj)



// const flags2 = {
//   darkMode: false,
//   ads: false,
//   beta: true,
//   coupons: false,
//   chat: true,
// };
//
//
//
// function createEnabledFeatures(array) {
//
//   const arrFlags = Objects.entries(array)
//
//   const arrNames = []
//
//   arrFlags.forEach(([key,value])=>{
//     if(value){
//       arrNames.push(key)
//     }
//   })
//
//   return arrNames
// }
//
// console.log(createEnabledFeatures(flags2))

// 4) Объект → объект (только включённые фичи)
// Дан объект flags2 (ключ — фича, значение — true/false).
// Вернуть новый объект, где остались только пары key: true.
//   Использовать методы объектов + методы массивов.
// */

// const oldObject = {
//   darkMode: true,
//   ads: false,
//   beta: true,
//   coupons: false,
//   chat: true,
// };
//
// const result = {}
//
// for (let property in oldObject) {
//
//   result[property]=oldObject[property]
//
//
//   // if(oldObject[property] === true){
//
//
//   //result[property] = oldObject[property]
//   //  }
// }
//
// console.log(result)

const usersCity = [
  { id: 1, name: "Ann",   city: "Samara" },
  { id: 2, name: "Igor",  city: "Tolyatti" },
  { id: 3, name: "Masha", city: "Samara" },
  { id: 4, name: "Petr",  city: "Kazan" },
  { id: 5, name: "Olya",  city: "Tolyatti" },
];

console.log(usersCity)