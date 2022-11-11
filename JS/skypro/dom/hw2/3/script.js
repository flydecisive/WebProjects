const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

let baseRed = 0;
let baseGreen = 0;
let baseBlue = 0;

const changeBtn1 = function () {
    if (baseRed < 153) {
        baseRed += 17;
    }
    let color = `rgb(${baseRed}, 0, 0)`;
    return color;
}

const changeBtn2 = function () {
    if (baseGreen < 153) {
        baseGreen += 17;
    }
    let color = `rgb(${baseGreen / 2}, ${baseGreen}, 0)`;
    return color;
}

const changeBtn3 = function () {
    if (baseBlue < 153) {
        baseBlue += 17;
    }
    let color = `rgb(0, 0, ${baseBlue})`;
    return color;
}

btn1.onclick = function () {
    btn1.style.backgroundColor = changeBtn1();
}

btn2.onclick = function () {
    btn2.style.backgroundColor = changeBtn2();
}

btn3.onclick = function () {
    btn3.style.backgroundColor = changeBtn3();
}