document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector(".login__form");
    const loginInput = form.querySelector(".login");
    const passwordInput = form.querySelector(".password");

    form.addEventListener('submit', function (event) {
        if (!(loginInput.value && passwordInput.value)) {
            event.preventDefault();
            if (loginInput.value === '') {
                loginInput.classList.add("error");
            }

            if (passwordInput.value === '') {
                passwordInput.classList.add("error");
            }
        }
    });
});