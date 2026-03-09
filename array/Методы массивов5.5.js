//   arr.push(...items) – добавляет элементы в конец,
//   arr.pop() – извлекает элемент из конца,
//   arr.shift() – извлекает элемент из начала,
//   arr.unshift(...items) – добавляет элементы в начало.


// Задача 1: Добавление фруктов
// Есть массив:
//   let fruits = ["apple", "banana"];
// Добавь в конец массива "orange" и "pear" за один вызов.
//   Добавь в начало массива "mango".
//   Выведи итоговый массив.

let fruits = ["apple", "banana"];

fruits.push("orange", "pear")

fruits.unshift("mango")


// Задача 2: Извлечение элементов
//
// Есть массив:
//   let numbers = [10, 20, 30, 40, 50];
// Удали первый элемент и запиши его в переменную first.
//
//   Удали последний элемент и запиши его в переменную last.
//
//   Выведи оставшийся массив и переменные first и last.

let numbers = [10, 20, 30, 40, 50];

const first = numbers.shift()
const last = numbers.pop()

// console.log(first)
// console.log(last)
//
// console.log(numbers)


// Задача 3: Перестановка массива
//
// Есть массив:
//
//   let queue = ["Alice", "Bob", "Charlie"];
//
//
// "Daniel" пришёл в конец очереди.
//
// "Zara" пришла в начало очереди.
//
//   Выведи итоговую очередь.

let queue = ["Alice", "Bob", "Charlie"];

queue.push("Daniel")
queue.unshift("Zara")

// console.log(queue)


// Задача 4: Смешанное задание (сложнее)
//
// Есть массив:
//
//   let arr = [1, 2, 3, 4, 5];
//
//
// Сделай так, чтобы:
//
// Удалить первый и последний элемент.
//
//   Добавить в начало числа 0, -1.
//
// Добавить в конец числа 6, 7.
//
// Вывести итоговый массив.

let arr = [1, 2, 3, 4, 5];

arr.shift()
arr.pop()
arr.unshift(0, -1)
arr.push(6, 7)

// console.log(arr)


let arr1 = [1, 2, 3, 4, 5];
// slice – берёт копию части массива
// Не меняет исходный массив.
//   Возвращает новый массив.
const newArr1 = arr1.slice(1, 3)
// console.log(newArr1)

// splice – удаляет или вставляет элементы в исходный массив
//
// Меняет сам массив.

newArr1.splice(0, 0, 55, 45)

// console.log(newArr1)


// Задача 1 forEach
//
// Есть массив:
//
//   let arr = [1, 2, 3, 4, 5];
//
//
// Выведи в консоль только чётные числа используя forEach.

let arr2 = [1, 2, 3, 4, 5];

arr2.forEach((value) => {
  if (value % 2 === 0) {
    // console.log(value)
  }
})

// console.log(arr2)


// Задача 2
//
// Есть массив:
//
//   let prices = [100, 200, 300];
//
//
// Увеличь каждую цену на 10% (измени исходный массив).

let prices = [100, 200, 300, 20];

prices.forEach((value, index, array) => {
  array[index] = (value * 0.1) + value
})

// console.log(prices)


//
// Задача 3 (чуть сложнее)
//
// Есть массив:
//
//   let words = ["js", "html", "css"];
//
//
// С помощью forEach сделай строку:
//
//   "JS HTML CSS"


let words = ["js", "html", "css"];

words.forEach((item, index, array) => {
  array[index] = item.toUpperCase()
})

// console.log(words.join(" "))


const arr3 = [];

for (let i = 1; i <= 11; i++) {
  arr3.push(i)
}

// console.log(arr3)

// Задача 1 — map
//
// Что сделать:
//   Создать новый массив, где каждое число умножено на 2.

const nums = [1, 2, 3, 4, 5, 6]

const newNums = nums.map((n) => n * 2)

// console.log(nums)
// console.log(newNums)

// Задача 2 — filter
//
// Что сделать:
//   Отобрать из массива только чётные числа.

const nums1 = [1, 2, 3, 4, 5, 6]

const filterNums = nums1.filter((n) => n % 2 === 0)

// console.log(nums1)
// console.log(filterNums)

