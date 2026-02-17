//   arr.push(...items) – добавляет элементы в конец,
//   arr.pop() – извлекает элемент из конца,
//   arr.shift() – извлекает элемент из начала,
//   arr.unshift(...items) – добавляет элементы в начало.


// Задача 1: Добавление фруктов
//
// Есть массив:
//
//   let fruits = ["apple", "banana"];
//
//
// Добавь в конец массива "orange" и "pear" за один вызов.
//
//   Добавь в начало массива "mango".
//
//   Выведи итоговый массив.

let fruits = ["apple", "banana"];

fruits.push("orange", "pear")

fruits.unshift("mango")

console.log(fruits)

// Задача 2: Извлечение элементов
//
// Есть массив:
//
//   let numbers = [10, 20, 30, 40, 50];
//
//
// Удали первый элемент и запиши его в переменную first.
//
//   Удали последний элемент и запиши его в переменную last.
//
//   Выведи оставшийся массив и переменные first и last.

let numbers = [10, 20, 30, 40, 50];

const first = numbers.shift()
const last = numbers.pop()

console.log(first)
console.log(last)

console.log(numbers)


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

console.log(queue)


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

console.log(arr)


let arr1 = [1, 2, 3, 4, 5];
// slice – берёт копию части массива
// Не меняет исходный массив.
//   Возвращает новый массив.
const newArr1 = arr1.slice(1, 3)
console.log(newArr1)
// splice – удаляет или вставляет элементы в исходный массив
//
// Меняет сам массив.
newArr1.splice(0, 0, 55, 45)

console.log(newArr1)


// Задача 1 forEach
//
// Есть массив:
//
//   let arr = [1, 2, 3, 4, 5];
//
//
// Выведи в консоль только чётные числа используя forEach.

let arr2 = [1, 2, 3, 4, 5];

arr2.forEach((value, index, array) => {
  if (value % 2 === 0) {
    console.log(value)
  }
})

console.log(arr2)


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

console.log(prices)


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

console.log(words.join(" "))