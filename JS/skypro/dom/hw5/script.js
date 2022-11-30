const preloader = document.querySelector('.preloader');


function createImage() {
    const img = document.createElement('img');
    img.classList.add('img');
    img.src = "https://www.rondreizennoordamerika.nl/wp-content/uploads/2020/02/Valley-of-Fire-20190222-5N6A0728_1.jpg";
    return img;
}

function imgClickHandler(img) {
    const data = img.src;
    localStorage.setItem('Link', data);
    console.log(data);
}

document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.querySelector('.preloader');
    const img = createImage();
    document.body.insertBefore(img, preloader);

    img.addEventListener("load", function () {
        preloader.remove();
    });

    img.addEventListener("click", imgClickHandler(img));
});

