// function wait(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve()
//     }, ms)
//   })
// }
//
// wait(1000)
//   .then(() => {
//     console.log('A');
//   })
//   .then(() => {
//     console.log('B');
//   });


// function fetchUser(id) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({id, name: "User " + id});
//     }, 1000);
//   });
// }
//
// function getUser() {
//   return fetchUser(1)
// }
//
// getUser()
//   .then(user => {
//   console.log(user)
// })


// пока с обычного промиса начнем21:06Claude responded: Окей!Окей! Напиши функцию которая получает пользователя с id = 1 и выводит его имя.
//   Только через .then() и .catch() — никакого async/await.
// jsfetch('https://jsonplaceholder.typicode.com/users/1')
// // продолжи сам...


// async function getUser(id) {
//   return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error('Пользователь не найден')
//       } else {
//         return res.json()
//       }
//     })
//     .then(user => console.log(user.name))
//     .catch(error => console.log(error.message))
// }
//
// getUser(123131231232)
//
// async function fetchUser(id) {
//   try {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//
//     if (!res.ok) throw new Error('Пользователь не найден')
//
//     const data = await res.json()
//     console.log(data.name)
//
//   } catch (e) {
//     console.log(e.message)
//   }
// }
//
// fetchUser(1)


fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(res => res.json())
  .then(data => console.log(data.name))
  .catch(err => console.log(err.message))


try {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
  const data = await res.json()
  console.log(data)


} catch (e) {
  console.log(e.message)
}