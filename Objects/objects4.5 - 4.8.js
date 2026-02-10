// Возможно ли создать функции A и B, чтобы new A() == new B()?

function A(name) {
  this.name = name
}

function B(name) {
  this.name = name
}

let a = new A('User');
let b = new B('User');


// console.log(Object.keys(a) === Object.keys(b))
//

const result = JSON.stringify(a) === JSON.stringify(b)

console.log(result)

// 🧩 Задача 1
// function Car(model) {
//   this.model = model;
// }
//
// const c = new Car("BMW");
//
//
// 👉 Что лежит в c?
//   Опиши результат словами или в виде объекта.
//
// (Только это, дальше не идём, пока не ответишь 🙂)

//ответ new создает объект car и присваивает к model bmw


// 🧩 Задача 4 — return null
// function Test() {
//   this.x = 10;
//   return null;
// }
//
// const t = new Test();
//
//
// 👉 Вопрос: что лежит в t?
//
//   Подумай внимательно: return null — это объект или примитив? Как ведёт себя new?

//ответ null это примитив проигнорирует его и вернет t = {x:10}


// Задача
//
// Напиши конструктор Person, который:
//
// 1️⃣ Принимает name и age
// 2️⃣ Сохраняет их в свойства this.name и this.age
// 3️⃣ Если age < 0, возвращает объект { error: "Invalid age" }
//
// Пример использования:
//
//   const p1 = new Person("Alice", 25); // ?
// const p2 = new Person("Bob", -5);   // ?


function Person(name, age) {
  this.name = name
  this.age = age

  if (age < 0) {
    return {error: "Invalid age"}
  }
}

const p1 = new Person('Alex', 1)
const p2 = new Person("Bob", -5);
console.log(p1)
console.log(p2)


// Задача — “Супер-конструктор”
//
// Напиши конструктор BankAccount, который:
//
// 1️⃣ Принимает owner и balance
// 2️⃣ Сохраняет их в свойства this.owner и this.balance
// 3️⃣ Если balance < 0, возвращает объект { error: "Negative balance" }
// 4️⃣ Добавь метод deposit(amount) на prototype, который увеличивает баланс
//
// Пример использования:

function BankAccount(owner, balance) {
  this.owner = owner
  this.balance = balance

  if (balance < 0) {
    return {error: "Negative balance"}
  }
}

BankAccount.prototype.deposit = function (dep) {
  this.balance += dep

}

const a1 = new BankAccount('Alice', 100)
const a2 = new BankAccount('Alex', 0)


a1.deposit(340)
a1.deposit(340)

a2.deposit(400)

console.log(a1)
console.log(a2)


// Отлично! 🚀 Давай потренируем ?. на практике.
//
// 🧩 Задача 1 — вложенные объекты
// const user = {
//   name: "Alice",
//   address: {
//     city: "NY",
//   }
// };
//
// // Что выведет этот код?
// console.log(user.address?.city);
// console.log(user.contact?.phone);

// в первом случае NY
// во втором undefined


//
// const obj = {
//   greet: () => "Hello!"
// };
//
// // Что выведет?
// console.log(obj.greet?.());
// console.log(obj.sayHi?.());

//ответ в первом случае выведет hello, во втором undefined ?. проверяет если ли этот метод в obj


// Отлично! 🚀 Давай сделаем мини-практику по преобразованию объектов в примитивы.
//
// 🧩 Задача 1 — toString()
//
// Создай объект user с полем name = "Alice".
//
//   Определи метод toString(), чтобы при конкатенации с строкой объект превращался в имя пользователя.
//
//


const user = {
  name: "Alice",
  toString() {
    return this.name
  }
}

console.log("Hello " + user)


// 🧩 Задача 2 — valueOf()
//
// Создай объект counter с полем value = 10.
//
// Определи метод valueOf(), чтобы объект можно было использовать в арифметике.
//
// Пример:

const counter = {
  value: 10,
  valueOf() {
    return this.value
  }
}

console.log(counter + 5)
console.log(counter * 2)


// 🧩 Задача 3 — Symbol.toPrimitive
//
// Создай объект magic:
//
//   Для строки должен возвращать "Magic"
//
// Для числа должен возвращать 42
//
// Для default — true
//
// Пример:

const magic = {
  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return 'Magic'
    }
    if (hint === "number") {
      return 42
    }
    return true
  }
}

console.log(`${magic}`)
console.log(+magic)
console.log(magic == true)