// Задача 3 — find
//
// Что сделать:
//   Найти первое число в массиве, которое больше 10.


const nums2 = [3, 7, 12, 5, 20];

const findNum = nums2.find((n) => n > 10)

// console.log(findNum)


// Задача 4 — map с объектами
//
// Что сделать:
// Получить массив имён пользователей из массива объектов.

const users1 = [
  {name: "Alex", age: 25},
  {name: "Bob", age: 30},
  {name: "Clara", age: 22}
];

const names = users1.map((n) => n.name)

// console.log(names)


// Задача 5 — filter с объектами
//
// Что сделать:
//   Отфильтровать пользователей, возраст которых больше 25 лет.

const users2 = [
  {name: "Alex", age: 25},
  {name: "Bob", age: 30},
  {name: "Clara", age: 22}
];

const filterAge = users2.filter((user) => user.age > 25)

// 🟢 Задача 6 — проверка условий (some / every)
//
// Есть массив пользователей:
//
//
//
// Вопросы:
//
//   Есть ли хотя бы один пользователь младше 18? → должно быть true или false
//
// Все ли пользователи старше 20? → true или false
//
// ❗ Используй методы массивов, без циклов for.

const users3 = [
  {name: "Alex", age: 17},
  {name: "Bob", age: 25},
  {name: "Clara", age: 30}
];

const UsersSome = users3.some((user) => user.age < 18)

// console.log(UsersSome)

const UsersEvery = users3.every((user) => user.age > 20)

// console.log(UsersEvery)


// 🟢 Задача 7 — знакомство с reduce
//
// Условие:
//   Есть массив чисел.
//   Нужно получить одно число — сумму всех элементов.
//
const nums4 = [5, 10, 15];

const sumNums = nums4.reduce((acc, currentValue) => acc + currentValue, 0)

// console.log(sumNums)


// 🟢 Задача 8 — reduce + объекты
//
// Условие:
//   Есть массив пользователей.
//   Нужно получить объект вида:
//
// { Alex: 25, Bob: 30 }
//
// Исходные данные:
//
const users5 = [
  {name: "Alex", age: 25},
  {name: "Bob", age: 30}
];

const objUsers5 = users5.reduce((acc, user) => {
  acc[user.name] = user.age

  return acc
}, {})

// console.log(objUsers5)


// 🟢 Задача A — reduce (разогрев)
//
// Условие:
//   Есть массив чисел.
//   Нужно получить объект, где:
//
// ключ — число
//
// значение — сколько раз оно встречается

const nums5 = [1, 2, 2, 3, 3, 3, 3, 3];

const countNums5 = nums5.reduce((acc, currentValue) => {

    if (acc[currentValue]) {
      acc[currentValue] += 1
    } else {
      acc[currentValue] = 1
    }
    return acc
  }, {})

// console.log(countNums5)


// 🧩 Задача: Найти имена подходящих пользователей
//
// Есть массив пользователей:

;
// Нужно получить массив имён, которые:
//
// старше 18
//
// активны (isActive === true)


const users6 = [
  {name: "Alex", age: 17, isActive: true},
  {name: "Bob", age: 25, isActive: false},
  {name: "Clara", age: 30, isActive: true},
  {name: "Dan", age: 16, isActive: true}
]

const adultActiveUsers = users6
  .filter((user) => user.age > 18 && user.isActive === true)
  .map((user) => user.name)

// console.log(adultActiveUsers)


//Убрать дубликаты

const arr11 = [1, 122, 122, 4, 5, 155, 155, 7, 8, 9];


function removeDuplicates(arr) {

  return arr.filter((n, index) => {
    if (index === arr.indexOf(n)) {
      return n
    } else {
      return null
    }
  })
}

console.log(removeDuplicates(arr11))


function removeDuplicatesFor(arr) {

  const result = []

  for (let i = 0; i < arr.length; i++) {
    let x = arr[i]
    let unique = true

    for (let j = 0; j < result.length; j++) {
      if (x === result[j]) {
        unique = false
        break
      }
    }

    if (unique) {
      result.push(x)
    }
  }

  return result

}

console.log(removeDuplicatesFor(arr11))


