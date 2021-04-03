const pictureSize = (blockSelector) => {
    const blocks = document.querySelectorAll(blockSelector);

    const showImage = (block) => {
        const image = block.querySelector('img');
        // assets/img/sizes-1.png => assets/img/sizes-1-1.png
        image.src = image.src.replace('.png', '-1.png');
        // скрыть размер холста и цену, которые внутри <p>
        block.querySelectorAll('p:not(.sizes-hit)').forEach(item => {
            item.style.display = 'none';
        });
    };

    const hideImage = (block) => {
        const image = block.querySelector('img');
        // assets/img/sizes-1-1.png => assets/img/sizes-1.png
        image.src = image.src.replace('-1.png', '.png');
        // показать размер холста и цену, которые внутри <p>
        block.querySelectorAll('p:not(.sizes-hit)').forEach(item => {
            item.style.display = 'block';
        });
    };

    blocks.forEach(item => {
        item.addEventListener('mouseenter', () => {
            showImage(item);
        });
        item.addEventListener('mouseleave', () => {
            hideImage(item);
        });
    });
};

export default pictureSize;