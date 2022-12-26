document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const button = form.querySelector('.button');
    const container = form.querySelector('.form__container');
    const checkbox = container.querySelector('.form__subscribe');
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error__message');
    errorMessage.textContent = "Для отправки необходимо подписаться на рассылку";

    function checkboxChecked(event) {
        if (event.target.checked) {
            container.classList.remove('error');
            errorMessage.remove();
        } else {
            container.classList.add('error');
            form.appendChild(errorMessage);
        }
    }

    checkbox.addEventListener('input', checkboxChecked);

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (checkbox.checked) {
            form.submit();
        } else {
            container.classList.add('error');
            form.appendChild(errorMessage);
        }
    });
});