// Задача 5
function howOld() {
    let age = Number(prompt('Сколько тебе лет?'));
    let result;
    if (age < 0) {
        result = 'Вы ввели неправильное значение';
    } else if (age > 0 & age < 12) {
        result = 'Привет, друг!';
    } else if (age >= 13) {
        result = 'Добро пожаловать!';
    }

    return result;
}

console.log(howOld());