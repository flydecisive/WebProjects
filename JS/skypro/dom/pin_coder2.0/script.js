const symbols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const pinArr = [];
const form = document.querySelector('.form');
const input = form.querySelector('.input');
const errorMessage = form.querySelector('.error-message');
const submitButton = document.querySelector('.submit-button');
const saveButton = document.querySelector('.save-button');
const resetButton = document.querySelector('.reset-button');
const pinEnterContainer = document.querySelector('.pin-enter_container');

document.addEventListener('DOMContentLoaded', function () {
    form.addEventListener('input', onCheckInput);
    form.addEventListener('submit', takeValue);
    submitButton.addEventListener('click', function () {
        const userPin = localStorage.getItem('pincode');
        const enterPin = localStorage.getItem('enterPin');
        if (enterPin === userPin) {
            vNotify.success({ text: 'Пароль введен успешно', title: 'Поздравляем' });
        } else {
            vNotify.error({ text: 'Введен не верный пароль', title: 'Сожалеем' });
        }
    });

    resetButton.addEventListener('click', function () {
        delete localStorage.pincode;
        delete localStorage.enterPin;
        submitButton.classList.add('hidden');
        resetButton.classList.add('hidden');
        form.classList.remove('hidden');
        pinEnterContainer.classList.add('hidden');
    });

    // const blocks = document.querySelectorAll('#demo>input');
    // blocks[0].addEventListener('paste', (event) => {
    //     blocks[0].value = 1;
    // });

});

function onCheckInput() {
    let arr = input.value.split('');
    arr.forEach(value => {
        if (value in symbols) {
            errorMessage.classList.add('hidden');
        }
        if (!(value in symbols)) {
            arr.pop();
            errorMessage.classList.remove('hidden');
        }
    });
    input.value = arr.join('');
}

function takeValue(event) {
    event.preventDefault();
    console.log(event.target);
    localStorage.setItem('pincode', input.value);
    form.submit();
}

