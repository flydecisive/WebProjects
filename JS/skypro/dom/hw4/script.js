const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.button');

count = 0;

button.onclick = function () {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.toLowerCase() === 'пожалуйста') {
            count += 1;
            if (count >= 3) {
                for (let input of inputs) {
                    input.value = '';
                }
            }
        }
        if (!inputs[i].value) {
            count = 0;
        }
    }
}
