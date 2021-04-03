import {sendPostData} from '../services/request';

const forms = () => {
    const allForms = document.querySelectorAll('form'),
          allInputs = document.querySelectorAll('input:not([type="file"]), textarea'),
          phoneInputs = document.querySelectorAll('input[name="phone"]'),
          allUploads = document.querySelectorAll('input[type="file"]');

    // сообщения при отправке данных формы на сервер
    const message = {
        loading: {
            txt: 'Отправка данных формы...',
            img: 'assets/img/loading.gif'
        },
        success: {
            txt: 'Спасибо! Скоро мы с вами свяжемся',
            img: 'assets/img/success.png'
        },
        failure: {
            txt: 'Что-то пошло не так...',
            img: 'assets/img/failure.png'
        }
    };

    // разные формы будем отправлять на разные url
    const handlers = {
        message: 'assets/message.php', // простая текстовая форма
        picture: 'assets/picture.php'  // форма загрузки изображения
    }

    // для полей ввода номера телефона удаляем все, кроме цифр
    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });

    // при выборе файла показываем его имя в отдельном div-блоке,
    // как это предусмотено версткой; если имя длинное — обрезаем
    allUploads.forEach((item) => {
        item.addEventListener('input', () => {
            const orig = item.files[0].name; // оригинальное имя
            const parts = orig.split('.'); // имя и расширение
            const dots = parts[0].length > 10 ? '...' : '.';
            parts[0] = parts[0].length > 10 ? parts[0].substr(0, 10) : parts[0];
            const name = parts[0] + dots + parts[1]; // обрезанное имя
            // показываем имя выбраного файла в div-блоке
            item.previousElementSibling.textContent = name;
        });
    });

    // очищает все поля input всех форм на странице
    const clearInputs = () => {
        allInputs.forEach(item => {
            item.value = '';
        });
        allUploads.forEach(item => {
            // стандартный input[type="file"] тоже показывает имя файла
            item.value = '';
            // но мы для показа имени файла используем отдельный div
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
    };

    // обработчик события отправки формы для всех форм на странице,
    // отправляет данные посредством ajax и показывает сообщения
    allForms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            // создаем контейнер, в котором показываем сообщение;
            // контейнер будет содержать абзац текста и картинку
            let statusContainer = document.createElement('div');
            item.parentNode.appendChild(statusContainer);
            statusContainer.style.display = 'none';
            // внутрь контейнера помещаем абзац текста и картинку
            let statusText = document.createElement('p');
            statusText.textContent = message.loading.txt;
            let statusImage = document.createElement('img');
            statusImage.setAttribute('src', message.loading.img);
            statusContainer.appendChild(statusText);
            statusContainer.appendChild(statusImage);
            // скрываем форму с использованием классов анимации
            item.classList.add('animated', 'fadeOutUp');
            item.addEventListener('animationend', function() {
                // чтобы форма не занимала место в модальном окне
                item.style.display = 'none';
                statusContainer.style.display = 'block';
                // показываем контейнер с использованием анимации
                statusContainer.classList.add('animated', 'fadeInDown');
            }, {once: true});

            // определяем, на какой url будем отправлять данные формы
            const picture = item.querySelector('input[type="file"]');
            const handler = picture ? handlers.picture : handlers.message;

            const formData = new FormData(item);
            sendPostData(handler, formData)
                .then(response => { // данные формы отправлены успешно
                    statusText.textContent = message.success.txt;
                    statusImage.setAttribute('src', message.success.img);
                    console.log(response);
                })
                .catch(() => { // произошла ошибка при отправке формы
                    statusText.textContent = message.failure.txt;
                    statusImage.setAttribute('src', message.failure.img);
                })
                .finally(() => { // скрыть сообщение, очистить все формы
                    clearInputs();
                    setTimeout(() => {
                        // плавно скрываем контейнер с текстом и картинкой,
                        // по окончании анимации — плавно показываем форму
                        statusContainer.classList.remove('fadeInDown');
                        statusContainer.classList.add('fadeOutUp');
                        statusContainer.addEventListener('animationend', function() {
                            // удаляем контейнер и плавно показываем форму
                            statusContainer.remove();
                            item.style.display = 'block';
                            item.classList.remove('fadeOutUp');
                            item.classList.add('fadeInDown');
                        }, {once: true});
                    }, 3000);
                });
        });
    });
};

export default forms;