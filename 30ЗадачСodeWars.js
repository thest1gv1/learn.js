// Задача 1: Валидация IPv4-адреса (6 kyu)
// Определить корректные IPv4-адреса в десятичном формате.
// Адрес корректен, если состоит из 4 октетов со значениями от 0 до 255.
//
// isValidIP('1.2.3.4')         → true
// isValidIP('123.045.067.089') → false
// isValidIP('123.456.78.90')   → false
// isValidIP('12.34.56.-7')     → false

function isValidIP(str) {
  const partsIp = str.split('.');
  if (partsIp.length !== 4) return false;
  return partsIp.every((item) => {
    return item === String(Number(item)) && Number(item) >= 0 && Number(item) <= 255
  })
}

isValidIP('1.2.3.4')         // true
isValidIP('123.045.067.089') // false
isValidIP('123.456.78.90')   // false
isValidIP('12.34.56.-7')     // false


// Задача 2: Encode / Decode гласных (6 kyu)
// encode(): заменяет строчные гласные цифрами — a->1, e->2, i->3, o->4, u->5
// decode(): обратная операция
//
// encode('hello')    → 'h2ll4'
// decode('h3 th2r2') → 'hi there'

function encode(string) {
  const replacements = {a: '1', e: '2', i: '3', o: '4', u: '5'}
  return Object.keys(replacements).reduce((acc, key) => {
    return acc.replaceAll(key, replacements[key])
  }, string)
}

function decode(string) {
  const replacements = {a: '1', e: '2', i: '3', o: '4', u: '5'}
  return Object.keys(replacements).reduce((acc, key) => {
    return acc.replaceAll(replacements[key], key)
  }, string)
}

encode('hello')    // 'h2ll4'
encode('aeiou')    // '12345'
decode('h2ll4')    // 'hello'
decode('h3 th2r2') // 'hi there'


// Задача 3: Сортировка нечётных (6 kyu)
// Отсортировать нечётные числа по возрастанию, оставив чётные на своих местах.
//
// sortArray([7, 1])                           → [1, 7]
// sortArray([5, 8, 6, 3, 4])                 → [3, 8, 6, 5, 4]
// sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])  → [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  const oddSorted = array.filter((item) => item % 2 !== 0).sort((a, b) => a - b)
  let i = 0
  return array.map((item) => item % 2 !== 0 ? oddSorted[i++] : item)
}

sortArray([7, 1])
sortArray([5, 8, 6, 3, 4])
sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])


// Задача 4: Сумма вложенных массивов (6 kyu)
// Посчитать сумму всех чисел в массиве, включая вложенные массивы любой глубины.
//
// deepSum([1, 2, 3])              → 6
// deepSum([1, [2, 3], 4])         → 10
// deepSum([1, [2, [3, [4]]]])     → 10
// deepSum([[1, 2], [3, [4, 5]]]) → 15
// deepSum([])                     → 0

function deepSum(arr) {
  return arr.reduce((acc, item) => {
    return acc + (Array.isArray(item) ? deepSum(item) : item)
  }, 0)
}

deepSum([1, 2, 3])
deepSum([1, [2, 3], 4])
deepSum([1, [2, [3, [4]]]])
deepSum([[1, 2], [3, [4, 5]]])
deepSum([])


// Задача 5: Палиндром (6 kyu)
// Вернуть true если строка — палиндром. Игнорировать регистр, пробелы и знаки препинания.
//
// isPalindrome('racecar')                     → true
// isPalindrome('hello')                       → false
// isPalindrome('A man a plan a canal Panama') → true
// isPalindrome('Was it a car or a cat I saw') → true
// isPalindrome('')                            → true

function isPalindrome(str) {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  const reversed = normalized.split('').reverse().join('')
  return normalized === reversed
}

isPalindrome('racecar')
isPalindrome('hello')
isPalindrome('A man a plan a canal Panama')
isPalindrome('Was it a car or a cat I saw')
isPalindrome('')


// Задача 6: FizzBuzz (6 kyu)
// Вернуть массив от 1 до n, где кратные 3 → 'Fizz', кратные 5 → 'Buzz',
// кратные 3 и 5 → 'FizzBuzz', остальные — числа.
//
// fizzBuzz(5)  → [1, 2, 'Fizz', 4, 'Buzz']
// fizzBuzz(15) → [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']

