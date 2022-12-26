document.addEventListener('DOMContentLoaded', function () {
    let element = document.querySelector(".input");
    element.addEventListener("focus", function () {
        element.addEventListener("keyup", function (event) {
            let next = element.nextElementSibling;
            let previous = element.previousElementSibling;
            if (next !== null && event.keyCode === 39) {
                if (next.tagName !== "SCRIPT") {
                    next.remove();
                }
            }
            if (previous !== null && event.keyCode === 37) {
                previous.remove();
            }
        })
    })
}); 