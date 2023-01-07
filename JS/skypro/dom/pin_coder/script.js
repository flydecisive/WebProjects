const form = document.querySelector('.form');
const symbols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const pinArr = [];

if (localStorage.getItem('pincode') === null) {
    createInputTemplate(form);
    const inputContainer = document.querySelector('.input-container');
    errorMessageTemplate(inputContainer);
    form.addEventListener('input', onCheckInput);
    form.addEventListener('submit', takeValue);

} else {
    console.log(localStorage.getItem('pincode'));
    enterInputTemplate(form);
    const enterButton = form.querySelector('.enter-button');
    const resetButton = form.querySelector('.reset-button');
    const inputContainer = document.querySelector('.input-container_pin');
    const inputs = inputContainer.querySelectorAll('.input-digit');

    document.addEventListener('paste', function (e) {
        if (e.target.type === "text") {
            let data = e.clipboardData.getData('Text');
            data = data.split('');
            [].forEach.call(document.querySelectorAll("input[type=text]"), (node, index) => {
                node.value = data[index];
                pinArr.push(node.value);
            });
        }
    });

    form.addEventListener('change', getPin(inputs, pinArr));

    const congratMessage = document.createElement('p');
    congratMessage.classList.add('congrat-message');
    resetButton.addEventListener('click', function () {
        delete localStorage.pincode;
        form.submit();
    });

    enterButton.addEventListener('click', function () {
        if (pinArr.length > inputs.length) {
            pinArr.pop();
        }
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            if (!(pinArr.length < inputs.length)) {
                const enterPin = pinArr.join('');
                const userPin = localStorage.getItem('pincode');

                if (userPin === enterPin) {
                    if (congratMessage.textContent !== '') {
                        congratMessage.remove();
                    }
                    congratMessage.textContent = 'Пин-код введен верно';
                    congratMessage.setAttribute('style', 'color: green');
                } else {
                    if (congratMessage.textContent !== '') {
                        congratMessage.remove();
                    }
                    congratMessage.textContent = 'Пин-код введен не верно';
                    congratMessage.setAttribute('style', 'color: red');
                }
                form.insertBefore(congratMessage, enterButton);
            }
        });
    });
}

function createInputTemplate(form) {
    const header = document.createElement('h2');
    header.classList.add('header');
    header.textContent = 'Страница создания пинкода';
    form.appendChild(header);
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');
    form.appendChild(inputContainer);
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('maxlength', '12');
    input.classList.add('input');
    inputContainer.appendChild(input);
    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Сохранить';
    form.appendChild(button);
}

function errorMessageTemplate(inputContainer) {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.classList.add('hidden');
    errorMessage.textContent = 'Вводить можно только цифры';
    inputContainer.appendChild(errorMessage);
}

const errorMessage = form.querySelector('.error-message');
const input = form.querySelector('.input');
const button = form.querySelector('.button');

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

function enterInputTemplate(form) {
    const header = document.createElement('h2');
    header.classList.add('header');
    header.textContent = 'Страница ввода пинкода';
    form.appendChild(header);
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container_pin');
    form.appendChild(inputContainer);
    for (let i = 0; i < localStorage.getItem('pincode').length; i++) {
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('maxlength', '1');
        input.classList.add('input-digit');
        inputContainer.appendChild(input);
    }
    const enterButton = document.createElement('button');
    enterButton.classList.add('enter-button');
    enterButton.textContent = 'Войти';
    form.appendChild(enterButton);
    const resetButton = document.createElement('button');
    resetButton.classList.add('reset-button');
    resetButton.textContent = 'Сбросить пинкод';
    form.appendChild(resetButton);
}

function getPin(inputs, pinArr) {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', function (event) {
            pinArr.push(event.target.value);
            if (!(i === inputs.length - 1)) {
                inputs[i + 1].focus();
            }
        });
    }
}

function getPastePin(inputs, pinArr) {
    inputs.forEach(input => {
        pinArr.push(input.value);
    });
}

function takeValue(event) {
    event.preventDefault();
    localStorage.setItem('pincode', input.value);
    form.submit();
}



