import $ from '../core.js';

// Возвращает элемент коллекции по индексу, обернутый в $(…)
$.extensions.valueOf = function (i) {
    if (i >= this.length) return this.zero();
    const item = this[i];
    this.zero(); // будем записывать в this новую коллекцию
    this[0] = item;
    this.length = 1;
    return this;
};

// Возвращает первый элемент коллекции, обернутый в $(…)
$.extensions.first = function () {
    return this.valueOf(0);
};

// Возвращает последний элемент коллекции, обернутый в $(…)
$.extensions.last = function () {
    return this.valueOf(this.length - 1);
};

// Возвращает массив элементов коллекции
$.extensions.toArray = function () {
    return this._(this);
};

// Удаляет все элементы из коллекции
$.extensions.zero = function () {
    for (let i = 0; i < this.length; i++) {
        delete this[i];
    }
    this.length = 0;
    return this;
};

// Убирает дубли из коллекции элементов
$.extensions.uniq = function () {
    let items = this.toArray(); // массив элементов исходной коллекции
    this.zero(); // будем записывать в this новую коллекцию
    let counter = 0;
    for (let i = 0; i < items.length; i++) {
        if (!this.oneExist(item[i])) { // если еще нет — добавляем
            this[counter++] = item[i];
            this.length = counter;
        }
    }
    return this;
};

// Возвращает индекс элемента в коллекции; подразумевается, что объект $(…) содержит коллекцию
// однотипных элементов (например, элементы слайдера) и нужно найти индекс отдельного элемента
$.extensions.indexOf = function (selector) {
    let elements = this._(selector);
    for (let i = 0; i < this.length; i++) {
        if (this[i] == elements[0]) return i;
    }
    return -1;
};

// Находит элементы среди потомков элементов коллекции по css-селектору и возвращает
// объект $(…) с новой коллекцией
$.extensions.find = function (selector) {
    let items = this.toArray(); // массив элементов исходной коллекции
    this.zero(); // будем записывать в this новую коллекцию
    let counter = 0;
    for (let i = 0; i < items.length; i++) {
        let children = items[i].querySelectorAll(selector);
        for (let j = 0; j < children.length; j++) {
            if (!this.oneExist(children[j])) { // исключаем дубли
                this[counter++] = children[j]; // записываем в this новую коллекцию
                this.length = counter;
            }
        }
    }
    return this;
};

// Фильтрует элементы коллекции по css-селектору и возвращает объект $(…) с новой коллекцией
$.extensions.filter = function (selector) {
    let elements = this._(selector);
    if (elements.length === 0) {
        return this; // если фильтр пустой, ничего не делаем
    }
    let items = this.toArray(); // массив элементов исходной коллекции
    this.zero(); // будем записывать в this новую коллекцию
    let counter = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < elements.length; j++) {
            if (items[i] == elements[j]) {
                this[counter++] = items[i]; // записываем в this новую коллекцию
            }
        }
    }
    this.length = counter;
    return this;
};

// Добавляет к коллекции элементы по css-селектору и возвращает объект $(…) с новой коллекцией
$.extensions.plus = function (selector) {
    let elements = this._(selector);
    let counter = this.length;
    for (let i = 0; i < elements.length; i++) {
        if (this.oneExist(elements[i])) continue; // исключаем дубли
        this[counter++] = elements[i];
        this.length = counter;
    }
    return this;
};

// Удаляет из коллекции элементы по css-селектору и возвращает объект $(…) с новой коллекцией
$.extensions.minus = function (selector) {
    let oneItems = this.toArray(); // массив элементов исходной коллекции
    let twoItems = this._(selector); // массив элементов второй коллекции

    this.zero(); // будем записывать в this новую коллекцию
    let counter = 0, add;
    for (let i = 0; i < oneItems.length; i++) {
        add = true; // добавлять или нет элемент в this?
        for (let j = 0; j < twoItems.length; j++) {
            // элемент исходной коллекции есть во второй — нам не подходит
            if (oneItems[i] == twoItems[j]) add = false;
        }
        if (add) this[counter++] = oneItems[i];
    }
    this.length = counter;
    return this;
};

