// Задача 11
const guessNumber = () => {
    alert('Предлагаю отгадать загаданное число от 1 до 10');
    let attempt = 3;
    let hiddenNumber = Math.floor(Math.random() * 10 + 1);
    while (attempt > 0) {
        if (attempt === 3 || attempt === 2) {
            alert(`У вас ${attempt} попытки`);
        } else {
            alert(`У вас ${attempt} попытка`);
        }
        let userAnswer = Number(prompt('Введите число'));
        if (userAnswer < hiddenNumber) {
            alert('Загаданное число больше');
            attempt--;
        } else if (userAnswer > hiddenNumber) {
            alert('Загаданное число меньше');
            attempt--;
        }
        if (attempt > 0 && userAnswer === hiddenNumber) {
            alert('Вы отгадали число!');
            break;
        } else if (attempt === 0 && userAnswer !== hiddenNumber) {
            alert(`Вы проиграли.
            Мы загадали число ${hiddenNumber}`);
        }
    }
}

guessNumber();

// Задача 12
const discount = () => {
    const arr = [];
    for (let i = 0; i < 3; i++) {
        let num = Number(prompt(`Введите ${i + 1} число`));
        arr.push(num);
    }
    const minNum = Math.min(...arr);
    arr.splice(arr.indexOf(minNum), 1);
    const sum = arr[0] + arr[1];
    console.log(sum);
}

discount();