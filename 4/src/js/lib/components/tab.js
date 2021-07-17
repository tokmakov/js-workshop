import $ from '../core.js';

$.extensions.tab = function() {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            $(this[i])
                .addClass('tab-item-active')
                .siblings()
                .removeClass('tab-item-active')
                .closest('.tab')
                .find('.tab-content')
                .removeClass('tab-content-active')
                .valueOf($(this[i]).parent().children().indexOf(this[i]))
                .addClass('tab-content-active');
        });
    }
};

$('[data-tab="true"] .tab-item').tab();