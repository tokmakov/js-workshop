import $ from '../core.js';

$.extensions.html = function (content) {
    for (let i = 0; i < this.length; i++) {
        if (content !== undefined) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }
    return this;
};

$.extensions.text = function (content) {
    for (let i = 0; i < this.length; i++) {
        if (content !== undefined) {
            this[i].textContent = content;
        } else {
            return this[i].textContent;
        }
    }
    return this;
};

$.extensions.empty = function () {
    this.text('');
    return this;
};