function fizzBuzz(n) {
  const arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  return arr.map((item) => {
    return item % 3 === 0 && item % 5 === 0 ? 'FizzBuzz'
      : item % 3 === 0 ? 'Fizz'
        : item % 5 === 0 ? 'Buzz'
          : item
  })
}

fizzBuzz(5)
fizzBuzz(15)
fizzBuzz(1)


// Задача 7: Каррирование сложения (5 kyu)
// Создать функцию add(), которая при последовательных вызовах суммирует все переданные числа.
// Результат должен работать как число (сравниваться, складываться с числами).
//
// add(1)(2)          == 3
// add(1)(2)(3)       == 6
// add(1)(2)(3)(4)    == 10
// add(1)             == 1
//
// var addTwo = add(2)
// addTwo             == 2
// addTwo + 5         == 7
// addTwo(3)          == 5
// addTwo(3)(5)       == 10

function add(n) {
  let sum = n

  function inner(m) {
    return add(n + m)
  }

  inner.valueOf = function () {
    return sum
  }
  return inner
}

// console.log(add(1)(2)(3) == 6)
// console.log(add(1)(2)(3)(4) == 10)
// console.log(add(1)(2)(3)(4)(5) == 15)
// console.log(add(1) == 1)
//
// var addTwo = add(2)
// console.log(addTwo == 2)
// console.log(addTwo(3) == 5)
// console.log(addTwo(3)(5) == 10)

// Задача 8: Валидация PIN-кода (6 kyu)
// PIN-код корректен если содержит ровно 4 или 6 цифр (только цифры).
//
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
  return pin.split('').every(c => c >= '0' && c <= '9') && (pin.length === 4 || pin.length === 6)
}

// console.log(validatePIN("1234"))
// console.log(validatePIN("12345"))
// console.log(validatePIN("123456"))
// console.log(validatePIN("1234566"))
// console.log(validatePIN("a234"))


// Задача 9: Число-выброс (6 kyu)
// Массив содержит только чётные или только нечётные числа, кроме одного. Найти его.
//
// [2, 4, 0, 100, 4, 11, 2602, 36] --> 11
// [160, 3, 1719, 19, 11, 13, -21] --> 160


function findOutlier(integers) {

  const odd = integers.filter(n => n % 2 !== 0)
  const even = integers.filter(n => n % 2 === 0)

  return odd.length === 1
    ? odd[0]
    : even[0]
}


// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))


// Задача 10: Фильтр строк (8 kyu)
// Из массива чисел и строк вернуть только числа.
//
// [1, 2, 'a', 'b']          --> [1, 2]
// [1, 'a', 'b', 0, 15]      --> [1, 0, 15]


function filter_list(l) {
  return l.filter(item => typeof item === 'number')
}

// console.log(filter_list([1, 2, 'a', 'b']))
// console.log(filter_list([1, 'a', 'b', 0, 15]))
// console.log(filter_list([1, 2, 'aasf', '1', '123', 123]))


// Задача 11: Мультипликативная постоянная (6 kyu)
// Сколько раз нужно перемножить цифры числа, чтобы получить однозначное число.
//
// 39  --> 3 (3*9=27, 2*7=14, 1*4=4)
// 999 --> 4 (9*9*9=729, 7*2*9=126, 1*2*6=12, 1*2=2)
// 4   --> 0

function persistence(num) {

  let count = 0

  while (num > 9) {
    num = num
      .toString()
      .split('')
      .reduce((acc, currentValue) =>
          acc * Number(currentValue)
        , 1)
    count++
  }
  return count
}

// console.log(persistence(999))


// Задача 12: Подсчёт символов (6 kyu)
// Принимает строку, возвращает объект где ключ — символ, значение — сколько раз он встречается.
//
// charCount('hello')      → { h: 1, e: 1, l: 2, o: 1 }
// charCount('aabbc')      → { a: 2, b: 2, c: 1 }
// charCount('')            → {}

function charCount(str) {
  return str.split('').reduce((acc, item) => {
    if (acc[item]) {
      acc[item] = acc[item] + 1
    } else {
      acc[item] = 1
    }

    return acc
  }, {})
}

// console.log(charCount('hello'))   // { h: 1, e: 1, l: 2, o: 1 }
// console.log(charCount('aabbc'))   // { a: 2, b: 2, c: 1 }
// console.log(charCount(''))        // {}


