let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const sumSalaries = (obj) => {
  let sum = 0;

  for (const arrElement of Object.values(obj)) {
    sum += arrElement;
  }
  return sum;
};

console.log(sumSalaries(salaries)); // 650

let user = {
  name: "John",
  age: 30,
};
const count = (obj) => {
  return Object.values(obj).length;
};

// console.log(count(user)); // 2

// 1. Увеличить все значения на 10
// let salaries = {
//   John: 1000,
//   Ann: 1600,
//   Pete: 1300
// };
//
// Задание: создать новый объект, где каждая зарплата увеличена на 10%.

let salaries1 = {
  John: 1000,
  Ann: 2000,
  Pete: 1300,
};

const IncreaseTheValues = (obj) => {
  const objToArr = Object.entries(obj);

  return Object.fromEntries(
    objToArr.map(([key, value]) => [key, Math.round(value * 1.1)]),
  );
};

// console.log(IncreaseTheValues(salaries1))

// 2. Оставить только дорогие товары
let products = {
  phone: 500,
  laptop: 1500,
  mouse: 40,
  keyboard: 80,
};
//
// Задание: получить объект только с товарами дороже 100.

const onlyExpensiveProducts = (obj) => {
  const objToArr = Object.entries(obj);

  return Object.fromEntries(objToArr.filter(([key, value]) => value > 100));
};

// console.log(onlyExpensiveProducts(products))

// 3. Преобразовать значения в строки

let temperatures = {
  morning: 15,
  day: 22,
  evening: 18,
};

const toStr = (item) => {
  return Object.fromEntries(
    Object.entries(item).map(([key, value]) => {
      return [key, value.toString() + "°C"];
    }),
  );
};

// console.log(toStr(temperatures))

// Поменять ключи и значения местами
let roles = {
  admin: "Alice",
  user: "Bob",
  guest: "Charlie",
};

const reverseKey = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map((value) => [value[1], value[0]]),
  );
};

// console.log(reverseKey(roles))

// Оставить только ключи, начинающиеся с a
// let words = {
//   apple: 5,
//   banana: 3,
//   avocado: 2,
//   orange: 4
// };
//
// const keyA = (obj) => {
//
//   return Object.fromEntries(
//     Object.entries(obj).filter(([key, value]) => key.startsWith('a'))
//   )
// }
//
// console.log(keyA(words))

const arr = ["Конфеты и фрукты", "Письмо", "Пицца и роллы", "Песня"];

const randomIndex = Math.floor(Math.random() * arr.length);

const randomItem = arr[randomIndex];

console.log("Ответ: " + randomItem);