$.extensions.closest = function (selector) {
    let items = this.toArray(); // массив элементов исходной коллекции
    this.zero(); // будем записывать в this новую коллекцию
    let counter = 0;
    for (let i = 0; i < items.length; i++) {
        let closest = items[i].closest(selector);
        if (closest && !this.oneExist(closest)) {
            this[counter++] = closest;
            this.length = counter;
        }
    }
    return this;
};

$.extensions.nextSibling = function () {
    let items = this.toArray(); // массив элементов исходной коллекции
    this.zero(); // будем записывать в this новую коллекцию
    let counter = 0, next;
    for (let i = 0; i < items.length; i++) {
        next = items[i].nextElementSibling;
        if (next) {
            this[counter++] = next;
        }
    }
    this.length = counter;
    return this;
};

$.extensions.prevSibling = function () {
    let items = this.toArray(); // массив элементов исходной коллекции
    this.zero(); // будем записывать в this новую коллекцию
    let counter = 0, prev;
    for (let i = 0; i < items.length; i++) {
        prev = items[i].previousElementSibling;
        if (prev) {
            this[counter++] = prev;
        }
    }
    this.length = counter;
    return this;
};

$.extensions.siblings = function () {
    let items = this.toArray(); // массив элементов исходной коллекции
    this.zero(); // будем записывать в this новую коллекцию
    let counter = 0, parent, children;
    for (let i = 0; i < items.length; i++) {
        let parent = items[i].parentElement;
        if (parent) {
            children = parent.children;
            for (let j = 0; j < children.length; j++) {
                if (children[j] == items[i]) continue;
                if (this.oneExist(children[j])) continue; // исключаем дубли
                this[counter++] = children[j];
                this.length = counter;
            }
        }
    }
    return this;
};

$.extensions.children = function () {
    let items = this.toArray(); // массив элементов исходной коллекции
    this.zero(); // будем записывать в this новую коллекцию
    let counter = 0, children;
    for (let i = 0; i < items.length; i++) {
        children = items[i].children;
        for (let j = 0; j < children.length; j++) {
            this[counter++] = children[j];
        }
    }
    this.length = counter;
    return this;
};

$.extensions.parent = function () {
    let items = this.toArray(); // массив элементов исходной коллекции
    this.zero(); // будем записывать в this новую коллекцию
    let counter = 0, parent;
    for (let i = 0; i < items.length; i++) {
        parent = items[i].parentElement;
        if (parent && !this.oneExist(parent)) {
            this[counter++] = parent;
            this.length = counter;
        }
    }
    return this;
};

$.extensions.firstChild = function () {
    let items = this.toArray(); // массив элементов исходной коллекции
    this.zero(); // будем записывать в this новую коллекцию
    let counter = 0, firstChild;
    for (let i = 0; i < items.length; i++) {
        firstChild = items[i].firstElementChild;
        if (firstChild) {
            this[counter++] = firstChild;
        }
    }
    this.length = counter;
    return this;
};

$.extensions.lastChild = function () {
    let items = this.toArray(); // массив элементов исходной коллекции
    this.zero(); // будем записывать в this новую коллекцию
    let counter = 0, lastChild;
    for (let i = 0; i < items.length; i++) {
        lastChild = items[i].lastElementChild;
        if (lastChild) {
            this[counter++] = lastChild;
        }
    }
    this.length = counter;
    return this;
};

// Проверяет, что элемент с css-селектором уже есть в коллекции; подразумевается, что элемент
// должен быть один, поэтому проверяется только первый
$.extensions.oneExist = function (selector) {
    let items = this._(selector);
    if (items.length === 0) return false;
    if (this.length === 0) return false;
    for (let i = 0; i < this.length; i++) {
        if (this[i] == items[0]) return true;
    }
    return false;
};

// Проверяет, что хотя бы один элемент с css-селектором уже есть в коллекции
$.extensions.anyExist = function (selector) {
    let items = this._(selector);
    if (items.length === 0) return false;
    if (this.length === 0) return false;
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if (this[i] == items[j]) return true;
        }
    }
    return false;
};

// Проверяет, что все элементы с заданным css-селектором уже есть в коллекции
$.extensions.allExist = function (selector) {
    let items = this._(selector);
    if (items.length === 0) return false;
    if (this.length === 0) return false;
    let counter = 0;
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if (this[i] == items[j]) {
                items[j] = null;
                counter++;
            }
        }
    }
    return counter === items.length;
};
