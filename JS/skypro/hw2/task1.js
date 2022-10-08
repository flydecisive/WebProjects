// Задача 1

let password = 'пароль';
let userPassword = prompt('Введите пароль: ');
let result;

if (password === userPassword) {
    result = 'верно';
} else {
    result = 'неправильно';
}

console.log(result);