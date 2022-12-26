document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const radioButtons = form.querySelectorAll('.form__radio');

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        radioButtons.forEach((button) => {

            if (button.value === "man" && button.checked) {
                form.submit();
                alert("Мужчинам вход запрещен");
            } else if (button.value === "woman" && button.checked) {
                form.submit();
                alert("Женщинам вход запрещен");
            }
        })
    })
});