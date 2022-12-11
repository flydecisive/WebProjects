const letters = ["а", "о", "у", "ы", "э", "е", "ё", "и", "ю", "я"];

document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".input");
    input.addEventListener("input", function (event) {
        let inputValue = event.target.value;
        inputValue = inputValue.toLowerCase();
        const inputArr = inputValue.split('');
        const resultArr = [];
        inputArr.forEach((value) => {
            letters.forEach((letter) => {
                if (value === letter) {
                    resultArr.push(value);
                }
            })
        })
        console.log(resultArr.join(''));
        event.target.value = resultArr.join('');
    });
});