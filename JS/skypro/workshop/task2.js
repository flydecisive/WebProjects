// Задача 4
// В задаче не сказано, в каком формате нужно выводить массив (и что его вообще нужно выводить), я решил перезаписать старый 
const cubicArray = () => {
    const arr = [];
    while (arr.length < 4) {
        arr.push(Math.floor(Math.random() * 10 + 1));
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.pow(arr[i], 3);
    }
    console.log(arr);
}

cubicArray();

// Задача 5
// Так же ничего не сказано про вывод результата
const shortenedArray = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let indexOfFour = arr.indexOf(4);
    arr.splice(indexOfFour, 1);
    let indexOfFive = arr.indexOf(5);
    arr.splice(indexOfFive, 1);
    console.log(arr);
}

shortenedArray();

// Задача 6
const hello = () => {
    let word = "hello";
    word = word.slice(0, 2).toLocaleUpperCase() + word.slice(2);
    console.log(word);
}

hello();

// Задача 7
const evenArray = () => {
    let num = Number(prompt('Введите число от 1 до 20'));
    let arr = [];
    if (num === 1) {
        console.log(`Масив пуст, вы ввели ${num}`);
    } else {
        for (let i = 2; i <= num; i++) {
            if (i % 2 === 0) {
                arr.push(i);
            }
        }
        console.log(arr);
    }
}

evenArray();

// Задача 8
const passwordGeneration = () => {
    let data = "abcdefghijklmnopqrstuvwxyz0123456789";
    let password = '';
    for (let i = 1; i <= 8; i++) {
        let passwordGen = Math.floor(Math.random() * data.length);
        let upperGen = Math.floor(Math.random() * 2);
        if (upperGen === 0 || isNaN(data[passwordGen]) === false) {
            password += data[passwordGen];
        } else {
            password += data[passwordGen].toUpperCase();
        }
    }
    console.log(password);
}

passwordGeneration();

// Задача 9
const triangleAreaCalculator = (side1, side2, side3) => {
    const halfMeter = (side1 + side2 + side3) / 2;
    const square = Math.sqrt(halfMeter * (halfMeter - side1) * (halfMeter - side2) * (halfMeter - side3));
    return square;
}

console.log(triangleAreaCalculator(3, 3, 3));

// Задача 10
const riddle = (textOfRiddle, answer) => {
    alert(textOfRiddle);
    let attempt = 3;
    let correct = false;
    alert(`Отгадайте загадку, у вас ${attempt} попытки`);
    while (attempt > 0) {
        let userAnswer = prompt('Введите ваш ответ');
        userAnswer = userAnswer.toLowerCase();
        for (let element of answer) {
            if (element === userAnswer) {
                correct = true;
            }
        }
        if (correct) {
            alert('Поздравляем, вы отгадали загадку');
            break;
        } else {
            --attempt;
            if (attempt === 2) {
                alert(`Неверно, у вас осталось ${attempt} попытки`);
            } else {
                alert(`Неверно, у вас осталось ${attempt} попытка`);
            }
        }
    }
    if (attempt === 0) {
        alert('Попытки закончились, вы проиграли');
    }
}

const textOfRiddle = 'Зимой и летом одним цветом';
const answer = ['ель', 'елка', 'ёлка'];

riddle(textOfRiddle, answer);