// Задача 13: Flatten (5 kyu)
// Превратить вложенный массив любой глубины в плоский массив.
// Нельзя использовать Array.flat() — только reduce и рекурсия.
//
// flatten([1, 2, 3])                    → [1, 2, 3]
// flatten([1, [2, 3], 4])               → [1, 2, 3, 4]
// flatten([1, [2, [3, [4, [5]]]]])      → [1, 2, 3, 4, 5]
// flatten([[1, 2], [3, [4, 5]]])        → [1, 2, 3, 4, 5]

function flatten(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return [...acc, ...flatten(item)]
    } else {
      return [...acc, item]
    }
  }, [])
}

// console.log(flatten([1, 2, 3]))                 // [1, 2, 3]
// console.log(flatten([1, [2, 3], 4]))            // [1, 2, 3, 4]
// console.log(flatten([1, [2, [3, [4, [5]]]]]))   // [1, 2, 3, 4, 5]
// console.log(flatten([[1, 2], [3, [4, 5]]]))     // [1, 2, 3, 4, 5]


// Задача 14: Найти уникальное число (6 kyu)
// В массиве все числа одинаковы, кроме одного. Найти его.
//
// findUniq([1, 1, 1, 2, 1, 1])   → 2
// findUniq([0, 0, 0.55, 0, 0])   → 0.55


function findUniq(arr) {
  const countArr = arr.reduce((acc, item) => {
    acc[item] ? acc[item] = acc[item] + 1 : acc[item] = 1
    return acc
  }, {})

  return +Object.keys(countArr)
    .find((item) => countArr[item] === 1)
}

// console.log(findUniq([1, 1, 1, 2, 1, 1]))
// console.log(findUniq([0, 0, 0.55, 0, 0]))


// Задача 15: Квадрат цифр (6 kyu)
// Возвести каждую цифру числа в квадрат и объединить результаты в одно число.
//
// squareDigits(9119) → 811181  (9²=81, 1²=1, 1²=1, 9²=81)
// squareDigits(765)  → 493625  (7²=49, 6²=36, 5²=25)


function squareDigits(num) {
  return Number(num.toString()
    .split('')
    .map(n => n * n)
    .join(''))
}

// console.log(squareDigits(3212))


// Задача 16: Произведение массива (8 kyu)
// Перемножить все числа в массиве.
//
// grow([1, 2, 3, 4])         → 24
// grow([4, 1, 1, 1, 4])      → 16
// grow([2, 2, 2, 2, 2, 2])   → 64

function grow(x) {

  return x.reduce((acc, item) => acc * item, 1)
}

// console.log(grow([1, 2, 3, 4]))
// console.log(grow([4, 1, 1, 1, 4]))
// console.log(grow([2, 2, 2, 2, 2, 2]))


// Задача 17: Подсчёт дубликатов (6 kyu)
// Вернуть количество символов, которые встречаются в строке более одного раза (без учёта регистра).
//
// duplicateCount("")        → 0
// duplicateCount("abcde")   → 0
// duplicateCount("aabbcde") → 2
// duplicateCount("aabBcde") → 2

function duplicateCount(text) {


  const duplText = text.toLowerCase().split('').reduce((acc, item) => {
    acc[item] ? acc[item] = acc[item] + 1 : acc[item] = 1
    return acc
  }, {})

  return Object.values(duplText).filter(x => x > 1).length
}

// console.log(duplicateCount(""))
// console.log(duplicateCount("abcde"))
// console.log(duplicateCount("aabbcde"))
// console.log(duplicateCount("aabBcde"))


// Задача 18: Найти нечётный (6 kyu)
// В массиве одно число встречается нечётное количество раз. Найти его.
//
// findOdd([7])                                          → 7
// findOdd([0])                                          → 0
// findOdd([1, 1, 2])                                    → 2
// findOdd([0, 1, 0, 1, 0])                              → 0
// findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])    → 3

function findOdd(a) {

  const countA = a.reduce((acc, item) => {
    acc[item] ? acc[item] = acc[item] + 1 : acc[item] = 1
    return acc
  }, {})

  return +Object.keys(countA).filter(a => countA[a] % 2 !== 0)

}

// console.log(findOdd([7]))
// console.log(findOdd([0]))
// console.log(findOdd([1, 1, 2]))
// console.log(findOdd([0, 1, 0, 1, 0]))
// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))


