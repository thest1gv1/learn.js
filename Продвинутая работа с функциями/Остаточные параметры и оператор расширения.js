// Уровень 1 (Junior)
//
// Напиши функцию multiply с rest-параметрами, чтобы она перемножала любое количество чисел.


function multiply(...a) {
  return a.reduce((acc, item) => item * acc, 1)
}

// console.log(multiply(1, 2, 3, 4))


// Уровень 2
//
// Объединить три массива [1,2], [3,4], [5,6] с помощью spread и вывести результат.

const arr1 = [1, 2]
const arr2 = [3, 4]
const arr3 = [5, 6]

// console.log([...arr1, ...arr2, ...arr3])


// Уровень 3 (Middle)
//
// Напиши функцию, которая принимает любое количество аргументов и возвращает сумму только чётных чисел.

const evenNumbers = (...nums) => {
  return nums
    .filter((item) => item % 2 === 0)
    .reduce((acc, item) => acc + item, 0)
}

// console.log(evenNumbers(1, 2, 3, 4, 5, 6))




function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}


console.log(factorial(5)); // ❌ вне функции недоступна


setTimeout(() => clearInterval(intervalId), 5000); // остановка через 5 секунд