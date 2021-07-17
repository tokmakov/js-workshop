const $ = function (selector) {
    return new init(selector);
};

const init = function (selector) {
    let elements = this._(selector);
    for (let i = 0; i < elements.length; i++) {
        this[i] = elements[i];
    }
    this.length = elements.length;
};

init.prototype = $.extensions = {};

init.prototype._ = function(selector) {
    let elements = [];
    // selector может быть селектором элементов, объектом NodeList или объектом $(…)
    if (typeof selector === "string") {
        let elems = document.querySelectorAll(selector);
        for (let i = 0; i < elems.length; i++) {
            elements[i] = elems[i];
        }
    }
    if (typeof selector === "object") {
        if (selector instanceof NodeList) {
            for (let i = 0; i < selector.length; i++) {
                elements[i] = selector[i];
            }
        }
        if (selector instanceof init) {
            for (let i = 0; i < selector.length; i++) {
                elements[i] = selector[i];
            }
        }
        if (selector instanceof HTMLElement) {
            elements[0] = selector;
        };
    }
    return elements;
}

window.$ = $;

export default $;