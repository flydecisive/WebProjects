const backURL = 'https://skypro-rock-scissors-paper.herokuapp.com/';

document.addEventListener('DOMContentLoaded', function () {
    if (window.application.token === undefined) {
        window.application.blocks['user-name'] = renderTextField;
        window.application.blocks['login-button'] = renderLoginButton;
        window.application.screens['login-screen'] = renderLoginScreen;
        window.application.renderScreen('login-screen');
    }
})

// логин
// отрисовка поля ввода логина
function renderTextField(container) {
    const field = document.createElement('input');
    field.setAttribute('type', 'text');
    field.setAttribute('placeholder', 'Введите никнейм');
    field.classList.add('input');

    field.addEventListener('input', () => {
        console.log(field.value);
    });

    container.appendChild(field);
}

// отрисовка кнопки войти
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
                            window.application.blocks['move_buttons'] = renderMoveButtonsBlock;
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

// отрисовка экрана входа
function renderLoginScreen() {
    const app = document.querySelector('.app');
    app.textContent = '';

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Страница входа';

    const content = document.createElement('div');
    content.classList.add('content');

    window.application.renderBlock('user-name', content);
    window.application.renderBlock('login-button', content);

    app.appendChild(title);
    app.appendChild(content);
}

// лобби
// отрисовка игроков в лобби
function renderLobbyPlayers(container) {
    for (let i = 1; i <= 3; i++) {
        const player = document.createElement('div');
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
                    if (players[i]) {
                        if (data.list[data.list.length - (i + 1)] === undefined) {
                            players[i].textContent = 'Нет игрока';
                        } else {
                            players[i].textContent = data.list[data.list.length - (i + 1)].login;
                        }
                    }
                }
            }
        });
    }, 1000)
    window.application.timers.push(lobbyTimer);
}

// отрисовка кнопки начать
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

// отрисовка экрана лобби
function renderLobbyScreen() {
    const app = document.querySelector('.app');
    app.textContent = '';

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Лобби';

    const content = document.createElement('div');
    content.classList.add('players');

    window.application.renderBlock('lobby-players', content);

    app.appendChild(title);
    app.appendChild(content);
    window.application.renderBlock('start-button', app);
}

// Ожидание игры
// отрисовка экрана ожидания соперника
function renderWaitingBlock(container) {
    const text = document.createElement('p');
    text.classList.add('text');
    text.textContent = 'Ожидаем подключение соперника...';

    const img = document.createElement('img');
    img.src = 'img/load.png';

    container.appendChild(img);
    container.appendChild(text);
    const waitingTimer = setInterval(function () {
        request({
            url: `${backURL}game-status`,
            params: {
                token: window.application.token,
                id: window.application.gameId,
            },
            onSuccess: (data) => {
                if (data['game-status'].status !== 'waiting-for-start') {
                    window.application.blocks['move_buttons'] = renderMoveButtonsBlock;
                    window.application.screens['game-screen'] = renderGameScreen;
                    window.application.renderScreen('game-screen');
                }
            }
        });
    }, 500);
    window.application.timers.push(waitingTimer);
}

// отрисовка экрана ожидания соперника
function renderWaitingScreen() {
    const app = document.querySelector('.app');
    app.textContent = '';

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Ожидание игры';

    const content = document.createElement('div');

    window.application.renderBlock('waiting-game', content);

    app.appendChild(title);
    app.appendChild(content);
}

// ход
// отрисовка кнопок хода
function renderMoveButtonsBlock(container) {
    const button_rock = document.createElement('button');
    button_rock.classList.add('move_button');
    button_rock.textContent = 'камень';
    button_rock.setAttribute('data-move', 'rock');

    const button_paper = document.createElement('button');
    button_paper.classList.add('move_button');
    button_paper.textContent = 'бумага';
    button_paper.setAttribute('data-move', 'paper');

    const button_scissors = document.createElement('button');
    button_scissors.classList.add('move_button');
    button_scissors.textContent = 'ножницы';
    button_scissors.setAttribute('data-move', 'scissors');

    const enemy = document.createElement('p');
    request({
        url: `${backURL}game-status`,
        params: {
            token: window.application.token,
            id: window.application.gameId,
        },
        onSuccess: (data) => {
            if (data['game-status']) {
                enemy.textContent = `Вы против ${data['game-status'].enemy.login}`;
            }
        }
    });
    enemy.classList.add('text');

    container.appendChild(enemy);

    container.appendChild(button_rock);
    container.appendChild(button_paper);
    container.appendChild(button_scissors);

    const buttons = document.querySelectorAll('.move_button');
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            request({
                url: `${backURL}play`,
                params: {
                    token: window.application.token,
                    id: window.application.gameId,
                    move: event.target.dataset.move,
                },
                onSuccess: (data) => {
                    if (data['game-status'].status === 'waiting-for-enemy-move') {
                        window.application.blocks['wait-move-block'] = renderWaitMoveBlock;
                        window.application.screens['wait-move-screen'] = renderWaitMoveScreen;
                        window.application.renderScreen('wait-move-screen');
                    } else if (data['game-status'].status === "win") {
                        window.application.blocks['win-block'] = renderWinBlock;
                        window.application.blocks['go-to-lobby'] = renderGoToLobbyBlock;
                        window.application.screens['win-screen'] = renderWinScreen;
                        window.application.renderScreen('win-screen');
                    } else if (data['game-status'].status === "lose") {
                        window.application.blocks['lose-block'] = renderLoseBlock;
                        window.application.blocks['go-to-lobby'] = renderGoToLobbyBlock;
                        window.application.screens['lose-screen'] = renderLoseScreen;
                        window.application.renderScreen('lose-screen');
                    }
                }
            })
        });
    });
}

