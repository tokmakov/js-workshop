import {getResource} from '../services/request';

const showMoreStyles = (buttonSelector, wrapperSelector) => {
    const button = document.querySelector(buttonSelector),
          wrapper = document.querySelector(wrapperSelector);

    button.addEventListener('click', () => {
        getResource('assets/resource.php')
            .then(response => createBlocks(response.styles))
            .catch(error => console.log(error));
        button.remove();
    });

    function createBlocks(response) {
        response.forEach(item => {
            let block = document.createElement('div');
            block.classList.add(
                'col-sm-3',
                'col-sm-offset-0',
                'col-xs-10',
                'col-xs-offset-1',
                'animated',
                'fadeInUp'
            );
            let inner = `
            <div class="styles-block">
                <img src="${item.src}" alt="">
                <h4>${item.title}</h4>
                <a href="${item.link}">Подробнее</a>
            </div>
            `;
            block.innerHTML = inner;
            wrapper.appendChild(block);
        });
    }
};

export default showMoreStyles;