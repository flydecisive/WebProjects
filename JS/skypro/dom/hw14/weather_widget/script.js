const weatherStatuses = {
    thunderstorm: 'img/Thunder.png',
    clear: 'img/Sun.png',
    drizzle: 'img/drizzle.png',
    rain: 'img/raing.png',
    snow: 'img/snow.png',
    atmosphere: 'img/atmosphere.png',
    clouds: 'img/Cloudy.png',
};



document.addEventListener('DOMContentLoaded', function () {
    const widget = document.querySelector('.widget');
    const suggest = widget.querySelector('.suggest');
    const button = widget.querySelector('.widget__button');
    const widgetWeatherStatus = widget.querySelector('.widget__weather-status');
    const widgetTemperature = widget.querySelector('.widget__temperature');
    const widgetWeatherMain = widget.querySelector('.widget__weather-main');
    const widgetWind = widget.querySelector('.widget__wind');

    button.addEventListener('click', function () {
        request({
            url: `http://api.openweathermap.org/geo/1.0/direct?q=${suggest.value},RU&appid=7a4da1fe147dd807bc54e1122dff4722`,
            onSuccess: (data) => {
                console.log(data[0].lat);
                console.log(data[0].lon);
                request({
                    url: `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=7a4da1fe147dd807bc54e1122dff4722`,
                    onSuccess: (data) => {
                        widget.style.height = 666 + 'px';
                        const weatherStatus = data.weather[0].main;
                        widgetTemperature.textContent = `${Math.floor(data.main.temp - 273.15)} ºC`;
                        widgetWeatherMain.textContent = weatherStatus[0].toUpperCase() + weatherStatus.slice(1);
                        widgetWeatherStatus.src = weatherStatuses[weatherStatus.toLowerCase()];
                        widgetWeatherStatus.classList.remove('widget__weather-status-hidden');
                        widgetWind.textContent = `Ветер: ${data.wind.speed} м/c`;
                    }
                });
            }
        })
    });
});

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
