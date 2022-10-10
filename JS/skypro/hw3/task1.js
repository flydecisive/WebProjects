// Задача 1
const arr = [];
let number;

arr[0] = number;

// Задача 2
for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

// Задача 3
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

// Задача 4
let j = 7;

do {
    console.log(j);
    j++;
} while (j < 23)

// Задача 5
const randomNumber = () => Math.floor(Math.random() * 10 + 1);

console.log(randomNumber());

// Задача 6
const numberList = (n) => {
    let i = 1;
    const arr = [];
    do {
        arr[i - 1] = i;
        i++;
    } while (i <= n)

    let sum = 0;

    arr.forEach(item => {
        sum += item;
    });

    console.log(sum);
}

numberList(Math.floor(Math.random() * 100 + 1));