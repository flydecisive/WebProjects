function renderExampleButton(container) {
    const button = document.createElement('button');

    button.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(button);
}

window.application.blocks['app'] = renderExampleButton;