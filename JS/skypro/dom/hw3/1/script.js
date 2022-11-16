const bingo = document.getElementsByClassName('bingo')[0];

function changeBg() {
    const symbols = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}

function setBg() {
    bingo.style.background = changeBg();
}



let timer = setInterval(() => setBg(), 100);

bingo.onclick = function () {
    clearInterval(timer);
    const text = document.getElementsByClassName('hide')[0];
    text.classList.remove('hide');
    text.classList.add('text');
    text.textContent = changeBg();
}