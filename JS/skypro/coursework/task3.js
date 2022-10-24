// Задача 5
const numbers = {
    key1: {
        keyin1: 1,
        keyin2: 2,
        keyin3: 3,
    },
    key2: {
        keyin1: 4,
        keyin2: 5,
        keyin3: 6,
    },
}

const keyName = Object.keys(numbers);
let sum = 0;
for (let key of keyName) {
    let values = Object.values(numbers[key]);
    sum += values.reduce((intermidiate, value) =>
        intermidiate + value);
}

console.log(sum);

// Задача 6
const getMonth = (months, language, month) => {
    let monthName = Object.values(months[language]);
    for (let i = 0; i <= monthName.length; i++) {
        if (month === i) {
            alert(monthName[i - 1]);
            break;
        }
    }
}

const months = {
    ru: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь',],
    en: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'septemper', 'october', 'november', 'december',],
}

let language = prompt("Введите ru или en");
language = language.toLowerCase();
let month = prompt("Введите номер месяца, который вы хотите вывести");
month = Number(month);

getMonth(months, language, month);


