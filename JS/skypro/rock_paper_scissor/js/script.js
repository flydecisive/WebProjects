const backURL = 'https://skypro-rock-scissors-paper.herokuapp.com/';

function renderTextField(container) {
    const field = document.createElement('input');
    field.setAttribute('type', 'text');
    field.classList.add('input');

    field.addEventListener('input', () => {
        console.log(field.value);
    });

    container.appendChild(field);
}

function renderButton(container) {
    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.textContent = 'Войти';

    button.addEventListener('click', () => {
        const input = document.querySelector('.input');
        request({
            url: `${backURL}login`,
            params: { login: input.value },
            onSuccess: (data) => {
                window.application.token = data.token;
            }
        })
    });

    container.appendChild(button);
}

function renderLoginScreen() {
    const app = document.querySelector('.app');
    app.textContent = '';

    const title = document.createElement('h1');
    title.textContent = 'Страница входа';

    const content = document.createElement('div');

    window.application.renderBlock('user-name', content);
    window.application.renderBlock('login-button', content);

    app.appendChild(title);
    app.appendChild(content);
}

window.application.blocks['user-name'] = renderTextField;
window.application.blocks['login-button'] = renderButton;
window.application.screens['login-screen'] = renderLoginScreen;
window.application.renderScreen('login-screen');

// request({
//     url: `${backURL}player-status?token=${window.application.token}`,
//     onSuccess: (data) => {
//         console.log(data);
//     }
// })