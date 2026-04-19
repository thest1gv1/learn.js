"use strict";

const user = {name: "Alice"};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name')

delete user.name;


// Задача 2: сделать свойство read-only
//
// Исходник:

const obj = {a: 10};

Object.defineProperty(obj, 'a', {
  writable: false
})

// console.log(obj)

//
// 🧩 Задача 3: скрытое свойство (enumerable)
//
// Дан объект:
//
//   const obj = {};
//
// 👉 Требуется:
//
//   Добавить свойство secret со значением 123
// Сделать так, чтобы:
//
// к нему можно было обратиться напрямую:
//
//   obj.secret // должно работать
//
// оно не отображалось в:
//
//   Object.keys(obj)


const obj1 = {}


Object.defineProperty(obj1, "secret", {
  value: 123,
  writable: true,
})

const descriptor1 = Object.getOwnPropertyDescriptor(obj1, 'secret')

// console.log(descriptor1)
//
// console.log(obj1.secret = 999)
//
// console.log(Object.keys(obj1))
// console.log(JSON.stringify(obj1))


// 🧩 Задача 4 (база на понимание enumerable)
//
// Дан объект:
//
//   const obj = {};
//
// Сделай так, чтобы:
//
// свойство a = 10 существовало
// obj.a возвращало 10
// но Object.keys(obj) возвращал []


const obj2 = {}

Object.defineProperty(obj2, 'a', {
  value: 10,
  enumerable: false,
  writable

})

console.log(obj2.a)
console.log(Object.keys(obj2))



// 🚀 Следующая задача (уже собеседовательная ловушка)
// const obj = {}
//
// Object.defineProperty(obj, "a", {
//   value: 1
// })
//
// Object.defineProperty(obj, "a", {
//   value: 2
// })
//
// console.log(obj.a)
// ❓ Вопрос:
//
//   Что выведется и почему?
//
//   (здесь проверяется понимание configurable и поведения defineProperty)

//мой ответ: я предполагаю ответ будет 1 тк при первом defineProperty все флаги будут false и дальнейше переопределение не получится на 2




// 🚀 Следующая задача (уровень: tricky)
// const obj = {}
//
// Object.defineProperty(obj, "a", {
//   value: 1,
//   writable: false
// })
//
// Object.defineProperty(obj, "a", {
//   writable: true
// })
//
// console.log(obj.a)
// ❓ Вопрос:
//
//   Что будет:
//
//   1?
//     2?
//       ошибка?
//
//         и почему именно так?