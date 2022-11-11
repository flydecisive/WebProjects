const text = document.getElementById('text');

function showLocation(ltd, lng) {
    text.innerHTML = `Ваша геопозиция:<br>
    широта - ${ltd}<br>
    долгота - ${lng}`;
}

const loc = navigator.geolocation.getCurrentPosition(
    function (data) {
        const { latitude, longitude } = data.coords;

        showLocation(latitude, longitude);
    }
);



