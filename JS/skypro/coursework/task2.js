// Задача 3
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const result = {};

en.forEach((el, i) => {
    result[el] = ru[i];
});
console.log(result);

// Задача 4
// Переиспользую созданный объект из задачи 3
const getWeek = (obj, dayName, dayNum) => {
    const names = Object.values(obj);
    dayName = dayName.toLowerCase();
    const day = names.filter(day => day === dayName).join('');
    switch (day) {
        case 'понедельник':
        case 'вторник':
        case 'среда':
        case 'четверг':
        case 'пятница':
            alert('Будний день');
            break;
        case 'суббота':
        case 'воскресенье':
            alert('Выходной день');
            break;
        default:
            alert('Я не знаю, что это за день недели');
    }
    for (let i = 0; i < names.length; i++) {
        if (dayNum >= 1 && dayNum <= 7) {
            alert(names[dayNum - 1]);
            break;
        } else {
            alert('Я не знаю, что это за день недели');
            break;
        }
    }
}

const dayName = prompt('Введите день недели');
const dayNum = Number(prompt('Введите номер дня недели'));

getWeek(result, dayName, dayNum);