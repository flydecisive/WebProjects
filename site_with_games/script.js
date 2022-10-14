const seasons = () => {
    let answer = false;
    while (answer !== true) {
        let season = Number(prompt('Введите номер месяца'));
        if (season < 1 || season > 12) {
            alert('Нужно вводить номера от 1 до 12');
        } else {
            season = Number(season);
            if (season === 1 || season === 12 || season === 2) {
                alert('Зима');
                answer = true;
            } else if (season > 2 & season <= 5) {
                alert('Весна');
                answer = true;
            } else if (season > 5 & season <= 8) {
                alert('Лето');
                answer = true;
            } else if (season > 8 & season <= 11) {
                alert('Осень');
                answer = true;
            } else {
                alert('Нужно вводить только номер месяца от 1 до 12');
            }
        }
    }
}

const rememberWords = () => {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let mixedWords = words.sort(() => Math.random() - 0.5);
    alert(mixedWords);
    let userAnswerFirst = prompt('Чему равнялся первый элемент массива?');
    let userAnswerSecond = prompt('Чему равнялся последний элемент массива?');
    userAnswerFirst = userAnswerFirst.toLocaleLowerCase();
    userAnswerSecond = userAnswerSecond.toLocaleLowerCase();
    let firstElement = mixedWords[0].toLocaleLowerCase();
    let lastElement = mixedWords[mixedWords.length - 1].toLocaleLowerCase();
    let result;
    if (userAnswerFirst === firstElement & userAnswerSecond === lastElement) {
        result = 'Поздравляю, вы угадали оба элемента';
    } else if ((userAnswerFirst === firstElement & userAnswerSecond !== lastElement)
        || (userAnswerFirst !== firstElement & userAnswerSecond === lastElement)) {
        result = 'Вы были близки к победе!';
    } else if (userAnswerFirst !== firstElement & userAnswerSecond !== lastElement) {
        result = 'Вы ответили не верно';
    }
    alert(result);
}