export default class Slider {

    constructor({container, next, prev} = {}) {
        this.error = false;

        this.container = document.querySelector(container); // контейнер слайдов
        if (this.container === null) {
            this.error = true;
            return;
        }
        this.slides = this.container.children; // все слайды слайдера
        if (this.slides.length === 0) {
            this.error = true;
            return;
        }

        this.next = document.querySelectorAll(next); // кнопки вперед
        this.prev = document.querySelectorAll(prev); // кнопки назад
        this.slideIndex = 0; // индекс текущего слайда, начиная с нуля
    }

    // показывает слайд с индексом slideIndex
    showSlide() {
        // если индекс слайда выходит за пределы
        if (this.slideIndex >= this.slides.length) {
            this.slideIndex = 0;
        }
        if (this.slideIndex < 0) {
            this.slideIndex = this.slides.length - 1;
        }
        // сначала скрываем все слайды...
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = 'none';
        }
        // ...потом показываем нужный
        this.slides[this.slideIndex].style.display = 'block';
    }

    // смещает указатель текущего слайда на число number; число может
    // быть как положительным (вперед), так и отрицательным (назад)
    shiftSlider(number = 1) {
        this.slideIndex = this.slideIndex + number;
        this.showSlide();
    }

    // выполняет всю работу по подготовке слайдера к работе
    // и показывает первый слайд
    render() {
        if (this.error) return;

        this.next.forEach(item => {
            // при клике «вперед» — переход к следующему слайду
            item.addEventListener('click', () => {
                this.shiftSlider();
            });
        });

        this.prev.forEach(item => {
            // при клике «назад» — переход к предыдущему слайду
            item.addEventListener('click', () => {
                this.shiftSlider(-1);
            });
        });

        // показать первый слайд (с индексом ноль)
        this.showSlide();
    }
}