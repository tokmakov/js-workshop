const modals = () => {

    // NEW при окрытии пользователем модального окна принимает значение true
    let isOpenModal = false;
    const allModals = document.querySelectorAll('[data-modal]'),
          scrollWidth = calcScrollWidth();

    allModals.forEach(item => {
        item.classList.add('animated', 'fadeIn');
    });

    function bindModal(triggerSelector, modalSelector, closeSelector, destroyTrigger = false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        // на странице может быть несколько триггеров для окрытия одного и того
        // же модального окна, мы навешиваем обработчик события сразу на все
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                // NEW пользователь сам открыл модальное окно
                isOpenModal = true;
                // для модального окна подарка удаляем триггер
                if (destroyTrigger) {
                    item.remove();
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
            // если какое-то модальное окно уже откыто, то еще одно
            // окно уже не открываем — оно будет только мешать
            let display = false;
            allModals.forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = true; // какое-то окно уже открыто
                }
            });
            // все окна закрыты, значит можем показать это окно
            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scrollWidth}px`;
            }
        }, delay);
    }

    // вычисляем ширину скролла страницы; создаем div-элемент с прокруткой и вычисляем
    // разницу между полной шириной этого элемента и шириной без учета полосы прокрутки
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

    // открывает модальное окно, если страница прокручена вниз до
    // конца и пользователь не открыл ни одного модального окна
    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            // полная высота html-документа, включая скрытую за границами окна браузера
            const documentHeight = document.documentElement.scrollHeight;
            // сколько уже прокручено от начала документа + ширина видимого окна браузера
            const currentHeight = window.pageYOffset + document.documentElement.clientHeight;
            // страница уже прокручена до конца или еще нет?
            const isScrollEnd = Math.abs(documentHeight - currentHeight) < 10;
            // пользователь не открывал модальных окон и страница прокручена до конца
            if (!isOpenModal && isScrollEnd) {
                document.querySelector(selector).click();
            }
        });
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');

    //showModalByTime('.popup-consultation', 60000);
};

export default modals;
