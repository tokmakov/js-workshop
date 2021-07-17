import $ from '../core.js';

$.extensions.on = function (eventName, callback) {
    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);
    }
    return this;
};

$.extensions.off = function (eventName, callback) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback);
    }
    return this;
};

$.extensions.click = function (handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            // передан handler — назначаем его как обработчик события
            this[i].addEventListener('click', handler);
        } else {
            // в противном случае вызываем событие клика на элементе
            this[i].click();
        }
    }
    return this;
};

$.extensions.focus = function (handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            this[i].addEventListener('focus', handler);
        } else {
            this[i].focus();
        }
    }
    return this;
};

$.extensions.blur = function (handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            this[i].addEventListener('blur', handler);
        } else {
            this[i].blur();
        }
    }
    return this;
};