// Задача 19: Самое длинное слово (6 kyu)
// Найти длину самого длинного слова в строке.
//
// longestWord('The quick brown fox') → 5
// longestWord('May the force be with you') → 5
// longestWord('Google') → 6

function longestWord(str) {
  return Math.max(...str.split(' ').map(w => w.length))
}

// console.log(longestWord('The quick brown fox'))
// console.log(longestWord('May the force be with you'))
// console.log(longestWord('Google'))


// Задача 20: Убрать дубли подряд (6 kyu)
// Вернуть массив, где удалены одинаковые элементы, идущие подряд.
// Строку тоже принимает — разбить на символы.
//
// uniqueInOrder([1,1,2,3,3,3,4,4]) → [1,2,3,4]
// uniqueInOrder('AAAABBBCCDAABBB') → ['A','B','C','D','A','B']
// uniqueInOrder([1,1,1,1])         → [1]
// uniqueInOrder([])                → []

function uniqueInOrder(iterable) {
  const arr = [...iterable]

  return arr.reduce((acc, item) => {
    if (acc[acc.length - 1] !== item) acc.push(item)
    return acc
  }, [])
}

// console.log(uniqueInOrder([1, 1, 2, 3, 3, 3, 4, 4]))  // [1,2,3,4]
// console.log(uniqueInOrder('AAAABBBCCDAABBB'))   // ['A','B','C','D','A','B']
// console.log(uniqueInOrder([]))                  // []


// Задача 21: Нули в конец (5 kyu)
// Переместить все нули в конец массива, сохранив порядок остальных элементов.
//
// moveZeros([1, 0, 1, 2, 0, 1, 3]) → [1, 1, 2, 1, 3, 0, 0]
// moveZeros([0, 0, 1])             → [1, 0, 0]
// moveZeros([0, 0])                → [0, 0]
// moveZeros([1, 2, 3])             → [1, 2, 3]

function moveZeros(arr) {
  return [...arr.filter(n => n !== 0),
    ...arr.filter(n => n === 0)]
}

// console.log(moveZeros([1, 0, 1, 2, 0, 1, 3]))  // [1, 1, 2, 1, 3, 0, 0]
// console.log(moveZeros([0, 0, 1]))               // [1, 0, 0]
// console.log(moveZeros([0, 0]))                  // [0, 0]
// console.log(moveZeros([1, 2, 3]))               // [1, 2, 3]


// Задача 22: Разница массивов (6 kyu)
// Удалить из первого массива все элементы, которые есть во втором.
// Дубли тоже удалить.
//
// arrayDiff([1,2,3], [1,2])    → [3]
// arrayDiff([1,2,2,2,3], [2])  → [1,3]
// arrayDiff([1,2,3], [])       → [1,2,3]
// arrayDiff([], [1,2,3])       → []

function arrayDiff(a, b) {
  // твоё решение
}

// console.log(arrayDiff([1,2,3], [1,2]))    // [3]
// console.log(arrayDiff([1,2,2,2,3], [2]))  // [1,3]
// console.log(arrayDiff([1,2,3], []))       // [1,2,3]
// console.log(arrayDiff([], [1,2,3]))       // []


// Задача 23: Накопительная сумма (6 kyu)
// Вернуть новый массив где каждый элемент — сумма всех предыдущих включая текущий.
//
// runningSum([1,2,3,4])   → [1,3,6,10]
// runningSum([1,1,1,1,1]) → [1,2,3,4,5]
// runningSum([3,1,2,10])  → [3,4,6,16]

function runningSum(arr) {
  return arr.reduce((acc, item) => {
    const last = acc[acc.length - 1] ?? 0

    acc.push(last + item)

    return acc
  }, [])
}

// console.log(runningSum([1, 2, 3, 4]))    // [1,3,6,10]
// console.log(runningSum([1, 1, 1, 1, 1])) // [1,2,3,4,5]
// console.log(runningSum([3, 1, 2, 10]))  // [3,4,6,16]


// Задача 24: Разворот числа (6 kyu)
// Вернуть число, развёрнутое задом наперёд. Знак минуса сохранить.
//
// reverseNumber(123)   → 321
// reverseNumber(-456)  → -654
// reverseNumber(100)   → 1
// reverseNumber(0)     → 0

function reverseNumber(n) {
  const sign = n < 0 ? -1 : 1
  const reversed = Math.abs(n).toString().split('').reverse().join('')
  return sign * Number(reversed)
}

