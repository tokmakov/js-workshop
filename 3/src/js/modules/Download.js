export default class Download {
    constructor(triggers) {
        this.triggers = document.querySelectorAll(triggers);
        this.path = 'assets/document.pdf';
    }

    download(path) {
        // создаем ссылку, добавляем атрибуты href и download
        const link = document.createElement('a');
        link.setAttribute('href', path);
        link.setAttribute('download', 'NiceName');
        link.style.display = 'none';
        document.body.append(link);
        // вызываем событие клика, чтобы начать скачивание pdf
        link.click();
        // больше ссылка не нужна, поэтому удаляем ее из DOM
        link.remove();
    }

    init() {
        this.triggers.forEach(item => {
            item.addEventListener('click', () => {
                this.download(this.path);
            });
        });
    }
}