// Задача 1: Валидация IPv4-адреса
// Напишите алгоритм, который будет определять корректные IPv4-адреса в десятичном формате.
// IP-адреса считаются корректными, если они состоят из четырех октетов со значениями от 0 до 255 включительно.
//
// Валидные:    1.2.3.4 / 123.45.67.89
// Невалидные:  1.2.3 / 1.2.3.4.5 / 123.456.78.90 / 123.045.067.089


function isValidIP(str) {
  const partsIp = str.split('.');

  if (partsIp.length === 4) {
    return partsIp.every((item) => {
      return item === String(Number(item)) && Number(item) <= 255 && Number(item) >= 0
    })
  } else {
    return false
  }
}

isValidIP('1.2.3.4')         // true
isValidIP('123.045.067.089') // false
isValidIP('123.456.78.90')   // false
isValidIP('12.34.56.-7')     // false


// Задача 2: encode / decode гласных
// encode(): заменяет строчные гласные цифрами — a->1, e->2, i->3, o->4, u->5
// decode(): обратная операция — цифры обратно в гласные
//
// encode("hello") -> "h2ll4"
// decode("h3 th2r2") -> "hi there"


function encode(string) {
  const replacements = {
    "a": "1",
    "e": "2",
    "i": "3",
    "o": "4",
    "u": "5"
  };

  return Object.keys(replacements).reduce((acc, currentValue) => {
    return acc.replaceAll(currentValue, replacements[currentValue])
  }, string)
}

function decode(string) {
  const replacements = {
    "a": "1",
    "e": "2",
    "i": "3",
    "o": "4",
    "u": "5"
  };

  return Object.keys(replacements).reduce((acc, currentValue) => {
    return acc.replaceAll(replacements[currentValue], currentValue)
  }, string)
}

encode('hello')    // "h2ll4"
encode('aeiou')    // "12345"
decode('h2ll4')    // "hello"
decode('h3 th2r2') // "hi there"


// Задача
// Вам будет дан массив чисел. Вам нужно отсортировать нечетные числа по возрастанию, оставив четные на своих местах.
//
//   Примеры
//   [7, 1]  =>  [1, 7]
//   [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//   [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


function sortArray(array) {

  const oddSortArr = array.filter((item) => item % 2 !== 0).sort((a, b) => a - b)

  let i = 0

  return array.map((item) => {
    if(item % 2 !==0){
     return  oddSortArr[i++]
    }
    else {
    return   item
    }
  })


}

console.log(sortArray([5, 8, 6, 3, 4]))