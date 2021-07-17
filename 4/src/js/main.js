'use strict';

import $ from './lib/lib.js';

// создание модального окна «на лету»
let modal = {
    content: {
        title: 'Модальное окно #three (динамическое)',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    buttons: [
        {classes: ['btn', 'btn-danger'], text: 'Закрыть', close: true, callback: () => alert('Закрыть')},
        {classes: ['btn', 'btn-success'], text: 'Сохранить', close: false, callback: () => alert('Сохранить')}
    ]
};
$('#modal-open').click(() => $('#modal-open').createModal(modal));

