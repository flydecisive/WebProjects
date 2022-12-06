const buttons = document.querySelectorAll(".button");

function clickButton(event) {
    const container = event.target.parentElement;
    event.target.remove();
    const text = document.createElement("h1");
    text.classList.add("text");
    text.textContent = "Привет, пользователь!";
    container.appendChild(text);
}
buttons.forEach((button) => {
    button.addEventListener("click", clickButton);
});
