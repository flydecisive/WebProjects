const button = document.getElementsByClassName('button')[0];

function resetClicks() {
    button.dataset.clicks = 0;
}

function deleteItem() {
    clicks.shift();
}

function buttonClickHandler() {
    let clicks = +button.dataset.clicks;
    clicks += 1;
    button.dataset.clicks = clicks;
}

const clicks = [];
button.onclick = function () {
    let date = new Date();
    let seconds = date.getSeconds();
    seconds = parseInt(seconds);
    buttonClickHandler();
    clicks.push(seconds);
    if (clicks.length > 2) {
        deleteItem();
        let deltaTime = parseInt(clicks[0]) - parseInt(clicks[1]);

        if (deltaTime === 0) {
            resetClicks();
        }
    }
}


