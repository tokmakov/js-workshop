import Slider from './Slider';

export default class MiniSlider extends Slider {

    constructor({container, next, prev, autoplay, current}) {
        super({container: container, next: next, prev: prev});
        this.autoplay = autoplay ? true : false;
        // если пользователь хочет сам управлять покруткой слайдера, то
        // autoplay будет ему мешать; поэтому автопрокрутка не будет
        // работать, когда указатель мыши над блоком wrapper, который
        // содержит сам слайдер и кнопки управления
        this.playing = undefined;
        try {
            this.wrapper = this.container.parentNode;
        } catch (e) {
            this.error = true;
        }
        // дополнительный css-класс для активного слайда
        this.current = current;
    }

    // выполняет всю работу по подготовке слайдера к работе
    render() {
        if (this.error) return;

        this.next.forEach(item => {
            item.addEventListener('click', () => {
                this.forward();
            });
        });

        this.prev.forEach(item => {
            item.addEventListener('click', () => {
                this.backward();
            });
        });

        // запускаем автоматическую прокрутку
        if (this.autoplay) {
            this.startPlay();
            // когда мышь над блоком wrapper — останавливаем автоматическую прокрутку
            this.wrapper.addEventListener('mouseenter', () => {
                this.stopPlay();
            });
            // когда мышь покидает блок wrapper — запускаем автоматическую прокрутку
            this.wrapper.addEventListener('mouseleave', () => {
                this.startPlay();
            });
        }
    }

    // запускает автоматическую прокрутку
    startPlay() {
        this.playing = setInterval(() => {
            this.forward();
        }, 3000);
    }

    // останавливает автоматическую прокрутку
    stopPlay() {
        clearInterval(this.playing);
    }

    // вперед — первая картинка помещается после последней
    forward() {
        while (this.slides[1].tagName === 'BUTTON') {
            this.container.append(this.slides[1]);
        }
        this.container.append(this.slides[0]);
        this.active();
    }

    // назад — последняя картинка помещается перед первой
    backward() {
        for (let i = this.slides.length - 1; i > 0; i--) {
            if (this.slides[i].tagName !== 'BUTTON') {
                this.container.prepend(this.slides[i]);
                break;
            }
        }
        this.active();
    }

    // добавляет дополнительный css-класс для первого слайда
    active() {
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].classList.remove(this.current);
        }
        this.slides[0].classList.add(this.current);
    }
}