// console.log(reverseNumber(123))   // 321
// console.log(reverseNumber(-456))  // -654
// console.log(reverseNumber(100))   // 1


// Задача 25: Среднее значение массива (8 kyu)
// Вернуть среднее арифметическое элементов массива. Если массив пустой — вернуть 0.
//
// average([1, 2, 3, 4, 5]) → 3
// average([1, 1, 1])        → 1
// average([])               → 0

function average(arr) {
  if (arr.length === 0) return 0
  return arr.reduce((acc, n) => acc + n, 0) / arr.length
}

// console.log(average([1, 2, 3, 4, 5])) // 3
// console.log(average([1, 1, 1]))        // 1
// console.log(average([]))               // 0


// Задача 26: Является ли число простым (6 kyu)
// Вернуть true если число простое (делится только на 1 и на себя). n >= 2.
//
// isPrime(2)  → true
// isPrime(3)  → true
// isPrime(4)  → false
// isPrime(17) → true
// isPrime(25) → false

function isPrime(n) {
  if (n < 2) return false
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true
}

// console.log(isPrime(2))   // true
// console.log(isPrime(4))   // false
// console.log(isPrime(17))  // true
// console.log(isPrime(25))  // false


// Задача 27: Сгруппировать по критерию (5 kyu)
// Принимает массив и функцию-критерий, возвращает объект где ключи — результат функции,
// значения — массивы элементов с таким результатом.
//
// groupBy([1,2,3,4,5,6], n => n % 2 === 0 ? 'even' : 'odd')
//   → { odd: [1,3,5], even: [2,4,6] }
//
// groupBy(['one','two','three'], s => s.length)
//   → { 3: ['one','two'], 5: ['three'] }

function groupBy(arr, fn) {
  return arr.reduce((acc, item) => {
    const key = fn(item)
    acc[key] ? acc[key].push(item) : acc[key] = [item]
    return acc
  }, {})
}

// console.log(groupBy([1,2,3,4,5,6], n => n % 2 === 0 ? 'even' : 'odd'))
// console.log(groupBy(['one','two','three'], s => s.length))


// Задача 28: Zip двух массивов (5 kyu)
// Объединить два массива в массив пар. Длина — по наименьшему из двух.
//
// zip([1,2,3], ['a','b','c']) → [[1,'a'],[2,'b'],[3,'c']]
// zip([1,2],   ['a','b','c']) → [[1,'a'],[2,'b']]
// zip([],      [1,2,3])       → []

function zip(a, b) {
  return a.slice(0, b.length).map((item, i) => [item, b[i]])
}

// console.log(zip([1,2,3], ['a','b','c']))  // [[1,'a'],[2,'b'],[3,'c']]
// console.log(zip([1,2],   ['a','b','c']))  // [[1,'a'],[2,'b']]
// console.log(zip([],      [1,2,3]))        // []


// Задача 29: Капитализация слов (6 kyu)
// Сделать первую букву каждого слова заглавной, остальные строчными.
//
// titleCase('hello world')      → 'Hello World'
// titleCase('the QUICK brown')  → 'The Quick Brown'
// titleCase('')                 → ''

function titleCase(str) {
  return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')
}

// console.log(titleCase('hello world'))      // 'Hello World'
// console.log(titleCase('the QUICK brown'))  // 'The Quick Brown'
// console.log(titleCase(''))                 // ''


// Задача 30: Число в римские цифры (6 kyu)
// Перевести целое число (1–3999) в римскую запись.
//
// toRoman(1)    → 'I'
// toRoman(4)    → 'IV'
// toRoman(9)    → 'IX'
// toRoman(40)   → 'XL'
// toRoman(2024) → 'MMXXIV'
// toRoman(3999) → 'MMMCMXCIX'

function toRoman(num) {
  const map = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100,  'C'], [90,  'XC'], [50,  'L'], [40,  'XL'],
    [10,   'X'], [9,   'IX'], [5,   'V'], [4,   'IV'],
    [1,    'I']
  ]
  return map.reduce((acc, [value, numeral]) => {
    while (num >= value) {
      acc += numeral
      num -= value
    }
    return acc
  }, '')
}

// console.log(toRoman(1))     // 'I'
// console.log(toRoman(4))     // 'IV'
// console.log(toRoman(9))     // 'IX'
// console.log(toRoman(2024))  // 'MMXXIV'
// console.log(toRoman(3999))  // 'MMMCMXCIX'


