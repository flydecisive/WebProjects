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

    request({
        url: 'index.json',
        onSuccess: (data) => {
            // header.textContent = data.title;
            // heading.textContent = data.subtitle;
            // paragraph.textContent = data.body;
            header.textContent = data.title;
            heading.textContent = data.subtitle;
            paragraph.textContent = data.body;
        }
    })
});

