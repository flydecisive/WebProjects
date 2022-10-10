// Задача 7
const arr = [10, 27, 33, 67, 90, 235, 353, 987, 1000];
console.log(arr.reverse());

// Задача 9
const numArr = [10, 12, 15, 22, 33, 37, 45, 50];
numArr.forEach(function (item, i) {
    let firstDigit = (item - item % 10) / 10;
    if (firstDigit === 1 || firstDigit === 3) {
        console.log(item);
    }
});

// Задача 10
const weekday = (day) => {
    if (day < 1 || day > 7) {
        return 'Нет дня недели с таким номером';
    } else {
        let daysName;
        switch (Number(day)) {
            case 1:
                daysName = 'Понедельник';
                break;
            case 2:
                daysName = 'Вторник';
                break;
            case 3:
                daysName = 'Среда';
                break;
            case 4:
                daysName = 'Четверг';
                break;
            case 5:
                daysName = 'Пятница';
                break;
            case 6:
                daysName = 'Суббота';
                break;
            case 7:
                daysName = 'Воскресение';
                break;
            default:
                return 'Нужно вводить номер дня недели!';
        }
        return daysName;
    }
}

let day = prompt('Введите номер дня недели');
console.log(weekday(day));
