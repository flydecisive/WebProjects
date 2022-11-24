const input = document.querySelector('.input');
let parentName = input.parentElement.tagName;
let parent = input.parentElement;
let form;

input.onclick = function () {
    if (parentName === 'FORM') {
        form = parent;
    } else {
        while (true) {
            if (parentName === 'FORM') {
                parent = parent.parentElement;
                break;
            }
            parentName = parent.parentElement.tagName;
        }
        form = parent;
    }

    const childrens = form.elements;
    const textValues = [];

    for (let i = 0; i < childrens.length; i++) {
        if (childrens[i].className === 'input') {
            continue;
        }
        textValues.push(childrens[i].value);
    }

    input.value = textValues.join('');
}



