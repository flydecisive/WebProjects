const button = document.getElementById('btn');
const img = document.getElementById('img');

button.onclick = function () {
    button.classList.add('hide');
    img.classList.remove('hide');
    img.src = 'https://fydi.ru/wp-content/uploads/2021/08/koty-i-koshki-79.jpg';
}