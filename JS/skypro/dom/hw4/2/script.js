const searchableElem = document.querySelector('.iknowwhereyoulive');

searchableElem.onclick = function () {
    let parent = searchableElem.parentElement;
    const pathElem = [];
    pathElem.unshift(parent.tagName.toLowerCase());
    while (parent) {
        parent = parent.parentElement;
        if (parent === null) {
            pathElem.push(searchableElem.tagName.toLowerCase());
            break;
        }
        pathElem.unshift(parent.tagName.toLowerCase());
    }
    const path = pathElem.join(' > ');

    console.log(path);
}


