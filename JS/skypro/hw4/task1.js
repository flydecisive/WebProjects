// Задача 1
let arr = [1, 5, 4, 10, 0, 3];
for (let item of arr) {
    if (item === 10) {
        console.log(item);
        break;
    } else {
        continue;
    }
}

// Задача 2
let position = arr.indexOf(4);
console.log(position);

// Задача 3
let arr2 = [1, 3, 5, 10, 20];
let newArr2 = arr2.join(' ');
console.log(newArr2);

// Задача 4
let randomArr = [];
for (let i = 0; i < 10; i++) {
    randomArr.push(Math.floor(Math.random() * 11))
}

let evenValues = [];
for (let element of randomArr) {
    if (element % 2 === 0) {
        evenValues.push(element);
    }
}

console.log(randomArr);
console.log(evenValues);

// Задача 5
let multArr = [];
for (let i = 0; i < 3; i++) {
    multArr[i] = [];
    for (let j = 0; j < 3; j++) {
        multArr[i][j] = Math.floor(Math.random() * 11);
    }
}

console.log(multArr);

// Задача 6
let Arr3 = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    Arr3.push(2);
}

console.log(Arr3);

// Задача 7
let Arr4 = [9, 8, 7, 'a', 6, 5];
Arr4.sort();
Arr4.pop();

console.log(Arr4);

// Задача 8
let Arr5 = [9, 8, 7, 6, 5];
let userNumber = Number(prompt('Введите число от 1 до 10'));
if (Arr5.includes(userNumber)) {
    console.log('Число содержится в массиве');
} else {
    console.log('Число не содержится в массиве');
}

// Задача 9
let taskString = 'abcdef';
let Arr7 = [];
for (let element of taskString) {
    Arr7.unshift(element);
}

console.log(Arr7.join(''));

// Задача 10
let Arr8 = [];
for (let i = 0; i < 6; i++) {
    Arr8.push(Math.floor(Math.random() * 10 + 1));
}

let sum = 0;
for (let element of Arr8) {
    sum += element;
}

let average = sum / Arr8.length;
console.log(average);

// Задача 11
let Arr9 = [[1, 2, 3,], [4, 5, 6]];
let newArr9 = [];
for (let arr of Arr9) {
    for (let element of arr) {
        newArr9.push(element);
    }
}

console.log(newArr9);

// Задача 12
let Arr10 = [];
for (let i = 0; i < Math.floor(Math.random() * 10 + 1); i++) {
    Arr10.push(Math.floor(Math.random() * 10 + 1));
}

for (let i = 0; i < Arr10.length; i++) {
    if (i === Arr10.length - 1) {
        console.log(Arr10[i]);
    } else {
        let sum = Arr10[i] + Arr10[i + 1];
        console.log(sum);
    }
}

// Задача 14
let twoRankN = (n) => {
    if (n === 1) {
        return 2 ** n;
    } else if (n === 0) {
        return 1;
    } else {
        return 2 ** (n - 1) * 2;
    }
}

let n = Math.floor(Math.random() * 10);

console.log(`2 в степени ${n} = ${twoRankN(n)}`);
