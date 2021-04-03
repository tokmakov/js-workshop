const forms = () => {
    const allForms = document.querySelectorAll('form'),
          allInputs = document.querySelectorAll('input'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    // сообщения при отправке данных формы на сервер
    const message = {
        loading: 'Отправка данных формы...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    // для полей ввода номера телефона удаляет все, кроме цифр
    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });

    // отправляет данные data на сервер на указанный url
    const sendPostData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let response = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await response.text();
    };

    // очищает все поля input всех форм на странице
    const clearInputs = () => {
        allInputs.forEach(item => {
            item.value = '';
        });
    };

    // обработчик события отправки формы для всех форм на странице,
    // отправляет данные посредством ajax и показывает сообщения
    allForms.forEach(item => {
        item.addEventListener('submit', (e) => {

            e.preventDefault();

            // создаем div-блок, в котором показываем сообщение
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            // NEW дополняем данными из первого и второго модального окна
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            sendPostData('assets/server.php', formData)
                .then(response => { // данные формы отправлены успешно
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure) // ошибка
                .finally(() => { // скрыть сообщение, очистить все формы
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;