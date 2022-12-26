document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const select = form.querySelector('.form-select');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (select.value === "CC") {
            select.classList.add('error');
        } else {
            form.submit();
        }
    })
});