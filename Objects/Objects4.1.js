// 🟢 Задание 1 (шаг 1)
// Создай объект user, в котором есть:
// - name
// - age
// Пока ничего больше не делай, просто объяви объект.

const obj = {
  name: "Alex",
  age: 20
};

console.log(obj.name);

// 🟢 Задание 2
// Есть объект:
//   const car = {
//     brand: "BMW",
//     year: 2020
//   }
// Как изменить значение year на 2023?

const car = {
  brand: "BMW",
  year: 2020
};

car.year = 2023;
console.log(car.year);
console.log(car["brand"]);

// 🟠 Задание 3 (шаг 1)
// Создай объект book с полями:
// - title
// - author

const book = {
  title: "",
  author: ""
};

// 🟠 Задание 3 (шаг 2)
// Добавь в объект book новое свойство:
// - pages (любое число)

book.pages = 100;

// 🟠 Задание 3 (шаг 3)
// Удали свойство author из объекта book.

delete book.author;

// 🟠 Задание 4
// Есть объект:
//   const user = {
//     name: "Alex",
//     isAdmin: false
//   }
// Напиши if, который:
// - выводит "Доступ разрешён", если isAdmin === true
// - иначе "Доступ запрещён"

const user = {
  name: "Alex",
  isAdmin: true
};

if (user.isAdmin) {
  console.log("Доступ разрешен");
} else {
  console.log("Доступ запрещен");
}

// 🟠 Задание 5 — вложенные объекты
// Есть объект student, у которого есть оценки по предметам.
// Выведи в консоль оценку по math.

const student = {
  name: "Alex",
  grades: {
    math: 4,
    english: 5
  }
};

console.log(student.grades.math);

// 🟠 Задание 6 — доступ к свойствам через переменную
// Есть объект user и переменная key.
// Выведи значение свойства, имя которого лежит в key.

const user2 = {
  name: "Alex",
  age: 20,
  city: "Moscow"
};

const key = "city";

console.log(user2[key]);

// 🟠 Задание 7 — перебор свойств объекта
// У нас есть объект с оценками.
// 1️⃣ Используя for…in, выведи в консоль все предметы и их оценки в формате:
// math: 4
// english: 5
// physics: 3

const grades = {
  math: 4,
  english: 5,
  physics: 3
};

for (let gradesKey in grades) {
  console.log(`${gradesKey}: ${grades[gradesKey]}`);
}

// 🟠 Задание 8 — доступ к разным видам ключей
// Вопросы:
// 1️⃣ Как вывести name через точку?
// 2️⃣ Как вывести "first name"?
// 3️⃣ Как вывести name через квадратные скобки и переменную key1?
// 4️⃣ Как вывести city через переменную key2?

const obj2 = {
  name: "Alex",
  "first name": "Alex",
  age: 20,
  city: "Moscow"
};

const key1 = "name";
const key2 = "city";

console.log(obj2.name);
console.log(obj2["first name"]);
console.log(obj2[key1]);
console.log(obj2[key2]);

// 🟠 Задание 9 — метод объекта
// Создай объект user3 с полями:
// - name — строка
// - age — число
// Добавь метод sayHi, который выводит в консоль:
// "Привет, меня зовут <name>"

const user3 = {
  name: "Alex",
  age: 12,
  sayHi() {
    console.log(`Привет, меня зовут ${this.name}`);
  }
};

user3.sayHi();

// 🟠 Задание 10 — один метод для нескольких объектов
// 1️⃣ Вызови sayHi для user1 и user2, чтобы каждый вывел своё имя.
// 2️⃣ Создай новый объект user4 с name = "Eve" и добавь в него тот же метод, что у user1.
// 3️⃣ Вызови метод для user4.

const user1 = {
  name: "Alex",
  sayHi() {
    console.log(`Привет, меня зовут ${this.name}`);
  }
};

const user2b = {
  name: "Bob",
  sayHi: user1.sayHi
};

const user4 = {
  name: "Eve",
  sayHi: user1.sayHi
};

user1.sayHi();
user2b.sayHi();
user4.sayHi();

// 🟠 Задание 11 — несколько счётчиков
// Создай два объекта-счётчика counter1 и counter2,
// у каждого своё состояние (count) и метод increment,
// который увеличивает значение и выводит его.

const counter1 = {
  count: 0,
  increment() {
    this.count++;
    console.log("counter1", this.count);
  }
};

const counter2 = {
  count: 0,
  increment() {
    this.count++;
    console.log("counter2", this.count);
  }
};

counter1.increment();
counter1.increment();
counter2.increment();

// 🟠 Задание 12 — корзина товаров
// 1️⃣ Создай объект cart с полем total = 0 и методом addProduct(product).
// 2️⃣ Метод должен увеличивать this.total на product.price * product.count.
// 3️⃣ Используй этот же метод у второго объекта cart1.

const products = [
  {
    name: "Apple",
    price: 10,
    count: 2
  },
  {
    name: "Banana",
    price: 5,
    count: 5
  },
  {
    name: "Cherry",
    price: 15,
    count: 1
  }
];

const cart = {
  total: 0,
  addProduct(product) {
    this.total += product.price * product.count;
    console.log("Сумма", this.total);
  }
};

const cart1 = {
  total: 0,
  addProduct: cart.addProduct
};

cart.addProduct(products[0]);
cart.addProduct(products[1]);
cart.addProduct(products[2]);

cart1.addProduct(products[1]);
cart1.addProduct(products[2]);

// 🔴 Задание 13 — банк с методами и цепочками
// Сделай объект account, который представляет банковский счёт.
//
// Свойства:
// - owner — имя владельца.
// - balance — текущий баланс (число).
//
// Методы:
// - deposit(amount) — пополнить счёт на amount, вернуть this (для чейнинга).
// - withdraw(amount) — списать amount, если денег достаточно,
//   иначе вывести сообщение об ошибке, вернуть this.
// - getBalance() — вывести в консоль текущий баланс и вернуть this.
//
// Во всех методах работай через this.balance, а не через имя объекта.

const account = {
  owner: "Alex",
  balance: 1000,

  getBalance() {
    console.log("Баланс:", this.balance);
    return this;
  },

  withdraw(amount) {
    const debitAmount = this.balance - amount;

    if (debitAmount >= 0) {
      this.balance = debitAmount;
      console.log("Списано:", amount);
      console.log("Баланс:", this.balance);
    } else {
      console.log("Не достаточно средств");
    }

    return this;
  },

  deposit(amount) {
    this.balance += amount;
    console.log("Начислено:", amount);
    console.log("Баланс:", this.balance);
    return this;
  }
};

account.getBalance().withdraw(500).deposit(200);


// Задача: «Прямоугольник»
//
// Создай объект rectangle со свойствами:
//
//   width — ширина (число)
//
// height — высота (число)
//
// И с методами/геттерами/сеттерами:
//
// Геттер area — возвращает площадь прямоугольника (width * height)
//
// Сеттер area — при присвоении нового значения площади меняет width, оставляя height без изменений
//
// Метод log() — выводит в консоль: Ширина: X, Высота: Y, Площадь: Z
//
// Все методы должны использовать this и работать через объект


// const rectangle = {
//   width: 10,
//   height: 10,
//
//
//   get square() {
//     return this.width * this.height
//   },
//
//   set square(newWidth) {
//      this.width = newWidth
//   },
//
//   log() {
//     console.log('Ширина:', this.width)
//     console.log('Высота:', this.height)
//     console.log('Площадь:', this.square)
//   },
// }
//
// rectangle.log()
//
// rectangle.square = 50
//
// rectangle.log()



//



