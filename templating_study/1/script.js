// Генерация новых элеметов по клику по другому элементу
// Для каждого нового элемента задается рандомный цвет

function createNewElement() {
    const newElement = document.createElement('div');
    newElement.classList.add('element');
    return newElement;
}

function createElementColor() {
    const data = "012345678ABCDEFG";
    let result = '';
    while (result.length < 6) {
        result += data[Math.floor(Math.random() * 16)];
    }
    return '#' + result;
}

const container = document.querySelector('.container');
const firstElement = document.querySelector('.element');
firstElement.style.backgroundColor = createElementColor();

document.addEventListener("click", function () {
    const newElement = createNewElement();
    container.appendChild(newElement);
    const color = createElementColor();
    firstElement.dataset.clicks = Number(firstElement.dataset.clicks) + 1;
    newElement.dataset.clicks = 'р';
    newElement.style.backgroundColor = color;
});