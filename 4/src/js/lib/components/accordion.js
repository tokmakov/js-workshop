import $ from '../core.js';

$.extensions.accordion = function() {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            // если клик по элементу, который уже открыт — ничего делать не нужно
            if ($(this[i]).hasClass('accordion-heading-active')) return;
            // находим тот элемент(ы) аккордеона, который сейчас открыт — и плавно
            // его закрываем; по окончании анимации — плавно открываем другой
            $(this[i]).nextSibling().parent().find('.accordion-content-active').slideUp(500, () => {
                // все открытые элементы закрыты, удаляем css-класс active
                $(this[i])
                    .parent()
                    .find('.accordion-heading-active')
                    .removeClass('accordion-heading-active');
                $(this[i])
                    .nextSibling()
                    .parent()
                    .find('.accordion-content-active')
                    .removeClass('accordion-content-active');
                // теперь открываем контент элемента, по которому кликнули
                $(this[i]).nextSibling().slideDown(500, 'block', () => {
                    // элемент открыт, добавляем css-класс active
                    $(this[i]).addClass('accordion-heading-active');
                    $(this[i]).nextSibling().addClass('accordion-content-active');
                });
            });
        });
    }
};

$('[data-accordion="true"] .accordion-heading').accordion();