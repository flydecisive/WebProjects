class Randomizer {
    constructor(element) {
        this.element = element;
        this.randomizerTemplate();
        this.inputStart = this.element.querySelector('.input-start');
        this.inputEnd = this.element.querySelector('.input-end');
        this.button = this.element.querySelector('.button');

        this.getValue = this.getValue.bind(this);
        this.element.addEventListener('submit', this.getValue);
    }

    randomizerTemplate() {
        const inputStart = document.createElement('input');
        inputStart.setAttribute('type', 'text');
        inputStart.setAttribute('placeholder', 'Начальное число');
        inputStart.classList.add('input-start');
        this.element.appendChild(inputStart);

        const inputEnd = document.createElement('input');
        inputEnd.setAttribute('type', 'text');
        inputEnd.setAttribute('placeholder', 'Конечное число');
        inputEnd.classList.add('input-end');
        this.element.appendChild(inputEnd);

        const button = document.createElement('button');
        button.classList.add('button');
        button.textContent = 'Сгенерировать число';
        this.element.appendChild(button);
    }

    getValue() {
        event.preventDefault();
        if (document.querySelector('.text')) {
            document.querySelector('.text').remove();
        }
        const firstNum = Number(this.inputStart.value);
        const secondNum = Number(this.inputEnd.value);
        const max = Math.max(firstNum, secondNum);
        const min = Math.min(firstNum, secondNum);
        const randomNum = Math.floor(Math.random() * (max - min) + min);
        const text = document.createElement('p');
        text.classList.add('text');
        text.textContent = randomNum;
        this.element.insertBefore(text, this.inputStart);

    }
}