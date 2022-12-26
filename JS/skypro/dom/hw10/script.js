function starColoring(stars) {
    const value = localStorage.getItem('rate');
    stars.forEach((star) => {
        star.classList.remove('fa-star-yellow');
    });
    for (let i = 0; i < value; i++) {
        stars[i].classList.add('fa-star-yellow');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    localStorage.setItem('rate', 0);
    const form = document.querySelector('.form');
    const rateContainer = form.querySelector('.form__rate');
    const stars = rateContainer.querySelectorAll('.fa-star');
    const comment = form.querySelector('.form__comment');

    stars.forEach((star) => {
        star.addEventListener('click', function (event) {
            localStorage.setItem('rate', event.target.dataset.num);
            starColoring(stars);
        });
    })

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const rate = localStorage.getItem('rate');
        if (comment.validity.valid === true && rate >= 1) {
            const result = {
                'rating': localStorage.getItem('rate'),
                [comment.name]: comment.value,
            }
            console.log(result);
            // form.submit();
        }
    });

});