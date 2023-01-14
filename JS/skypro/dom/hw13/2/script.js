const noop = () => { };

function request({
    method = 'GET',
    url,
    type = 'json',
    onSuccess = noop,
    onError = noop,
}) {
    const req = new XMLHttpRequest();

    req.open(method, url, true);
    req.responseType = type;

    req.onload = function (event) {
        const target = event.target;

        if (target.status !== 200) {
            onError(target.statusText);

            return;
        }

        onSuccess(target.response);
    }

    req.onerror = function () {
        onError();
    }

    req.send();
}

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const heading = document.querySelector('.heading');
    const paragraph = document.querySelector('.paragraph');

    paragraph.addEventListener('click', function (event) {
        event.preventDefault();
        const targetHref = event.target.getAttribute('href');
        const dotIndex = targetHref.indexOf('.');
        request({
            url: `${targetHref.substring(0, dotIndex)}.json`,
            onSuccess: (data) => {
                header.innerHTML = data.title;
                heading.innerHTML = data.subtitle;
                paragraph.innerHTML = data.body;
            }
        })
    });

    request({
        url: 'index.json',
        onSuccess: (data) => {
            header.textContent = data.title;
            heading.textContent = data.subtitle;
            paragraph.innerHTML = data.body;
        }
    })
});

