// Задача 1

const repairCalculator = () => {
    let roomLength = Number(prompt('Введите длину комнаты в сантиметрах')) / 100;
    let roomWidth = Number(prompt('Введите ширину комнаты в сантиметрах')) / 100;
    let roomSquare = roomLength * roomWidth;
    console.log(`Выберите тип ремонта:
    минимальный - 7 000 за метр квадратный.
    средний - 10 000 за метр квадратный.
    максимальный - 15 000 за метр квадратный.`);
    let repairType = prompt('Выберите тип ремонта');
    repairType = repairType.toLocaleLowerCase();
    let repairCoast;
    switch (repairType) {
        case 'минимальный':
            repairCoast = roomSquare * 7000;
            break;
        case 'средний':
            repairCoast = roomSquare * 10000;
            break;
        case 'максимальный':
            repairCoast = roomSquare * 15000;
            break;
        default:
            alert('Вы выбрали не верный тип ремонта');
    }

    console.log(`Стоимость ремонта на тарифе ${repairType} состоставит ${repairCoast}`);
}

repairCalculator();

// Задача 2
const randomArray = () => {
    const arr = [];
    while (arr.length < 4) {
        arr.push(Math.floor(Math.random() * 10 + 1));
    }
    let sum = (arr[0] * arr[1]) + (arr[2] * arr[3]);
    console.log(`${arr}
    ${sum}`);
}

randomArray();

// Задача 3
const sumOfNumbers = () => {
    let num = prompt('Введите четырехзначное число');
    let sum = 0;
    for (let i of num) {
        sum += Number(i);
    }
    console.log(`Сумма  цифр числа ${num} = ${sum}`);
}

sumOfNumbers();