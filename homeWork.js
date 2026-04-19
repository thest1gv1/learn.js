// //из O(n^2) в O(n)
//
//
// const arr = [1, 2, 3, 2];
//
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       console.log("Duplicate found:", arr[i]);
//     }
//   }
// }
//
//
// const arr1 = [1, 2, 3, 2];
// const set = new Set();
//
// for (let i = 0; i < arr1.length; i++) {
//   if (set.has(arr1[i])) {
//     console.log("Duplicate found:", arr1[i]);
//   } else {
//     set.add(arr1[i]);
//   }
// }
//
//
//
//
//
// function test(n) {
//   if (n === 0) return;
//   console.log(n);
//   test(n - 1);
//   console.log(n * 2);
// }
//
// test(2);


// Реализуйте функцию getNumbersByParity, которая принимает массив чисел в качестве первого аргумента и строку "even" или "odd" в качестве второго. Функция должна вернуть новый массив, состоящий из четных чисел, если вторым аргументом было передано "even" и нечетных, если было передано "odd". Оба аргумента функции обязательны. Первый обязательно будет массивом, а второй - строкой "even"/"odd".
//   const getNumbersByParity = (data, parity) => {
//   // your code
// };
//
// const data = [1, 2, 3, 4, 5, 6];
//
// console.log(getNumbersByParity(data, 'even')); // [2, 4, 6];
// console.log(getNumbersByParity(data, 'odd')); // [1, 3, 5];`

const data = [1, 2, 3, 4, 5, 6];

const getNumbersByParity = (data, parity) => {
  return data.filter((item) => parity === 'even' ? item % 2 === 0 : item % 2 !== 0)
};

console.log(getNumbersByParity(data, 'even'))
console.log(getNumbersByParity(data, 'odd'))


// Реализуйте функцию hasArrays, которая принимает массив данных разных типов и возвращает true, если этот массив содержит массив внутри себя. Если нет, функция должна вернуть false.
//
//   const data1 = [false, true, [1, 2], {}, [], 1, e, NaN];
// console.log(hasArrays(data1)); // true
// const data2 = [];
// console.log(hasArrays(data2)); // false

const data1 = [false, true, [1, 2], {}, [], 1, 'e', NaN];
const data2 = [];

const hasArrays = (data) => {
  return data.some((value) => Array.isArray(value))
}


console.log(hasArrays(data1))
console.log(hasArrays(data2))


// moveToStart
// Реализуйте функцию moveToStart, которая принимает массив и число п. Функция должна переставить n элементов массива из конца в начало. Если второй аргумент больше или равен длине массива, то должен быть возвращен новый массив, порядок элементов которого совпадает с изначальным. Функция должна возвращать новый массив, а не мутировать старый.
//
// console.log(moveToStart([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 2]
// console.log(moveToStart([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 2]
// console.log(moveToStart([1, 2, 3, 4, 5], 10)); // [1, 2, 3, 4, 5]

const moveToStart = (arr, n) => {
  if (n >= arr.length) {
    return arr.slice()
  }
  const last = arr.slice(-n)
  const others = arr.slice(0, arr.length - n)

  return [...last, ...others]

}

console.log(moveToStart([1, 2, 3, 4, 5], 2))


// getStringCount
// Реализуйте (с использованием рекурсии) функцию getStringCount, которая должна принимать массив или объект и считать количество строк в массиве / значениях объекта с учетом вложенности. P.S. Для корректного прохождения проверку на рекурсию - вы должны вызывать именно функцию getStringCount
//
// getStringCount({
//   first: '1',
//   second: { prop: '2' },
//   third: false,
//   fourth: ['anytime', 2, 3, 4 ],
//   fifth: null,
// }); // 3
//
// getStringCount(['1', '2', ['3']]) // 3


const getStringCount = (data) => {

  if (typeof data === "string") {
    return 1
  }

  if (typeof data === 'object' && data !== null) {

    const elements = Array.isArray(data) ? data : Object.values(data)

    return elements.reduce((sum, item) => {
      return sum + getStringCount(item)
    }, 0)

  }

  return 0
}

console.log(getStringCount({
  first: '1',
  second: {prop: '2'},
  third: false,
  fourth: ['anytime', 2, 3, 4, 'anytime'],
  fifth: null,
})) // 3)

console.log(getStringCount(['1', '2', ['3']]))// 3)


//
// Реализуйте функцию, которая вычисляет разницу между двумя списками. Функция должна \
// удалять все вхождения элементов из первого списка ( a), которые присутствуют во втором списке
// ( b). Порядок элементов в первом списке должен сохраняться в результате.
//
//   Примеры
// Если a = [1, 2]и b = [1], то результат должен быть [2].
//
//   Если a = [1, 2, 2, 2, 3]и b = [2], то результат должен быть [1, 3].


const arrayDiff = (a, b) => {


  return a.filter((item) => !b.includes(item))
}
console.log('Задача')
console.log(arrayDiff([], [1, 2]))


// Панграмма — это предложение, содержащее каждую букву
// алфавита хотя бы один раз. Например, предложение «Быстрая коричневая лиса перепрыгивает через ленивую собаку» — это панграмма, потому что в нём хотя бы один раз используется буква AZ (регистр не имеет значения).
//
// Дана строка. Определите, является ли она панграммой.
// Верните True, если является панграммой, False, если нет. Цифры и знаки препинания игнорируются.

function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (const alphabetElement of alphabet) {
    console.log(alphabetElement)
  }

}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
// console.log(isPangram('This is not a pangram.'))


