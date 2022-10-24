// Задача 1
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}

const values = Object.values(numbers);
const result = values.filter(item => item >= 3);
for (let item of result) {
    console.log(item);
}

// Задача 2
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
console.log(`${day} - ${month} - ${year}`);

