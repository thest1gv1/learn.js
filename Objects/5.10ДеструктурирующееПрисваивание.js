// Задача 1 (база)

// Достань значения в переменные a, b, c через деструктуризацию.

const arr = [10, 20, 30];

const [a, b, c] = arr;
//
// console.log(a, b, c)

const colors = ["red", "green", "blue", "yellow"];

const [first, _, third] = colors

// console.log(first, third)


// 🟢 Задача 3 — остаток массива (rest)
//
// Условие:
//
//   const numbers = [1, 2, 3, 4, 5];
//
// Нужно получить:
//
//   first → 1
//
// rest → [2, 3, 4, 5]
//
// 👉 Напиши деструктуризацию и console.log(first, rest)

const numbers = [1, 2, 3, 4, 5];

const [one, ...rest] = numbers
//
// console.log(one, rest)


// 🟢 Задача 4 — значения по умолчанию (уникальные имена)
//
// Условие:
//
//   const singleItem = [1];
//
// Нужно получить:
//
//   firstValue = 1
//
// fallbackValue = 100 (если элемента нет)
//
// 👉 Напиши деструктуризацию и
//
// console.log(firstValue, fallbackValue);


const singleItem = [1];

const [firstValue, fallbackValue = 100] = singleItem

// console.log(firstValue, fallbackValue)


// 🟢 Задача 5 — обмен значений (уникальные имена)
//
// Условие:
//
//   let leftNumber = 5;
//    let rightNumber = 10;
//
// Нужно:
//
//   Поменять значения без временной переменной
//
// Использовать деструктуризацию
//
// 👉 Напиши код и console.log(leftNumber, rightNumber)

let leftNumber = 5;
let rightNumber = 10;

[leftNumber, rightNumber] = [rightNumber, leftNumber]

// console.log(leftNumber, rightNumber)


// 🔵 Задача 7 — переименование свойств (без деструктуризации)
// const profileData = {
//   username: "Alex",
//   years: 25
// };
//
// // Переименовать свойства в userName и userAge
// const userName = profileData.username;
// const userAge = profileData.years;
//
// console.log(userName, userAge); // Alex 25

const profileData = {
  username: "Alex",
  years: 25
};

const {username, years} = profileData

// console.log(username, years)

// 🔵 Задача 8 — значение по умолчанию (без деструктуризации)
//
// const settings = {
//   theme: "dark"
// };
//
// // Нужно получить theme и language, если language нет — использовать "ru"
// const themeOld = settings.theme;
// const languageOld = settings.language !== undefined ? settings.language : "ru";
//
// console.log(themeOld, languageOld); // dark ru


const settings = {
  theme: "dark"
};

const {theme, language = "ru"} = settings

// console.log(theme, language)


const user1 = [{
  name: "Kate",
  age: 28,
  country: "Germany"
}, {
  name: "Alex",
  age: 22,
  country: "Germany"
}

];

function printUser(users) {
  users.forEach(({name, age}) => {
    console.log(name + age)
  })
}

// printUser(user1)


// let user = {name: "John", years: 30};
//
// const {name, years: age, isAdmin = false} = user

// console.log(name); // John
// console.log(age); // 30
// console.log(isAdmin); // false


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


const topSalary = (salaries) => {

  let maxSalary = 0
  let maxName = ""

  for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary
      maxName = name
    }
  }
  return maxName
}

console.log(topSalary(salaries))