// отрисовка экрана игры
function renderGameScreen() {
    const app = document.querySelector('.app');
    app.textContent = '';

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Игра';

    app.appendChild(title);
    window.application.blocks['move_buttons'] = renderMoveButtonsBlock;
    window.application.renderBlock('move_buttons', app);
}


// рэндер блока ожидания хода
function renderWaitMoveBlock(container) {
    const text = document.createElement('p');
    text.textContent = 'Ожидание хода соперника';

    const img = document.createElement('img');
    img.src = 'img/load.png';

    container.appendChild(text);
    container.appendChild(img);

    const waitMove = setInterval(function () {
        request({
            url: `${backURL}game-status`,
            params: {
                token: window.application.token,
                id: window.application.gameId,
            },
            onSuccess: (data) => {
                if (data["game-status"].status === 'win') {
                    window.application.blocks['win-block'] = renderWinBlock;
                    window.application.blocks['go-to-lobby'] = renderGoToLobbyBlock;
                    window.application.screens['win-screen'] = renderWinScreen;
                    window.application.renderScreen('win-screen');
                } else if (data["game-status"].status === 'lose') {
                    window.application.blocks['lose-block'] = renderLoseBlock;
                    window.application.blocks['go-to-lobby'] = renderGoToLobbyBlock;
                    window.application.screens['lose-screen'] = renderLoseScreen;
                    window.application.renderScreen('lose-screen');
                } else if (data["game-status"].status === 'waiting-for-your-move') {
                    window.application.blocks['move_buttons'] = renderMoveButtonsBlock;
                    window.application.screens['game-screen'] = renderGameScreen;
                    window.application.renderScreen('game-screen');
                } else if (data["game-status"].status === 'waiting-for-enemy-move') {
                    window.application.blocks['wait-move-block'] = renderWaitMoveBlock;
                    window.application.screens['wait-move-screen'] = renderWaitMoveScreen;
                    window.application.renderScreen('wait-move-screen');
                }
            }
        })
    }, 500);
    window.application.timers.push(waitMove);
}

// отрисовка экрана ожидания
function renderWaitMoveScreen() {
    const app = document.querySelector('.app');
    app.textContent = '';

    const title = document.createElement('h1');
    title.textContent = 'Ожидание соперника';

    app.appendChild(title);
    window.application.renderBlock('wait-move-block', app);
}

// победа
// отрисовка блока победы
function renderWinBlock(container) {
    const text = document.createElement('p');
    text.classList.add('text');
    text.textContent = 'Поздравляем с победой';

    const img = document.createElement('img');
    img.src = 'img/homer.png';

    container.appendChild(text);
    container.appendChild(img);
}

// отрисовка экрана победы
function renderWinScreen() {
    const app = document.querySelector('.app');
    app.textContent = '';

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Победа';

    app.appendChild(title);
    window.application.renderBlock('win-block', app);
    window.application.renderBlock('go-to-lobby', app);
    window.application.renderBlock('start-button', app);
}

// поражение
// Отрисовка блока поражения
function renderLoseBlock(container) {
    const text = document.createElement('p');
    text.classList.add('text');
    text.textContent = 'Вы проиграли';

    const img = document.createElement('img');
    img.src = 'img/bart.png';

    container.appendChild(text);
    container.appendChild(img);
}

// отрисовка экрана поражения
function renderLoseScreen() {
    const app = document.querySelector('.app');
    app.textContent = '';

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Поражение';

    app.appendChild(title);
    window.application.renderBlock('lose-block', app);
    window.application.renderBlock('go-to-lobby', app);
    window.application.renderBlock('start-button', app);
}


// отрисовка кнопки перехода в лобби
function renderGoToLobbyBlock(container) {
    const button = document.createElement('button');
    button.classList.add('lobby-button');
    button.textContent = 'Перейти в лобби';

    button.addEventListener('click', function () {
        window.application.gameId = null;
        request({
            url: `${backURL}player-status`,
            params: { token: `${window.application.token}` },
            onSuccess: (data) => {
                console.log(data);
                if (data["player-status"].status === 'lobby') {
                    window.application.renderScreen('lobby-screen');
                }
            }
        });
        // window.application.renderScreen('lobby-screen');
    });

    container.appendChild(button);
}













