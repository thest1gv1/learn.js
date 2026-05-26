// Сделай функцию:
//
//   safeJSONParse(str)
//
// Которая:
//
//   возвращает объект
// если JSON плохой → null


// Попробуй сам сделать версию:
//
//   safeJSONParse(str, defaultValue)
//
// Чтобы:
//
//   safeJSONParse("bad json", {})
//
// возвращал:
//
// {}

function safeJSONParse(str, defaultValue) {
  try {
    return JSON.parse(str)

  } catch (error) {
    return defaultValue
  }
}

console.log(safeJSONParse('{age:25}', {}))


// Задача 2 — Калькулятор деления
//
// Сделай функцию:
//
//   divide(a, b)
// Требования
//
// Если:
//
//   b === 0
//
// то:
//
//   throw new Error(...)


function divide(a, b) {

  if (b === 0) {
    throw new Error('Делить на 0 нельзя')
  }

  return a / b
}

try {

  console.log(divide(10, 0))

} catch(e) {

  console.log(e.message)

}