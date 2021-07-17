import $ from '../core.js';

$.extensions.carousel = function(autoplay = true) {

    /*
     * <div class="carousel"> width: 100% (от контейнера .container 900px)
     *     <div class="carousel-window"> width: 100% (от родителя 900px); height: 500px
     *         <div class="carousel-slides"> display: flex, style.width = 300% (2700px)
     *             <div class="carousel-item">...</div> style.width = 33.33333% (900px)
     *             <div class="carousel-item">...</div> style.width = 33.33333% (900px)
     *             <div class="carousel-item">...</div> style.width = 33.33333% (900px)
     *         </div>
     *     </div>
     * </div>
     * Можно сказать, что carousel-window представляет собой окно просмотра 900x500px,
     * в этом окне просмотра виден одновременно только один кадр (слайд). Элемент
     * carousel-slides представляет из себя цепочку из трех кадров (как в кино). Эти
     * кадры выстроены по горизонтали благодаря display:flex. При клике на кнопки
     * next и prev — цепочка смещается влево, и в окне просмотра появляется очередной
     * кадр (слайд).
     */

    class Slider {
        constructor(slider, autoplay = true) {
            this.slider = slider;
            // все кадры (слайды)
            this.allFrames = $(slider).find('.carousel-item');
            // цепочка кадров
            this.frameChain = $(slider).find('.carousel-slides');
            // кнопка «вперед»
            this.nextButton = $(slider).find('.carousel-next');
            // кнопка «назад»
            this.prevButton = $(slider).find('.carousel-prev');

            this.index = 0; // индекс кадра, который сейчас в окне просмотра
            this.length = this.allFrames.length; // сколько всего есть кадров
            this.autoplay = autoplay; // включить автоматическую прокрутку?
            this.paused = null; // чтобы можно было выключать автопрокрутку

            this.dotButtons = this.dots(); // создать индикатор текущего кадра
        }

        init() {
            // все кадры должны быть одной ширины, равной ширине окна просмотра;
            // если кадров три, то ширина каждого кадра будет 100/3 = 33.33333%
            // от ширины контейнера .carousel-slides, то есть 900 пикселей
            this.allFrames.css('width', 100/this.length + '%');
            // ширина цепочки кадров должна равна ширине всех кадров, то есть
            // 900*3 = 2700 пикселей; но удобнее задать в процентах от родителя,
            // если кадров три, то ширина контейнера кадров будет 100*3 = 300%
            this.frameChain.css('width', 100 * this.length + '%');

            this.nextButton.click(event => { // клик по кнопке «вперед»
                event.preventDefault();
                this.next();
            });

            this.prevButton.click(event => { // клик по кнопке «назад»
                event.preventDefault();
                this.prev();
            });

            this.dotButtons.click(event => { // клик по кнопке индикатора
                event.preventDefault();
                const index = this.dotButtons.indexOf(event.target);
                if (index === this.index) return;
                this.goto(index);
            });

            if (this.autoplay) { // включить автоматическую прокрутку?
                this.play();
                // когда мышь над слайдером — останавливаем автоматическую прокрутку
                $(this.slider).on('mouseenter', () => {
                    clearInterval(this.paused);
                });
                // когда мышь покидает пределы слайдера — опять запускаем прокрутку
                $(this.slider).on('mouseleave', () => {
                    this.play();
                });
            }
        }

        // перейти к кадру с индексом index
        goto(index) {
            // изменить текущий индекс...
            if (index > this.length - 1) {
                this.index = 0;
            } else if (index < 0) {
                this.index = this.length - 1;
            } else {
                this.index = index;
            }
            // ...и выполнить смещение
            this.move();
        }

        // перейти к следующему кадру
        next() {
            this.goto(this.index + 1);
        }

        // перейти к предыдущему кадру
        prev() {
            this.goto(this.index - 1);
        }

        // рассчитать и выполнить смещение
        move() {
            // на сколько нужно сместить, чтобы нужный кадр попал в окно
            const offset = 100/this.length * this.index;
            this.frameChain.css('transform', `translateX(-${offset}%)`);
            this.dotButtons.removeClass('active');
            this.dotButtons[this.index].classList.add('active');
        }

        // запустить автоматическую прокрутку
        play() {
            this.paused = setInterval(() => this.next(), 3000);
        }

        // создать индикатор текущего слайда
        dots() {
            const ol = document.createElement('ol');
            ol.classList.add('carousel-indicators');
            for (let i = 0; i < this.length; i++) {
                let li = document.createElement('li');
                if (i === 0) li.classList.add('active');
                ol.append(li);
            }
            this.slider.prepend(ol);
            return $(ol).children();
        }
    }

    for (let i = 0; i < this.length; i++) {
        new Slider(this[i], autoplay).init();
    }
};

$('.carousel').carousel();