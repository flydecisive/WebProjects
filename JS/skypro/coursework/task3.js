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

