let httpRegex = new RegExp(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/);

document.addEventListener('DOMContentLoaded', function () {
    let userUrl;
    const form = document.querySelector('.form');
    const button = form.querySelector('.button');
    const input = form.querySelector('.input');
    const request = new XMLHttpRequest();

    input.addEventListener('input', function () {
        if (checkUrlInput(input)) {
            userUrl = input.value;
            const errorMessage = document.querySelector('.error-message');

            if (errorMessage) {
                errorMessage.remove();
            }
        } else {
            if (!(document.querySelector('.error-message'))) {
                addErrorMessage(form, button);
            }
        }
    })

    button.addEventListener('click', function (event, userUrl) {
        event.preventDefault();
        const userResponse = `https://clck.ru/--?url=${userUrl}`;
        request.open('GET', userResponse, true);
        request.send(null);
    });

    request.onload = () => {
        const urlCopy = document.querySelector('.url-copy');
        if (!(urlCopy)) {
            createUrlCopyInput(request, form);
        }
        createCopyButton(form);
        const copyButton = document.querySelector('.copy-button');
        copyButton.addEventListener('click', function (event) {
            event.preventDefault();
            const urlCopy = document.querySelector('.url-copy');
            navigator.clipboard.writeText(urlCopy.value);
        });
    }
});

function checkUrlInput(input) {
    return httpRegex.test(input.value) ? true : false;
}

function addErrorMessage(form, button) {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Введен не валидный URL';
    form.insertBefore(errorMessage, button);
}

function createUrlCopyInput(request, form) {
    const urlCopy = document.createElement('input');
    urlCopy.setAttribute('type', 'text');
    urlCopy.classList.add('url-copy');
    urlCopy.value = request.responseText;
    form.appendChild(urlCopy);
}

function createCopyButton(form) {
    const copyButton = document.createElement('button');
    copyButton.classList.add('copy-button');
    copyButton.textContent = 'Копировать';
    form.appendChild(copyButton);
}