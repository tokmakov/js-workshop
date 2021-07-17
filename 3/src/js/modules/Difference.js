export default class Difference {
    constructor(blockSelector, triggerSelector) {
        this.error = false;

        this.block = document.querySelectorAll(blockSelector);
        if (this.block.length === 0) {
            this.error = true;
        }
        this.trigger = document.querySelector(triggerSelector);
        if (this.trigger === null) {
            this.error = true;
            return;
        }

        this.counter = 0;
    }

    init() {
        if (this.error) return;

        this.block.forEach(item => {
            item.style.display = 'none';
        });
        this.trigger.addEventListener('click', (event) => {
            if (this.counter < 3) {
                this.block[this.counter].style.display = 'flex';
                this.counter++;
                if (this.counter === 3) {
                    event.currentTarget.style.display = 'none';
                }
            }
        });
    }
}