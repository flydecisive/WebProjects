const container = document.querySelector(".container");
const button = document.querySelector(".button");

document.addEventListener("click", function (event) {
    event.target.remove();
    const text = document.createElement("h1");
    text.classList.add("text");
    text.textContent = "Привет, пользователь!";
    container.appendChild(text);
});
