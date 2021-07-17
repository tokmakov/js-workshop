// создание модального окна «на лету»
let data = {
    content: {
        title: 'Только три дня',
        body: 'Обратите внимание, предложение ограничено! Рекламная акция заканчивается через три дня.'
    },
    buttons: [
        {classes: ['btn', 'btn-danger'], text: 'Закрыть', close: true},
    ]
};
// чтобы открыть модальное окно, на странице должна существовать кнопка, которая его открывает;
// а мы хотим открыть модальное окно без такой кнопки, через 10 секунд пребывания на странице;
// тут явныя надоработка нашей библиотеки, но будем работать с тем, что есть — создадим кнопку
let button = document.createElement('button');
button.setAttribute('data-target', '#campaing-modal');
button.style.display = 'none';
document.body.append(button);
setTimeout(() => $(button).createModal(data), 10000);