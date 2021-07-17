export default class Slider {

    constructor(container, controls) {
        this.container = document.querySelector(container); // контейнер слайдов
        this.slides = this.container.children; // все слайды слайдера
        this.controls = document.querySelectorAll(controls); // кнопки управления
        this.slideIndex = 1; // номер текущего слайда
        this.showHanson();
    }

    // показывает слайд с номером number
    showSlide(number) {
        // если номер слайда выходит за пределы
        if (number > this.slides.length) {
            this.slideIndex = 1;
        }
        if (number < 1) {
            this.slideIndex = this.slides.length;
        }
        // сначала скрываем все слайды...
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = 'none';
        }
        // ...потом показываем нужный
        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    // скрывает блок с css-классом hanson, который расположен на третьем слайде
    // и показывает его через три секунды после перехода к третьему слайду
    showHanson() {
        this.hanson = document.querySelector('.hanson');
        if (!this.hanson) {
            return;
        }
        this.hanson.style.opacity = '0';
        this.hanson.classList.add('animated');
        // каждые 100 мс запускаем анонимную функцию, которая будет проверять
        // значение номера текущего слайда; если это третий слайд — через три
        // секунды блок .hanson будет показан, иначе этот блок будет скрыт
        setInterval(() => {
            if (this.slideIndex === 3) {
                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('slideInUp');
                }, 3000);
            } else {
                this.hanson.style.opacity = '0';
                this.hanson.classList.remove('slideInUp');
            }
        }, 100);
    }

    // смещает указатель текущего слайда на число number
    shiftSlider(number = 1) {
        this.slideIndex = this.slideIndex + number;
        this.showSlide(this.slideIndex);
    }

    // выполняет всю работу по подготовке слайдера к работе
    // и показывает слайд с номером slideIndex
    render() {
        this.controls.forEach(item => {
            // при клике по стрелке, переход к следующему слайду
            item.addEventListener('click', () => {
                this.shiftSlider();
            });
            // переход к первому слайду при клике на логотип
            item.parentNode.previousElementSibling.addEventListener('click', (event) => {
                event.preventDefault();
                this.slideIndex = 1;
                this.showSlide(this.slideIndex);
            });
        });

        // показать слайд с номером slideIndex
        this.showSlide(this.slideIndex);
    }
}