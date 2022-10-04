// Задача 8
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задача 9
let var_1 = '1';
let var_2 = '2';
alert(var_1 + var_2);

// Задача 10
let variable_1 = '5';
let variable_2 = '6';
let sum = Number(variable_1) + Number(variable_2);
alert(`${sum}px`);

// Задача 11
let age = Number(prompt('Сколько вам лет?'));
alert(`Через 1 год вам будет ${++age} лет`);

// Задача 12
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

// Задача 13
let userName = prompt('Как вас ховут?');
alert(`Привет, ${userName}!`);

// Задача 14
let salary = Number(prompt('Сколько вы зарабатываете?'));
let prize = salary / 100 * 20;
let tax = (salary + prize) / 100 * 13;
let income = salary + prize - tax;
let budgetForDay = income / 30;
alert(`Премия: ${prize}`);
alert(`Подоходний налог: ${tax}`);
alert(`Доход после вычета налога: ${income}`);
alert(`Бюджет на день: ${budgetForDay}`);
