const images = () => {
    // создаем div-элемент модального окна
    const imgPopup = document.createElement('div');
    // секция, где расположены все изображения
    const  workSection = document.querySelector('.works');
    // создаем img-элемент большого изображения
    const  bigImage = document.createElement('img');

    // добавляем css-класс, который затемняет страницу
    imgPopup.classList.add('popup');
    // модальное окно вставляем как дочерний элемент секции
    workSection.appendChild(imgPopup);

    // центрируем изображение по горизонтали и вертикали
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    // внутрь модального окна вставляем большое изображение
    imgPopup.appendChild(bigImage);

    // обработчик события клика вешаем на секцию, а потом
    // проверяем, по какому именно изображению кликнули
    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        // если был клик по маленькому изображению
        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }
        // если был клик за пределами большого изображения,
        // значит надо закрыть модальное окно изображения
        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
        }
    });
};

export default images;