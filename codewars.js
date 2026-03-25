// const rawArr = [];
//
// for (let i = 1; i <= 1000; i++) {
//   rawArr.push(i);
// }
//
// for (let j = 0; j < rawArr.length; j++) {
//   if (rawArr[j] > 500) { // arr[100] > 5000 (true == 5512)
//     rawArr.splice(j);
//   }
// }


// убрать с массива элементы которые больше 5000
// arr, j
// const arr = rawArr.sort(() => Math.random() - 0.5); // [1,...] [6272,...]


//
// j, 5000, 10000, 1, 0
// [..., 5512,1,....] // - j 100


// console.log(rawArr)

// Задача: сложить два числа и вернуть результат в бинарном (двоичном) виде

function addBinary(a, b) {
  let result = a + b
  return result.toString(2)
}


// console.log(addBinary(51, 12))

// Задача: удалить все пробелы из строки

function noSpace(x) {
  return x.replaceAll(' ', '')
}

// console.log(noSpace('asdasd asdasdas asdasdasd asdasdasd'))

// Задача: найти длину самого короткого слова в строке

function findShort(s) {
  let arr = s.split(' ')

  return arr.reduce((acc, currentValue) => {
    if (currentValue.length < acc) {
      return currentValue.length
    } else {
      return acc
    }
  }, arr[0].length)
}

// console.log(findShort('bitcoin take over ht world maybe who knows perhaps'))

// Задача: проверить, хватит ли топлива, чтобы доехать до заправки
// distanceToPump — расстояние до заправки
// mpg — миль на галлон
// fuelLeft — сколько топлива осталось

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const res = mpg * fuelLeft

  return (distanceToPump <= res)

};

// console.log(zeroFuel(100, 50, 2))

// Задача: посчитать количество положительных чисел
// и сумму отрицательных чисел в массиве

function countPositivesSumNegatives(input) {

  if (!input || input.length === 0) return []

  let countPositives = 0
  let sumNegatives = 0


  input.forEach((item) => {
    if (item < 0) sumNegatives += item
    else if (item > 0) countPositives++
  })
  return [countPositives, sumNegatives]
}


// console.log(countPositivesSumNegatives([]))

// Задача: привести все элементы массива к числам
// и вернуть их сумму

function sumMix(x) {

  let nums = x.map(Number)
  return nums.reduce((sum, num) => sum + num, 0)

}

// console.log(sumMix([5, 5, '5', '5']))


// Задача: посчитать количество положительных чисел в массиве

function countPosit(x) {
  return x.reduce((count, num) => num > 0 ? count + 1 : count, 0)
}

// console.log(countPosit([1, 2, 3, 0, -1, 1]))


// Задача: найти первое число в массиве, которое больше 10

function findNum10(x) {
  return x.find((num) => num > 10)
}

// console.log(findNum10([3, 7, 10, 15, 20]))


// Для заданного набора чисел верните аддитивно противоположные значения
// для каждого из них. Все положительные числа станут отрицательными, а отрицательные — положительными.

function invert(array) {
  return array.map((num) => {
    if (!array) {
      return []
    } else {
      return num * -1
    }
  })
}

// console.log(invert([1, -2, 3, 4, 5]))

// Вам даны два внутренних угла (в градусах) треугольника.
//
//   Напишите функцию, которая будет возвращать третий угол.
//
//   Примечание: будут проверяться только положительные целые числа.

function otherAngle(a, b) {
  return 180 - (a + b);
}

// console.log(otherAngle(30, 60))


// Задача
// Напишите функцию, которая возвращает как минимальное, так и максимальное число из данного списка / массива.

function minMax(arr) {

  const min = arr.reduce((min, current) => {
    return Math.min(min, current)
  }, Infinity)

  const max = Math.max(...arr)

  return [min, max];
}

// console.log(minMax([1, 2, 3, 4, 5]))


function createHelloWorld() {

  return function (...arg) {

    return 'hello World'


  }


}

const f = createHelloWorld();

// console.log(f('das'))


// Сумма с помощью замыканий
// важность: 4
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
//
//   Да, именно таким образом, используя двойные круглые скобки (не опечатка).
//
// Например:
//
//   sum(1)(2) = 3
// sum(5)(-1) = 4


const sum = (a) => {

  return function (b) {
    return a + b
  }
}

// console.log(sum(6)(2))


// Сортировать по полю
// важность: 5
// У нас есть массив объектов, который нужно отсортировать:
//
//   let users = [
//     { name: "Иван", age: 20, surname: "Иванов" },
//     { name: "Пётр", age: 18, surname: "Петров" },
//     { name: "Анна", age: 19, surname: "Каренина" }
//   ];
// Обычный способ был бы таким:
//
// // по имени (Анна, Иван, Пётр)
//   users.sort((a, b) => a.name > b.name ? 1 : -1);
//
// // по возрасту (Пётр, Анна, Иван)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, например вот таким?
//
//   users.sort(byField('name'));
// users.sort(byField('age'));
// То есть чтобы вместо функции мы просто писали byField(fieldName).
//
//   Напишите функцию byField, которая может быть использована для этого.

let userss = [
  {name: "Аван", age: 20, surname: "Иванов"},
  {name: "Вётр", age: 18, surname: "Петров"},
  {name: "Бнна", age: 19, surname: "Каренина"}
];


const byField = (field) => {
  return (a, b) => a[field] > b[field] ? 1 : -1
}

// console.log(userss.sort(byField('age')))


// Армия функций
// важность: 5
// Следующий код создаёт массив из стрелков (shooters).
//
//   Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i
    let shooter = function () { // функция shooter
      // console.log( j  ); // должна выводить порядковый номер

    };
    shooters.push(shooter); // и добавлять стрелка в массив
    i++;

  }

  // ...а в конце вернуть массив из всех стрелков
  return shooters;
}

let army = makeArmy();

// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
army[0](); // 10 от стрелка с порядковым номером 0
army[1](); // 10 от стрелка с порядковым номером 1
army[2](); // 10 ...и т.д.


function makeCounter() {
  let count = 0;

  function counter() {
    return count++
  }

  counter.set = function (value) {
    count = value
  }

  counter.decrease = function () {
    return count--
  }

  return counter

}


let count = makeCounter();

count.set(10)
console.log(count()); // 0
console.log(count()); // 0
console.log(count()); // 0
count.decrease()
console.log(count()); // 0
console.log(count()); // 0

//

//
// console.log(counter()); // 10
//
// counter.decrease(); // уменьшить значение счётчика на 1
//
// console.log(counter()); // 10 (вместо 11)