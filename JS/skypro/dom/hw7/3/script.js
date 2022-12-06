const button = document.querySelector(".button");
button.style.opacity = 1;
const maxOpacity = 0.125;

button.onclick = function (event) {
    let opacity = Number(event.target.style.opacity);
    opacity /= 2;
    event.target.style.opacity = opacity;
    console.log(opacity);
    if (opacity <= maxOpacity) {
        event.target.disabled = true;
    }
}