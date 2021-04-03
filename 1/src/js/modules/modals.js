const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              allModals = document.querySelectorAll('[data-modal]'),
              scrollWidth = calcScrollWidth();

        // на странице есть две ссылки для открытия одного окна,
        // мы сразу навешиваем обработчик события на обе ссылки
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                // если есть открытое модальное окно — закрываем его
                allModals.forEach(item => {
                    item.style.display = 'none';
                    document.body.style.overflow = '';
                    document.body.style.marginRight = '0px';
                });
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scrollWidth}px`;
            });
        });

        // закрыть модальное окно при клике на крестик
        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        });

        // закрыть окно при клике за пределами окна
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            }
        });
    }

    // открыть модальное окно через delay секунд
    function showModalByTime(selector, delay) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, delay);
    }

    // вычислить ширину скролла страницы; создаем div-элемент
    // с прокруткой и вычисляем разницу между полной шириной
    // этого элемента и шириной без учета полосы прокрутки
    function calcScrollWidth() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close');
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close');
    // showModalByTime('.popup', 60000);
};

export default modals;