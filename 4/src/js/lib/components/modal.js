import $ from '../core.js';

$.extensions.modal = function () {
    for (let i = 0; i < this.length; i++) {
        // получаем идентификатор окна, которое надо открыть
        const target = this[i].getAttribute('data-target');
        // модального окна не существует — ничего не делаем
        if (!document.querySelector(target)) continue;
        /*
         * Навешиваем обработчик события на кнопку/ссылку открытия
         */
        if (!this[i].hasAttribute('data-click')) { // если еще не навесили
            $(this[i]).click((event) => {
                event.preventDefault();
                $(target).fadeIn(500);
                // чтобы контент страницы нельзя было прокручивать
                document.body.style.overflow = 'hidden';
                this[i].setAttribute('data-click', '');
            });
        }
        /*
         * Навешиваем обработчик события на кнопку/ссылку закрытия
         */
        const closeButtons = document.querySelectorAll(`${target} [data-close]`);
        closeButtons.forEach(item => {
            $(item).click((event) => {
                event.preventDefault();
                $(target).fadeOut(500);
                document.body.style.overflow = '';
            });
        });
        /*
         * Закрыть окно, если был клик за пределами модального окна
         */
        $(target).click((event) => {
            if (event.target.classList.contains('modal')) {
                $(target).fadeOut(500);
                document.body.style.overflow = '';
            }
        });
    }
};

$('[data-modal="true"]').modal();

$.extensions.createModal = function({content, buttons} = {}) {
    for (let i = 0; i < this.length; i++) {
        // создаем модальное окно «на лету»; окно уже могло быть создано
        // при предыдущем вызове этой функции, так что надо это проверить
        let modal = document.querySelector(this[i].getAttribute('data-target'));
        if (modal) modal.remove();
        modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));
        /*
         * ВХОДНЫЕ ПАРАМЕТРЫ ФУНКЦИИ createModal()
         * data = {
         *     content: {title: '...', body: '...'},
         *     buttons: [
         *         {classes: ['one', 'two'], text: '...', close: true, callback: function() {...}},
         *         {classes: ['one', 'two'], text: '...', close: true, callback: function() {...}}
         *     ]
         * };
         */
        const btns = []; // кнопки в подвале модального окна
        for (let j = 0; j < buttons.length; j++) {
            let btn = document.createElement('button');
            btn.classList.add('btn', ...buttons[j].classes);
            btn.textContent = buttons[j].text;
            if (buttons[j].close) {
                btn.setAttribute('data-close', '');
            }
            if (typeof buttons[j].callback === "function") {
                btn.addEventListener('click', buttons[j].callback);
            }
            btns.push(btn);
        }
        modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <button class="close" data-close>
                    <span>&times;</span>
                </button>
                <div class="modal-header">
                    <div class="modal-title">
                        ${content.title}
                    </div>
                </div>
                <div class="modal-body">
                    ${content.body}
                </div>
                <div class="modal-footer"></div>
            </div>
        </div>
        `;
        modal.querySelector('.modal-footer').append(...btns); // добавляем кнопки
        modal.querySelector('.modal-footer button').after(' '); // пробел между кнопками
        document.body.append(modal);
        // чтобы не навешивать обработчик клика для окрытия окна при вызове функции modal,
        // потому что обработчик будет открывать модальное окно, а мы окно открываем сами;
        // нам от функции modal нужно, только чтобы она навесила обработчики закрытия окна
        this[i].setAttribute('data-click', '');
        $(this[i]).modal(); // назначаем обработчик клика для закрытия окна
        $(modal).fadeIn(500); // сразу открываем это модальное окно
    }
};
