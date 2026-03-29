// Вы наверняка знакомы с системой «лайков» в Facebook и на других страницах. Пользователи могут ставить «лайки» под постами в блогах, фотографиями и другими материалами. Мы хотим создать текст, который будет отображаться рядом с таким материалом.
//
//   Реализуйте функцию, которая принимает массив с именами людей, которым нравится тот или иной предмет. Она должна возвращать текст для отображения, как показано в примерах:
//
//     []                                -->  "no one likes this"
//     ["Peter"]                         -->  "Peter likes this"
//     ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//     ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//     ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Примечание: при наличии 4 и более имен число в "and 2 others" просто увеличивается.


function likes(names) {

  if (names.length === 0) {
    return `no one likes this`
  } else if (names.length === 1) {
    return `${names} likes this`
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }

}

console.log(likes(["Alex", "Jacob", "Mark", "Max", "Mark", "Max"]))


// Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и возвращает строку с этими числами в формате телефонного номера.
//
//   Пример
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// Чтобы выполнить это задание, необходимо правильно указать формат.
//
//   Не забудьте поставить пробел после закрывающей скобки!

function createPhoneNumber(numbers) {
  const numToString = numbers.join('')

  const firstPart = numToString.slice(0, 3)
  const twoPart = numToString.slice(3, 6)
  const threePart = numToString.slice(6, 10)

  return `(${firstPart}) ${twoPart}-${threePart}`


}

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


//Реализуйте функцию, которая вычисляет разницу между двумя списками. Функция должна удалить
// из первого списка (a) все элементы, которые присутствуют во втором списке (b).
// Порядок элементов в первом списке должен быть сохранен.
//
// Примеры
// Если a = [1, 2] и b = [1], то результатом будет [2].
//
//Если a = [1, 2, 2, 2, 3] и b = [2], то результатом будет [1, 3].

function arrayDiff(a, b) {
  return a.filter((x) => !b.includes(x))
}

// console.log(arrayDiff([1, 2], [1]))



// В книжном магазине представлено множество книг, распределенных по 26 категориям с обозначениями A, B, C, ..., Z. У каждой книги есть код из как минимум 3 символов.Первый символ кода — заглавная буква, которая определяет категорию книги.
//
//   В списке товаров книжного магазина после каждого кода через пробел указано положительное целое число, обозначающее количество книг с таким кодом на складе.
//
//   Задача
// Вам будет предоставлен список товаров в книжном магазине и список категорий. Ваша задача — найти общее количество книг в списке товаров, используя коды категорий из списка категорий. Обратите внимание: коды в обоих списках расположены в одинаковом порядке.
//
//   Верните результат в виде строки, как показано в примере ниже, или в виде списка пар (Haskell/Clojure/Racket/Prolog).
//
//   Если какой-либо из входных списков пуст, верните пустую строку или пустой массив/список (Clojure/Racket/Prolog).
//
//   Пример
// # the bookseller's stocklist:
// "ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"
//
// # list of categories:
//   "A", "B", "C", "W"
//
// # result:
//   "(A : 20) - (B : 114) - (C : 50) - (W : 0)"
// Объяснение:
//
//   категория A: 20 книг (ABART)
// категория B: 114 книг = 25 (BKWRK) + 89 (BTSQZ)
// категория C: 50 книг (CDXEF)
// категория W: 0 книг

function stockList(books, categories) {

  if (!books.length || !categories.length) {
    return '';
  }


  return categories
    .map(category => {

      let sum = 0;

      books.forEach(book => {

        const [code, quantity] = book.split(" ")
        const firstLetter = code.charAt(0)
        // console.log(firstLetter, quantity)
        if(firstLetter === category){
          sum += Number(quantity)
        }
      });

      return `(${category} : ${sum})`;
    })
    .join(' - ');
}


console.log(stockList(["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"],["A", "B", "C", "W"]))