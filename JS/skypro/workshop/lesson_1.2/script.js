const letters = 'qwertyuiopasdfghjklzxczvbnm';
const data = letters.split('');
let resultArr = [];
let count = 0;

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const input = form.querySelector('.input');
    const button = form.querySelector('.button');
    input.addEventListener('input', function () {
        let arr = input.value.split('');
        data.forEach(item => {
            if (arr[arr.length - 1] === item) {
                resultArr.push(arr[arr.length - 1]);
            }
        });
        input.value = resultArr.join('');
    });
    button.addEventListener('click', function (event) {
        event.preventDefault();
        count += 1;
        createText(form);
        let selector = `.text-${count}`;
        const text = form.querySelector(selector);
        text.textContent = resultArr.join('');
        input.value = '';
        resultArr = [];
    });
});

function createText(form) {
    const text = document.createElement('p');
    text.classList.add('text');
    text.classList.add(`text-${count}`);
    form.appendChild(text);
}