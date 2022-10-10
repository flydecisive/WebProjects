// Задача 7
function isEven() {
    let number = Number(prompt('Введите число:'));
    let answer;
    if (number % 2 === 0) {
        answer = 'Число четное';
    } else {
        answer = 'Число нечетное';
    }

    return answer;
}

console.log(isEven());