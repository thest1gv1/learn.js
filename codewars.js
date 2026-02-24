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

console.log(minMax([1, 2, 3, 4, 5]))


