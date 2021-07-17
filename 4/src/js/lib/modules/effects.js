import $ from '../core.js';

$.extensions.animate = function (duration, callback, complete) {
    let startTime = null;

    // вспомогательная функция, которую будем передавать в requestAnimationFrame()
    function animate(currentTime) {
        // первый вызов этой функции
        if (!startTime) {
            startTime = currentTime;
        }
        // прогресс анимации, от 0 до 1
        let progress = (currentTime - startTime) / duration;
        if (progress > 1) progress = 1;

        // при каждом вызове этой функции, она вызывает callback()
        callback(progress);

        if (progress < 1) {
            requestAnimationFrame(animate); // анимация еще не завершилась
        } else {
            if (typeof complete === "function") complete(); // анимация завершилась
        }
    }

    return animate;
};

$.extensions.fadeIn = function (duration = 1000, display = 'block', complete) {
    let animate;
    for (let i = 0; i < this.length; i++) {
        // если элемент не скрыт, то ничего делать не нужно
        if (getComputedStyle(this[i]).display !== 'none') continue;
        this[i].style.display = display;
        animate = this.animate(
            // общая продолжительность анимации в миллисекундах
            duration,
            // функция будет вызвана несколько раз, progress изменяется от 0 до 1
            progress => this[i].style.opacity = progress,
            // после завершения анимации будет вызвана функция complete()
            typeof complete === "function" ? complete.bind(this[i]) : undefined
        );
        requestAnimationFrame(animate);
    }
};

$.extensions.fadeOut = function (duration = 1000, complete) {
    let animate;
    for (let i = 0; i < this.length; i++) {
        // если элемент уже скрыт, то ничего делать не нужно
        if (getComputedStyle(this[i]).display === 'none') continue;
        animate = this.animate(
            // общая продолжительность анимации в миллисекундах
            duration,
            // функция будет вызвана несколько раз, progress изменяется от 0 до 1
            progress => {
                this[i].style.opacity = 1 - progress;
                if (progress === 1) this[i].style.display = 'none';
            },
            // после завершения анимации будет вызвана функция complete()
            typeof complete === "function" ? complete.bind(this[i]) : undefined
        );
        requestAnimationFrame(animate);
    }
};

$.extensions.fadeToggle = function (duration = 1000, display = 'block', complete) {
    for (let i = 0; i < this.length; i++) {
        if (getComputedStyle(this[i]).display === 'none') {
            $(this[i]).fadeIn(duration, display, complete);
        } else {
            $(this[i]).fadeOut(duration, complete);
        }
    }
};

$.extensions.slideUp = function (duration = 1000, complete) {
    let animate, height, paddingTop, paddingBottom, borderTopWidth, borderBottomWidth, marginTop, marginBottom;
    for (let i = 0; i < this.length; i++) {
        // если элемент уже скрыт, то ничего делать не нужно
        if (getComputedStyle(this[i]).display === 'none') continue;
        this[i].style.overflow = 'hidden';
        height = parseInt(getComputedStyle(this[i]).height);
        paddingTop = parseInt(getComputedStyle(this[i]).paddingTop);
        paddingBottom = parseInt(getComputedStyle(this[i]).paddingBottom);
        borderTopWidth = parseInt(getComputedStyle(this[i]).borderTopWidth);
        borderBottomWidth = parseInt(getComputedStyle(this[i]).borderBottomWidth);
        marginTop = parseInt(getComputedStyle(this[i]).marginTop);
        marginBottom = parseInt(getComputedStyle(this[i]).marginBottom);
        animate = this.animate(
            // общая продолжительность анимации в миллисекундах
            duration,
            // функция будет вызвана несколько раз, progress изменяется от 0 до 1
            progress => {
                this[i].style.height = Math.round((1 - progress) * height) + 'px';
                this[i].style.paddingTop = Math.round((1 - progress) * paddingTop) + 'px';
                this[i].style.paddingBottom = Math.round((1 - progress) * paddingBottom) + 'px';
                this[i].style.borderTopWidth = Math.round((1 - progress) * borderTopWidth) + 'px';
                this[i].style.borderBottomWidth = Math.round((1 - progress) * borderBottomWidth) + 'px';
                this[i].style.marginTop = Math.round((1 - progress) * marginTop) + 'px';
                this[i].style.marginBottom = Math.round((1 - progress) * marginBottom) + 'px';
                if (progress === 1) {
                    this[i].style.display = 'none';
                    this[i].style.height = '';
                    this[i].style.overflow = '';
                    this[i].style.paddingTop = '';
                    this[i].style.paddingBottom = '';
                    this[i].style.borderTopWidth = '';
                    this[i].style.borderBottomWidth = '';
                    this[i].style.marginTop = '';
                    this[i].style.marginBottom = '';
                }
            },
            // после завершения анимации будет вызвана функция complete()
            typeof complete === "function" ? complete.bind(this[i]) : undefined
        );
        requestAnimationFrame(animate);
    }
};

$.extensions.slideDown = function (duration = 1000, display = 'block', complete) {
    let animate, height, paddingTop, paddingBottom, borderTopWidth, borderBottomWidth, marginTop, marginBottom;
    for (let i = 0; i < this.length; i++) {
        // если элемент не скрыт, то ничего делать не нужно
        if (getComputedStyle(this[i]).display !== 'none') continue;
        this[i].style.display = display;
        this[i].style.overflow = 'hidden';
        height = parseInt(getComputedStyle(this[i]).height);
        paddingTop = parseInt(getComputedStyle(this[i]).paddingTop);
        paddingBottom = parseInt(getComputedStyle(this[i]).paddingBottom);
        borderTopWidth = parseInt(getComputedStyle(this[i]).borderTopWidth);
        borderBottomWidth = parseInt(getComputedStyle(this[i]).borderBottomWidth);
        marginTop = parseInt(getComputedStyle(this[i]).marginTop);
        marginBottom = parseInt(getComputedStyle(this[i]).marginBottom);
        animate = this.animate(
            // общая продолжительность анимации в миллисекундах
            duration,
            // функция будет вызвана несколько раз, progress изменяется от 0 до 1
            progress => {
                this[i].style.height = Math.round(progress * height) + 'px';
                this[i].style.paddingTop = Math.round(progress * paddingTop) + 'px';
                this[i].style.paddingBottom = Math.round(progress * paddingBottom) + 'px';
                this[i].style.borderTopWidth = Math.round(progress * borderTopWidth) + 'px';
                this[i].style.borderBottomWidth = Math.round(progress * borderBottomWidth) + 'px';
                this[i].style.marginTop = Math.round(progress * marginTop) + 'px';
                this[i].style.marginBottom = Math.round(progress * marginBottom) + 'px';
                if (progress === 1) {
                    this[i].style.height = '';
                    this[i].style.overflow = '';
                    this[i].style.paddingTop = '';
                    this[i].style.paddingBottom = '';
                    this[i].style.borderTopWidth = '';
                    this[i].style.borderBottomWidth = '';
                    this[i].style.marginTop = '';
                    this[i].style.marginBottom = '';
                }
            },
            // после завершения анимации будет вызвана функция complete()
            typeof complete === "function" ? complete.bind(this[i]) : undefined
        );
        requestAnimationFrame(animate);
    }
};

$.extensions.slideToggle = function (duration = 1000, display = 'block', complete) {
    for (let i = 0; i < this.length; i++) {
        if (getComputedStyle(this[i]).display === 'none') {
            $(this[i]).slideDown(duration, display, complete);
        } else {
            $(this[i]).slideUp(duration, complete);
        }
    }
};