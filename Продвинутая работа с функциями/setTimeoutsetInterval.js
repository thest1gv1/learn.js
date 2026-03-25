// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
//
//   Сделайте два варианта решения.
//
//   Используя setInterval.
//   Используя рекурсивный setTimeout.


// const printNumbers = (from, to) => {
//
//   const interval = setInterval(() => {
//     console.log(from++)
//
//     if (from > to) {
//       clearInterval(interval)
//     }
//   }, 500)
// }
// printNumbers(2, 10)


const printNumbers = (from, to) => {

  setTimeout(() => {
    if (from > to) {
      return
    } else {
      console.log(from++)
    }
    
    setTimeout(() => {
      printNumbers(from, to)
    }, 500)
  }, 500)


}

printNumbers(1, 3)





