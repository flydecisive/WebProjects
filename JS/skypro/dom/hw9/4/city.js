document.addEventListener('DOMContentLoaded', function () {
    const url = window.location.href;
    let index = 0;
    const header = document.createElement('h1');
    const container = document.querySelector('.container');
    for (let i = 0; i < url.length; i++) {
        if (url[i] === "=") {
            index = i + 1;
            break;
        }
    }
    const city = url.slice(index);
    console.log(city);
    header.textContent = `Еду в ${city}`;
    container.appendChild(header);
})