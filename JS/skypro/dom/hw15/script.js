const API_KEY = 'dict.1.1.20230121T052245Z.1f8b16f3cf1ceddf.43c03fc0541ea1d0ed13a81fb4e788122695343e';

document.addEventListener('DOMContentLoaded', function () {
    const widget = document.querySelector('.widget');
    const widgetInput = widget.querySelector('.widget__input');
    const widgetText = widget.querySelector('.widget__text');
    const widgetButton = widget.querySelector('.widget__button');

    widgetButton.addEventListener('click', function (event) {
        event.preventDefault();
        request({
            method: 'POST',
            url: `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${API_KEY}&lang=ru-ru&text=${widgetInput.value}&ui=ru`,
            requestType: 'urlencoded',
            body: {
                key: API_KEY,
                lang: 'ru-ru',
                text: widgetInput.value
            },
            onSuccess: (data) => {
                widgetText.classList.remove('widget__text-hidden');
                if (data.def[0] === undefined) {
                    widgetText.textContent = `Слова '${widgetInput.value}' нет в словаре`;
                } else {
                    widgetText.textContent = `${data.def[0].tr.map(t => t.text).join(', ')}`;
                }

            }
        })
    });
});

