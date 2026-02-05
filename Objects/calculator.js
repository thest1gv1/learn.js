// Создайте объект calculator (калькулятор) с тремя методами:
//
//   read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.


let calculator = {
  read() {
    this.a = Number(prompt('Введите первое значение'))
    this.b = Number(prompt('Введите второе значение'))
  },

  sum(){
   return this.a + this.b
  },

  mul(){
    return this.a * this.b
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());