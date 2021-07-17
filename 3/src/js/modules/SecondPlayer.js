import VideoPlayer from './VideoPlayer';

export default class SecondPlayer extends VideoPlayer {

    constructor(triggers, overlay) {
        super(triggers, overlay);
    }

    // обработка события клика для всех кнопок запуска видео
    bindTriggers() {
        this.triggers.forEach(item => {
            item.addEventListener('click', () => {
                // кнопка запуска второго видео не будет ничего делать;
                // но после просмотра первого видео, мы убираем css-класс
                // closed, так что условие ниже уже не сработает
                if (item.querySelector('.play__circle.closed')) {
                    return;
                }
                // нажатую кнопку запуска первого видео сохраняем, чтобы
                // по аналогии сделать кнопку запуска второго видео
                this.playButton = item;

                this.handlePlayClick(item);
            });
        });
    }

    // устанавливаем настройки плеера перед его созданием
    setPlayerOptions() {
        super.setPlayerOptions();
        this.options.events = {
            'onStateChange': this.onPlayerStateChange.bind(this)
        };
    }

    onPlayerStateChange(event) {
        // если первое видео просмотрено до конца
        if (event.data === YT.PlayerState.ENDED) {
            const secondVideo = this.playButton.closest('.module__video-item').nextElementSibling;
            if (secondVideo) { // если есть второе видео после первого
               /*
                * 1. Убрать css-класс .closed у кнопки запуска видео
                * 2. Заменить svg-иконку внутри кнопки запуска видео
                * 3. Убрать текст Please watch the first video before
                * 4. Изменить стили блока видео (filter и opacity)
                * Здесь самый важный момент, что мы убираем css-класс
                * .closed, из-за которого второе видео не запускается
                */
                secondVideo.querySelector('.play__circle').classList.remove('closed');
                secondVideo.querySelector('svg').remove();
                const playIcon = this.playButton.querySelector('svg').cloneNode(true);
                secondVideo.querySelector('.play__circle').appendChild(playIcon);
                secondVideo.querySelector('.play__text').textContent = 'play video';
                secondVideo.querySelector('.play__text').classList.remove('attention');
                secondVideo.style.cssText = `
                    opacity: 1;
                    filter: none;
                `;
            }
        }
    }
}