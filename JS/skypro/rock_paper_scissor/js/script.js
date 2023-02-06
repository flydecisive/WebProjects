const backURL = 'https://skypro-rock-scissors-paper.herokuapp.com/';

document.addEventListener('DOMContentLoaded', function () {
    if (window.application.token === undefined) {
        window.application.blocks['user-name'] = renderTextField;
        window.application.blocks['login-button'] = renderLoginButton;
        window.application.screens['login-screen'] = renderLoginScreen;
        window.application.renderScreen('login-screen');
    }

    const button = document.querySelector('.login-button');
    button.addEventListener('click', () => {
        // request({
        //     url: `${backURL}player-status`,
        //     params: { token: `${window.application.token}` },
        //     onSuccess: (data) => {
        //         window.application.blocks['lobby-players'] = renderLobbyPlayers;
        //         window.application.screens['lobby-screen'] = renderLobbyScreen;
        //         window.application.renderScreen('lobby-screen');
        //     }
        // })
        window.application.blocks['lobby-players'] = renderLobbyPlayers;
        window.application.screens['lobby-screen'] = renderLobbyScreen;
        window.application.renderScreen('lobby-screen');
    })
})

function renderTextField(container) {
    const field = document.createElement('input');
    field.setAttribute('type', 'text');
    field.classList.add('input');

    field.addEventListener('input', () => {
        console.log(field.value);
    });

    container.appendChild(field);
}

function renderLoginButton(container) {
    const button = document.createElement('button');
    button.classList.add('login-button');
    button.setAttribute('type', 'submit');
    button.textContent = 'Войти';

    button.addEventListener('submit', () => {
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

function renderLobbyScreen() {
    const app = document.querySelector('.app');
    app.textContent = '';

    const title = document.createElement('h1');
    title.textContent = 'Лобби';

    const content = document.createElement('div');

    window.application.renderBlock('lobby-players', content);

    app.appendChild(title);
    app.appendChild(content);
}

function renderLobbyPlayers(container) {
    if (!(document.body.contains(document.querySelector('.player')))) {
        for (let i = 1; i <= 3; i++) {
            const player = document.createElement('p');
            player.classList.add('player');
            player.setAttribute('data-player', `${i}`);
            container.appendChild(player);
        }
    }

    request({
        url: `${backURL}player-list`,
        params: { token: window.application.token },
        onSuccess: (data) => {
            const players = document.querySelectorAll('.player');
            players.forEach((player) => {
                if (data.list[player.dataset.player] === undefined) {
                    player.textContent = 'Нет игрока';
                } else {
                    // if (data.list[player.dataset.player].you === true) {
                    //     console.log(data.list[player.dataset.player].login);
                    // }
                    player.textContent = data.list[player.dataset.player].login;
                }
            })
        }
    });
}

