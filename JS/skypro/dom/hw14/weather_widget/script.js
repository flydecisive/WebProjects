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
    const widgetCity = widget.querySelector('.widget__city');
    const widgetWeatherStatus = widget.querySelector('.widget__weather-status');
    const widgetTemperature = widget.querySelector('.widget__temperature');
    const widgetWeatherMain = widget.querySelector('.widget__weather-main');
    const widgetWind = widget.querySelector('.widget__wind');
    navigator.geolocation.getCurrentPosition(
        function (data) {
            request({
                url: 'data.json',
                onSuccess: (data) => {
                    const weatherStatus = data.weather[0].main;
                    widgetCity.textContent = `${data.name}, ${data.sys.country}`;
                    widgetTemperature.textContent = `${Math.floor(data.main.temp - 273.15)} ºC`;
                    widgetWeatherMain.textContent = weatherStatus[0].toUpperCase() + weatherStatus.slice(1);
                    widgetWeatherStatus.src = weatherStatuses[weatherStatus.toLowerCase()];
                    widgetWind.textContent = `Ветер: ${data.wind.speed} м/c`;
                }
            });
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
