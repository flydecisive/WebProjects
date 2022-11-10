const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

let baseRed = 0;
let baseGreen = 0;
let baseBlue = 0;

const changeBtn1 = () => {
    if (baseRed < 153) {
        baseRed += 17;
    }
    let color = `rgb(${baseRed}, 0, 0)`;
    return color;
}

const changeBtn2 = () => {
    if (baseGreen < 153) {
        baseGreen += 17;
    }
    let color = `rgb(${baseGreen / 2}, ${baseGreen}, 0)`;
    return color;
}

const changeBtn3 = () => {
    if (baseBlue < 153) {
        baseBlue += 17;
    }
    let color = `rgb(0, 0, ${baseBlue})`;
    return color;
}

btn1.onclick = () => {
    btn1.style.backgroundColor = changeBtn1();
}

btn2.onclick = () => {
    btn2.style.backgroundColor = changeBtn2();
}

btn3.onclick = () => {
    btn3.style.backgroundColor = changeBtn3();
}