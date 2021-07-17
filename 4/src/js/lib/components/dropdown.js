import $ from '../core.js';

$.extensions.dropdown = function() {
    for (let i = 0; i < this.length; i++) {
        let button = this[i].querySelector('.dropdown-toggle');
        let menu = this[i].querySelector('.dropdown-menu');
        $(menu).hide(); // изначально меню должно быть скрыто
        $(button).click(() => {
            $(menu).fadeToggle(300);
        });
    }
    return this;
};

$('.dropdown[data-dropdown="true"]').dropdown();