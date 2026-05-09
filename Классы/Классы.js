// Задача 1 — Базовый синтаксис
// Создай класс Rectangle со свойствами width и height. Добавь метод
// area() который возвращает площадь, и метод perimeter() который возвращает периметр.


class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  area() {
    return this.width * this.height
  }

  perimeter() {
    return (this.width + this.height) * 2
  }
}

const Rec = new Rectangle(10, 10)

console.log(Rec.area())
console.log(Rec.perimeter())


// Создай класс Animal с конструктором name и методом speak() который возвращает "${name} и" +
// "здаёт звук". Унаследуй от него класс Cat, который переопределяет speak()
// на "${name} мяукает", и добавляет метод fullInfo() который возвращает оба варианта через запятую.

class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    return this.name + ' издает звук'
  }
}

class Cat extends Animal {

  speak() {
    return this.name + ' мяукает'
  }

  fullInfo() {
    return `${super.speak()}, ${this.speak()}`
  }
}


const c = new Cat("Мурка");
console.log(c.speak());    // "Мурка мяукает"
console.log(c.fullInfo()); //"Мурка издаёт звук, Мурка мяукает"


// Задача 3 — Статические методы
// Создай класс Temperature со статическим методом
// toCelsius(f) который переводит Фаренгейты в Цельсий, и toFahrenheit(c) — обратно.

class Temperature {
  static toCelsius(f) {
    return (f - 32) * 5 / 9
  }

  static toFahrenheit(c) {
    return c * 9 / 5 + 32
  }
}


console.log(Temperature.toCelsius(32))
console.log(Temperature.toFahrenheit(100))


class Counter {
  #count = 0


  increment() {
    console.log(this.#count++)
  }

  decrement() {
    console.log(this.#count--)
  }

  reset() {
    console.log(this.#count = 0)
  }

  get value() {
    console.log(this.#count)
  }
}

const d = new Counter();
d.increment();
d.increment();
d.increment();
d.value;    // 3
d.decrement();
d.value;    // 2
d.reset();
d.value;


class Shape {

}

class Circle extends Shape {
}

class Square extends Shape {
}

function whatIs(obj) {
  if (obj instanceof Circle) return "circle";
  if (obj instanceof Square) return "square";
  return "unknown";
}

// Проверки
console.log(whatIs(new Circle()) === "circle");  // true
console.log(whatIs(new Square()) === "square");  // true
console.log(whatIs(new Shape()) === "unknown"); // true
console.log(whatIs({}) === "unknown"); // true


// Создай примесь Timestamped с методом getCreatedAt() который возвращает дату
// создания объекта. Подмешай её в класс User через Object.assign. При создании
// нового User дата должна фиксироваться автоматически.
//   jsconst u = new User("Аня");
// u.getCreatedAt(); // Date объект — дата создания
// Подсказка: дата фиксируется в constructor через this.


class User {
  constructor(name) {
    this.name = name
    this.createdAt = new Date()
  }
}

const Timestamped = {
  getCreatedAt() {
    return this.createdAt
  }
}

Object.assign(User.prototype, Timestamped)

const u = new User("Аня")
console.log(u.getCreatedAt())


class PowerArray extends Array {

  sum() {
    return this.reduce((acc, x) => acc + x, 0)
  }

  average() {
    return this.sum() / this.length
  }

}

console.log(new PowerArray(1, 2, 3, 4, 5).sum())
console.log(new PowerArray(1, 2, 3, 4, 5).average())

const arr = new PowerArray(1, 2, 3, 4, 5);
console.log(arr.filter(x => x > 2).sum()); // отфильтровали [3,4,5] → сумма 12


class Clock {

  constructor({template}) {
    this.template = template
  }


  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  };

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  };

}

let clock = new Clock({template: 'h:m:s'});
clock.start();