export default class Forms {
    constructor() {
        // формы на странице, с которыми будем работать
        this.forms = document.querySelectorAll('form');
        // все поля всех форм, с которыми будем работать
        this.inputs = document.querySelectorAll('input'),
        // сообщения при отправке данных формы на сервер
        this.message = {
            loading: 'Отправка данных формы...',
            success: 'Спасибо! Скоро мы с вами свяжемся',
            failure: 'Что-то пошло не так...'
        };
        // путь к обработчику данных на сервере
        this.handler = 'assets/question.php';
    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await res.text();
    }

    // очищает все поля input всех форм на странице
    clearInputs() {
        this.inputs.forEach(item => {
            item.value = '';
        });
    };

    initPhoneMask() {
        const phoneInputs = document.querySelectorAll('[name="phone"]');
        phoneInputs.forEach(input => {
            // перед тем, как пользователь начнет вводить, перемещаем курсор в конец
            input.addEventListener('beforeinput', () => {
                input.setSelectionRange(input.value.length, input.value.length);
            });
            // функция mask очищает и форматирует ввод номера телефона в поле input
            input.addEventListener('input', phoneMask);
            input.addEventListener('focus', phoneMask);
            input.addEventListener('blur',phoneMask);
        });

        // функция очищает и форматирует ввод номера телефона в поле
        // input, вызывается при событиях blur, focus, input
        function phoneMask(event) {
            let phonePattern = '+7 (___) ___-__-__',
                // здесь будет только цифра(ы) телефонного кода страны
                countryCode = phonePattern.replace(/\D/g, ''),
                // из всего ввода в поле input оставляем только цифры
                onlyDigits = this.value.replace(/\D/g, ''),
                // позиция указателя на текущий символ в onlyDigits
                digitsIndex = 0;

            // пользователь еще не ввел ни одной цифры, в этом случае мы устанавливаем значение
            // onlyDigits равным countryCode; это позволит показать в поле ввода подсказку +7 —
            // пользователю будет понятно, что код города вводить не нужно
            if (countryCode.length >= onlyDigits.length) {
                onlyDigits = countryCode;
            }

            /*
            * Берем шаблон номера телефона +7 (___) ___-__-__ и проходим по всем символам этой
            * строки. Если очередной символ цифра (код города) или подчеркивание — заменяем его
            * на цифру из onlyDigits. Позицию очередного символа (цифры) из onlyDigits храним в
            * digitsIndex — и смещаем указатель при каждой замене подчеркивания на цифру.
            */
            let phoneValue = phonePattern.replace(/./g, function(a) {
                // если очередной символ является цифрой или подчеркиванием...
                let digitOrUnder = /[_0-9]/.test(a);
                // ...и мы еще не дошли до конца строки onlyDigits
                let notEndDigits = digitsIndex < onlyDigits.length;
                // ...то мы возвращаем очередной символ из onlyDigits
                if (digitOrUnder && notEndDigits) {
                    // и смещаем указатель для работы со следующим
                    return onlyDigits.charAt(digitsIndex++);
                }
                // если в onlyDigits все символы (то есть цифры) закончились, то
                // все что осталось в шаблоне phonePattern заменяем на пустоту; в
                // итоге получается +7 (926) 765-43-__ ——> +7 (926) 765-43
                if (digitsIndex >= onlyDigits.length) {
                    return '';
                }
                // если очередной символ шаблона не был подчеркиваением и символы
                // (цифры) в onlyDigits еще не закончились — значит это пробел или
                // дефис или круглые скобки — их мы возвращаем без изменений
                return a;
            });

            // теперь заменяем введенное значение на строку шаблона, в которой мы
            // заменили все подчеркивания на цифры (или пробелы, если цифр мало)
            this.value = phoneValue;

            // если поле теряет фокус ввода — убираем из него +7, чтобы стало пустым
            if (event.type === 'blur') {
                if (this.value.length === 2) {
                    this.value = '';
                }
            }
        }
    }

    checkAllEmais() {
        const emailInputs = document.querySelectorAll('[type="email"]');

        emailInputs.forEach(input => {
            input.addEventListener('keydown', (event) => {
                const keys = ['Delete', 'Backspace', 'ArrowLeft', 'ArrowRight'];
                // разрешено использовать Delete, Backspace и стрелки
                if (keys.includes(event.key)) {
                    return;
                }
                // запрещено вводить все, кроме латиницы, цифр, точки, подчеркивания, дефиса и @
                if (event.key && event.key.search(/[-_@.0-9a-z]/i) === -1) {
                    event.preventDefault();
                }
            });
        });
    }

    init() {
        this.initPhoneMask();
        this.checkAllEmais();

        this.forms.forEach(form => {
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                // создаем div-блок, в котором показываем сообщение
                let statusMessage = document.createElement('div');
                statusMessage.style.cssText = `
                    margin: 15px 0;
                    color: #f99;
                `;
                statusMessage.textContent = this.message.loading;
                form.before(statusMessage);
                // получаем данные формы для отправки на сервер
                const formData = new FormData(form);
                // отправляем данные формы обработчику на сервере
                this.postData(this.handler, formData)
                    .then(response => { // данные формы отправлены успешно
                        console.log(response);
                        statusMessage.textContent = this.message.success;
                    })
                    .catch(() => statusMessage.textContent = this.message.failure) // ошибка
                    .finally(() => { // скрыть сообщение, очистить все формы
                        this.clearInputs();
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 5000);
                    });
            });
        });
    }
}