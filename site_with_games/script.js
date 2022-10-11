const seasons = () => {
    let season = Number(prompt('Введите номер месяца'));
    if (season < 1 || season > 12) {
        alert('Нужно вводить номера от 1 до 12');
    } else {
        season = Number(season);
        if (season === 1 || season === 12 || season === 2) {
            alert('Зима');
        } else if (season > 2 & season <= 5) {
            alert('Весна');
        } else if (season > 5 & season <= 8) {
            alert('Лето');
        } else if (season > 8 & season <= 11) {
            alert('Осень');
        } else {
            alert('Нужно вводить только номер месяца от 1 до 12');
        }
    }
}