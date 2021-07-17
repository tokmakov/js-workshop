export default class ShowInfo {
    constructor (triggers) {
        this.triggers = document.querySelectorAll(triggers);
    }

    init() {
        this.triggers.forEach(item => {
            item.addEventListener('click', () => {
                item.closest('.module__info-show').nextElementSibling.style.display = 'block';
            });
        });
    }
}