document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.autorization');
    const button = form.querySelector('.button');
    const successMessage = form.querySelector('.success__message');
    const errorMessage = form.querySelector('.error__message');
    button.addEventListener('click', function (event) {
        event.preventDefault();
        request({
            url: 'api.json',
            onSuccess: (data) => {
                if (data.status === 'ok') {
                    successMessage.classList.remove('success__message-hidden');
                } else if (data.status === 'error') {
                    errorMessage.classList.remove('error__message-hidden');
                    errorMessage.textContent = 'Неверный логин или пароль';
                }
            },
            onError: () => {
                errorMessage.classList.remove('error__message-hidden');
                errorMessage.textContent = 'Проблемы на сервере';
            }
        })
    });
});

const noop = () => { };

function request({
    method = 'GET',
    url,
    type = 'json',
    onSuccess = noop,
    onError = noop,
}) {
    const req = new XMLHttpRequest();

    req.open(method, url, true);
    req.responseType = type;

    req.onload = function (event) {
        const target = event.target;

        if (target.status !== 200) {
            onError(target.statusText);

            return;
        }

        onSuccess(target.response);
    }

    req.onerror = function () {
        onError();
    }

    req.send();
}