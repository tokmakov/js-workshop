import Slider from './Slider';

export default class MainSlider extends Slider {

    constructor({container, next}) {
        super({container: container, next: next});
        this.logo = document.querySelector('.sidecontrol > a');
        if (this.logo === null) this.error = true;
        this.showHanson();
    }

    // скрывает блок с css-классом hanson, который расположен на третьем слайде
    // и показывает его через три секунды после перехода к третьему слайду
    showHanson() {
        let hanson = document.querySelector('.hanson');
        if (!hanson) {
            return;
        }
        hanson.style.opacity = '0';
        hanson.classList.add('animated');
        // каждые 100 мс запускаем анонимную функцию, которая будет проверять
        // значение индекса текущего слайда; если это третий слайд — через три
        // секунды блок .hanson будет показан, иначе этот блок будет скрыт
        setInterval(() => {
            if (this.slideIndex === 2) {
                setTimeout(() => {
                    hanson.style.opacity = '1';
                    hanson.classList.add('slideInUp');
                }, 3000);
            } else {
                hanson.style.opacity = '0';
                hanson.classList.remove('slideInUp');
            }
        }, 100);
    }

    render() {
        super.render();
        if (this.error) return;

        // переход к первому слайду при клике на логотип
        this.logo.addEventListener('click', (event) => {
            event.preventDefault();
            this.slideIndex = 0;
            this.showSlide();
        });
    }
}