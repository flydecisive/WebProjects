document.addEventListener('DOMContentLoaded', function () {
    let element = document.querySelector(".input");
    element.addEventListener("focus", function () {
        element.addEventListener("keyup", function (event) {
            let next = element.nextElementSibling;
            let previous = element.previousElementSibling;
            if (next !== null && event.keyCode === 39) {
                event.target.value = next.textContent;
                if (next.tagName !== "SCRIPT") {
                    next.remove();
                }
            }
            if (previous !== null && event.keyCode === 37) {
                event.target.value = previous.textContent;
                if (previous.tagName !== "BODY") {
                    previous.remove();
                }
            }
        })
    })
}); 