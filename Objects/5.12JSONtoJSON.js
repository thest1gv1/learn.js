// Задача 1
//
// Преобразуй объект в JSON строку:
//

const user = {name: "Alex", age: 28};

const json = JSON.stringify(user)
// console.log(json)

const parse = JSON.parse(json)

// console.log(parse)


// Задача 3 — Массив и JSON
//
// Есть массив чисел:
//

//
// Задание:
//
//   Преобразуй массив в JSON строку.
//
//   Выведи результат в консоль.
//
//   Попробуй написать код.

const numbers = [10, 20, 30, 40];

const numsJson = JSON.stringify(numbers)

// console.log(numsJson)

// Есть JSON строка:
//

//
// Задание:
//
//   Преобразуй её в массив объектов.
//
//   Выведи name второго пользователя в консоль.

const usersJsonStr = '[{"name":"Tom"},{"name":"Anna"}]';

const usersObj = JSON.parse(usersJsonStr)

// console.log(usersObj[1].name)

// Задача 5 — Объект с вложенным объектом
//
// Есть объект:
//

//
// Задание:
//
//   Преобразуй объект в JSON строку.
//
//   Потом обратно в объект.
//
//   Выведи в консоль name пользователя и city.
const dataObj = {
  user: {name: "Max", age: 35},
  city: "Berlin"
};

const dataJsonStr = JSON.stringify(dataObj)

const dataParse = JSON.parse(dataJsonStr)

// console.log(dataParse.user.name)
// console.log(dataParse.city)


// Задача 6 — Скрываем поля с toJSON()
//
// Есть объект:
//

//
// Задание:
//
//   Добавь метод toJSON() так, чтобы поле password не попадало в JSON.
//
//   Преобразуй объект в JSON строку и выведи её в консоль.

const userObj = {
  name: "Alex",
  age: 28,
  password: "123456",
  toJSON() {
    return {
      name: this.name,
      age: this.age
    }

  }
};

const userObjJson = JSON.stringify(userObj)

// console.log(userObjJson)

// Задача 7 — toJSON() с массивом объектов
//
// Есть массив пользователей:
//

//
// Задание:
//
//   Добавь каждому объекту метод toJSON(), чтобы при сериализации поле password не попадало.
//
//   Преобразуй массив в JSON строку и выведи результат.

const usersArray = [
  {name: "Tom", age: 30, password: "111"},
  {name: "Anna", age: 22, password: "222"},
  {name: "Mike", age: 40, password: "333"}
];


 usersArray.forEach((item) => {
  return item.toJSON = function () {
    return {
      name: this.name,
      age: this.age
    }
  }
})


const usersArrayJson = JSON.stringify(usersArray)

console.log(usersArrayJson)

