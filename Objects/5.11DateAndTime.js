// Задача 1 — базовая
//
// Суть: Получить завтрашнюю дату в формате YYYY-MM-DD.

//
//   Подсказка:
//
// Используй new Date().
//
//   Не забудь про методы .getMonth() (0–11) и .getDate().
//
//   Добавление 1 дня — через .setDate().

const date = new Date()
date.setDate(date.getDate() + 1)

const year = date.getFullYear()
const month = String(date.getMonth() + 1).padStart(2, '0')
const day = String(date.getDate()).padStart(2, '0')

// console.log(`${year}-${month}-${day}`)


// Задача 2 — таймер до конца дня
//
// Условие:
//   Напиши код на JavaScript, который вычисляет, сколько часов и минут осталось до конца текущего дня (23:59:59) в локальном времени, и выводит результат в формате:
//
//   Осталось: 7 часов 42 минуты
//
// Подсказки:
//
//   Используй new Date() для текущего времени.
//
//   Для конца дня можно создать объект Date и установить часы, минуты, секунды на 23:59:59.
//
// Разница между датами в миллисекундах → переводи в часы и минуты.


const startDate = new Date()

const endDate = new Date(startDate)
endDate.setHours(23, 59, 59, 999)

const diffMs = endDate - startDate;
const diffHours = Math.floor(diffMs / 1000 / 60 / 60);
const diffMinutes = Math.floor((diffMs / 1000 / 60) % 60);
const diffSeconds = Math.floor((diffMs / 1000) % 60);
// console.log(diffMs)
//
// console.log(`Осталось: ${diffHours} часов ${diffMinutes} минут ${diffSeconds} cek`);


// Задача 3 — продвинутый уровень
//
// Условие:
//
//   Есть событие в UTC:
//
//   2026-03-09T15:00:00Z
//
// Тебе нужно написать код, который выводит это событие в часовом поясе Europe/Moscow в формате HH:MM (локальные часы и минуты в Москве).


const evUtcDate = new Date()

evUtcDate.setDate(evUtcDate.getDate())

const formatedDateToMoscow = new Intl.DateTimeFormat("ru-RU", {
  dateStyle: "full",
  timeStyle: "full",
}).format(evUtcDate)

console.log(formatedDateToMoscow.toLocaleString())



