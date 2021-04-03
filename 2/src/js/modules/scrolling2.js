const scrolling2 = (scrollupSelector) => {
    const scrollupButton = document.querySelector(scrollupSelector),
          allAnchorLinks = document.querySelectorAll('a[href^="#"]');

    // кнопку прокрутки вверх показываем, когда страница прокручена на два экрана вниз
    scrollupButton.style.display = 'none';
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > document.documentElement.clientHeight * 2) {
            scrollupButton.style.display = 'block';
        } else {
            scrollupButton.style.display = 'none';
        }
    });
    
    allAnchorLinks.forEach(item => {
        item.addEventListener('click', function(event) {
            // запрещаем браузеру переход к якорю, будем делать это сами
            event.preventDefault();

            let hash = this.hash;
            // положение элемента относительно окна браузера в пикселях: больше нуля,
            // если элемент ниже окна браузера и меньше нуля, если элемент выше окна
            let distWindowAnchor = document.querySelector(this.hash).getBoundingClientRect().top;
            // кол-во пикселей, на которые будем прокручивать страницу на каждом шаге
            let oneStepPixels = 100;
            // кол-во шагов, которые нужны, чтобы плавно прокрутить страницу к элементу
            let allStepCount = Math.ceil(Math.abs(distWindowAnchor / oneStepPixels));
            // текущий шаг, будем увеличивать значение, пока не достигнем allStepCount
            let curStepCount = 0;
            // за шаг мы смещаемся на oneStepPixels, но последний шаг может быть меньше
            let endStepPixels = Math.abs(Math.abs(distWindowAnchor) - oneStepPixels * allStepCount);

            requestAnimationFrame(smoothScroll);

            function smoothScroll() {
                curStepCount++;

                // на последнем шаге прокрутка может быть меньше, чем обычно
                let step = oneStepPixels;
                if (curStepCount === allStepCount) {
                    step = endStepPixels;
                }

                // очередной шаг вперед — чуть-чуть прокручиваем страницу
                if (distWindowAnchor > 0) { // прокрутка вниз
                    document.documentElement.scrollBy(0, step);
                } else { // прокрутка вверх
                    document.documentElement.scrollBy(0, -1 * step);
                }

                if (curStepCount < allStepCount) {
                    requestAnimationFrame(smoothScroll);
                } else {
                    location.hash = hash;
                }
            }
        });
    });
};

export default scrolling2;