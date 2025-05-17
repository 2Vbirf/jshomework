// ЗАДАНИЕ 1. Задача 1.

// let x = Number(prompt("Введите первое число"))
// let y = Number(prompt("Введите второе число"))
// let z = Number(prompt("Введите третье число"))

// if( x == 0 || y == 0 || z == 0 ) {
//     console.log("Ноль — это перебор!")
// }
// else if( x > 0 && y > 0 && z > 0 ) {
//     console.log("Все числа положительные")
// }
// else if((x > 0 && y > 0 & z < 0) || (x > 0 && y < 0 && z > 0) || (x < 0 && y > 0 && z > 0)) {
//     console.log ("Два в плюсе, один в минусе")
// }
// else if((x < 0 && y < 0 & z > 0) || (x < 0 && y > 0 && z < 0) || (x > 0 && y < 0 && z < 0)) {
//     console.log ("Свет в конце тоннеля: только одно положительное")
// }
// else if( x < 0 && y < 0 && z < 0) {
//     console.log("Темная сторона математики...")
// }

// ЗАДАНИЕ1. Задача 2.

// let role = prompt("Введите роль")
// let karma = Number(prompt("Ваша карма?"))

// if ( role == "banned") {
//     alert("Доступ запрещен!")
// } else if (role == "admin") {
//     alert ("Полный доступ!")
// } else if (role == "user" && karma >= 50) {
//     alert ("Добро пожаловать!")
// } else if (role == "user" || karma < 50) {
//     alert ("Подозрительная активность...")
// } else if (role == "guest") {
//     alert("Вход только для чтения")
// } else {
//     alert("Ошибка:неизвестная роль")
// }