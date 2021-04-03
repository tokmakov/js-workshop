const accordion = (triggerSelector, contentSelector) => {
    const triggers = document.querySelectorAll(triggerSelector),
          contents = document.querySelectorAll(contentSelector);

    // для красивой анимации при показе ответа
    contents.forEach(item => {
        item.classList.add('animated', 'fadeInDown');
        item.style.display = 'none';
    });

    // сразу покажем ответ на первый вопрос
    contents[0].style.display = 'block';

    // обработчик события клика для каждого вопроса
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            // ответы на все прочие вопросы скрываем...
            contents.forEach(content => {
                content.style.display = 'none';
            });
            // ...показываем только ответ на этот вопрос
            trigger.nextElementSibling.style.display = 'block';
        });
    });
};

export default accordion;