// Задача 1.1 — Функция как значение (замыкание)
// Условие
//
// Нужно реализовать функцию createMultiplier(n), которая:
//
// принимает число n
// возвращает новую функцию
// возвращённая функция принимает один аргумент x
// и возвращает результат умножения x * n
//
// Ключевая идея: функция должна запомнить n через замыкание, а не получать его заново.


function createMultiplier(n) {

  return function (x) {
    return x * n
  }
}

const double = createMultiplier(2)
console.log(double(5))

const triple  = createMultiplier(3)
console.log(triple (4))


// Следующая задача — 1.2 (Композиция функций)
// Условие
//
// Реализуй функцию compose(f, g), которая:
//
// принимает две функции f и g
// возвращает новую функцию
// эта функция принимает аргумент x
// и возвращает результат: f(g(x))

function compose(f, g) {
  return function(x) {

    return  f(g(x))

  }
}

const add1 = x => x + 1;
const mul2 = x => x * 2;

console.log(compose(add1, mul2)(3))