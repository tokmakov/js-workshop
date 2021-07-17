import $ from '../core.js';

$.extensions.addClass = function (...classNames) {
    // после rest-оператора ... переменная classNames это массив ["one", "two"]
    for (let i = 0; i < this.length; i++) {
        // после spread-оператора ... функция получит две строки: "one", "two"
        this[i].classList.add(...classNames);
    }
    return this;
};

$.extensions.removeClass = function (...classNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(...classNames);
    }
    return this;
};

$.extensions.toggleClass = function (className) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.toggle(className);
    }
    return this;
};

$.extensions.hasClass = function (className) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].classList.contains(className)) {
            return true;
        }
    }
    return false;
};