export default class VideoPlayer {

    constructor(triggers, overlay) {
        this.triggers = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
        this.player = undefined;
        this.options = undefined; // опции плеера
    }

    // обработка события клика для всех кнопок запуска видео
    bindTriggers() {
        this.triggers.forEach(item => {
            item.addEventListener('click', () => {
                this.handlePlayClick(item);
            });
        });
    }

    // обработка события клика для одной кнопки запуска видео
    handlePlayClick(item) {
        this.overlay.style.display = 'flex';
        // если плеер уже был создан ранее с другим видео, нужно удалить
        // iframe#frame и восстановить div#frame, чтобы создать новый
        if (this.player) {
            this.player.destroy();
        }
        this.createPlayer(item.dataset.url);
    }

    // устанавливаем настройки плеера перед его созданием
    setPlayerOptions() {
        this.options = {
            height: '100%',
            width: '100%'
        }
    }

    // создаем проигрыватель с использованием YouTube Player API
    createPlayer(id) {
        this.setPlayerOptions();
        this.options.videoId = id;
        this.player = new YT.Player('frame', this.options);
    }

    // при клике на крестик убираем overlay и останавливаем видео
    bindClose() {
        this.close.addEventListener('click', () => {
            this.overlay.style.display = 'none';
            this.player.stopVideo();
        });
    }

    // инициализация проигрывателя, подключение API и обработчики событий
    init() {
        // подключаем YouTube Player API
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        // обработчики события клика для всех кнопок запуска видео
        this.bindTriggers();
        // обработчик события клика на кнопку крестика (закрыть)
        this.bindClose();
    }
}