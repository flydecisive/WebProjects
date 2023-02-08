const backURL = 'https://skypro-rock-scissors-paper.herokuapp.com/';

document.addEventListener('DOMContentLoaded', function () {
    if (window.application.token === undefined) {
        window.application.blocks['user-name'] = renderTextField;
        window.application.blocks['login-button'] = renderLoginButton;
        window.application.screens['login-screen'] = renderLoginScreen;
        window.application.renderScreen('login-screen');
    }
})

function renderStartButton(container) {
    const button = document.createElement('button');
    button.classList.add('start-button');
    button.setAttribute('type', 'submit');
    button.textContent = 'Старт';

    button.addEventListener('click', function () {
        request({
            url: `${backURL}start`,
            params: { token: `${window.application.token}` },
            onSuccess: (data) => {
                if (data['player-status'].status === 'game') {
                    window.application.gameId = data['player-status'].game.id;
                    window.application.blocks['waiting-game'] = renderWaitingBlock;
                    window.application.screens['waiting-screen'] = renderWaitingScreen;
                    window.application.renderScreen('waiting-screen');
                }
            }
        });
    });

    container.appendChild(button);
}

function renderWaitingBlock(container) {
    const text = document.createElement('p');
    container.appendChild(text);
    const waitingTimer = setInterval(function () {
        request({
            url: `${backURL}game-status`,
            params: {
                token: `${window.application.token}`,
                id: `${window.application.gameId}`,
            },
            onSuccess: (data) => {
                if (data['game-status'].status !== 'waiting-for-start') {
                    window.application.blocks['rock'] = renderRockButton;
                    window.application.blocks['paper'] = renderPaperButton;
                    window.application.blocks['scissor'] = renderScissorButton;
                    window.application.screens['game-screen'] = renderGameScreen;
                    window.application.renderScreen('game-screen');
                }
            }
        });
    }, 500);
    window.application.timers.push(waitingTimer);
}

function renderRockButton(container) {
    const button = document.createElement('button');
    button.textContent = 'камень';

    button.addEventListener('click', function () {

    });

    container.appendChild(button);
}

function renderPaperButton(container) {
    const button = document.createElement('button');
    button.textContent = 'бумага';

    button.addEventListener('click', function () {

    });

    container.appendChild(button);
}

function renderScissorButton(container) {
    const button = document.createElement('button');
    button.textContent = 'ножницы';

    button.addEventListener('click', function () {

    });

    container.appendChild(button);
}

function renderGameScreen() {
    const app = document.querySelector('.app');
    app.textContent = '';

    const title = document.createElement('h1');
    title.textContent = 'Ход';

    app.appendChild(title);
    window.application.renderBlock('rock', app);
    window.application.renderBlock('paper', app);
    window.application.renderBlock('scissor', app);
}

function renderWaitingScreen() {
    const app = document.querySelector('.app');
    app.textContent = '';

    const title = document.createElement('h1');
    title.textContent = 'Ожидание игры';

    const content = document.createElement('div');

    window.application.renderBlock('waiting-game', content);

    app.appendChild(title);
    app.appendChild(content);
}

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

    button.addEventListener('click', () => {
        const input = document.querySelector('.input');
        request({
            url: `${backURL}login`,
            params: { login: input.value },
            onSuccess: (data) => {
                window.application.token = data.token;
                request({
                    url: `${backURL}player-status`,
                    params: { token: `${window.application.token}` },
                    onSuccess: (data) => {
                        if (data["player-status"].status === 'lobby') {
                            window.application.blocks['lobby-players'] = renderLobbyPlayers;
                            window.application.blocks['start-button'] = renderStartButton;
                            window.application.screens['lobby-screen'] = renderLobbyScreen;
                            window.application.renderScreen('lobby-screen');
                        } else {
                            window.application.blocks['rock'] = renderRockButton;
                            window.application.blocks['paper'] = renderPaperButton;
                            window.application.blocks['scissor'] = renderScissorButton;
                            window.application.screens['game-screen'] = renderGameScreen;
                            window.application.renderScreen('game-screen');
                        }
                    }
                })
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
    content.classList.add('players');

    window.application.renderBlock('lobby-players', content);

    app.appendChild(title);
    app.appendChild(content);
    window.application.renderBlock('start-button', app);
}

function renderLobbyPlayers(container) {
    for (let i = 1; i <= 3; i++) {
        const player = document.createElement('p');
        player.classList.add('player');
        container.appendChild(player);
    }
    const lobbyTimer = setInterval(function () {
        request({
            url: `${backURL}player-list`,
            params: { token: `${window.application.token}` },
            onSuccess: (data) => {
                const players = document.querySelectorAll('.player');
                for (let i = 0; i < 3; i++) {
                    if (data.list[data.list.length - (i + 1)] === undefined) {
                        players[i].textContent = 'Нет игрока';
                    } else {
                        players[i].textContent = data.list[data.list.length - (i + 1)].login;
                    }
                }
            }
        });
    }, 1000)
    window.application.timers.push(lobbyTimer);
}