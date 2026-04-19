let animal = {
  jumps: null
};

let rabbit = {
  __proto__: animal,
  jumps: true
};


console.log(rabbit.jumps)

delete rabbit.jumps

console.log(rabbit.jumps)

delete animal.jumps

console.log(rabbit.jumps)


// Алгоритм поиска
// важность: 5
// Задача состоит из двух частей.
//
//   У нас есть объекты:
//
//   let head = {
//     glasses: 1
//   };
//
// let table = {
//   pen: 3
// };
//
// let bed = {
//   sheet: 1,
//   pillow: 2
// };
//
// let pockets = {
//   money: 2000
// };
// С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.


let head = {
  glasses: 1
};

let table = {
  __proto__: head,
  pen: 3
};

let bed = {
  __proto__: table,
  sheet: 1,
  pillow: 2
};

let pockets = {
  __proto__: bed,
  money: 2000
};


console.log(pockets.pen)
console.log(bed.glasses)
console.log(pockets.glasses)
console.log(head.glasses)

// Почему наедаются оба хомяка?
//   важность: 5
// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
//
//   Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

  let hamster = {
    stomach: [],

    eat(food) {
      this.stomach = [food];
    }
  };

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log( lazy.stomach ); // apple