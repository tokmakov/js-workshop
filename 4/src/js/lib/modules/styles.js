import $ from '../core.js';

$.extensions.css = function(name, value = '') {
    for (let i = 0; i < this.length; i++) {
        if (typeof name === "object") {
            for (let prop in name) {
                this[i].style[prop] = name[prop];
            }
        }
        if (typeof name === "string") {
            this[i].style[name] = value;
        }
    }
    return this;
};
