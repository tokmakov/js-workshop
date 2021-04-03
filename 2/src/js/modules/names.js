const names = (selector) => {
    const inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('keydown', (event) => {
            const keys = ['Delete', 'Backspace', 'ArrowLeft', 'ArrowRight'];
            // разрешено использовать Delete, Backspace и стрелки
            if (keys.includes(event.key)) {
                return;
            }
            // разрешено вводить только кириллицу, пробел и дефис
            if (event.key && event.key.search(/[- а-яё]/i) === -1) {
                event.preventDefault();
            }
        });
        input.addEventListener('blur', (event) => {
            // если сработало автозаполнение в браузере
            if (input.value.search(/[^- а-яё]/i) >= 0) {
                input.value = 'Только кириллица';
                setTimeout(function () {
                    input.value = '';
                }, 1000);
            }
        });
    });
};

export default names;