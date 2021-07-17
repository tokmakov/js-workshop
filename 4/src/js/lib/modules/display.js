import $ from '../core.js';

$.extensions.show = function(display = 'block') {
    for (let i = 0; i < this.length; i++) {
        if (this[i].style) {
            this[i].style.display = display;
        }
    }
    return this;
};

$.extensions.hide = function() {
    for (let i = 0; i < this.length; i++) {
        if (this[i].style) {
            this[i].style.display = 'none';
        }
    }
    return this;
};

$.extensions.toggle = function(display = 'block') {
    for (let i = 0; i < this.length; i++) {
        if (this[i].style) {
            if (this[i].style.display === 'none') {
                this[i].style.display = display;
            } else {
                this[i].style.display = 'none';
            }
        }
    }
    return this;
};