const calc = (sizeSelector, canvasSelector, optionSelector, promoSelector, resultSelector) => {
    const sizeBlock = document.querySelector(sizeSelector),
          canvasBlock = document.querySelector(canvasSelector),
          optionBlock = document.querySelector(optionSelector),
          promoBlock = document.querySelector(promoSelector),
          resultBlock = document.querySelector(resultSelector);

    const showSum = () => {
        let size = parseFloat(sizeBlock.value),
            canvas = parseFloat(canvasBlock.value),
            option = parseFloat(optionBlock.value);

        let sum = Math.round(size * canvas + option);

        if (sizeBlock.value == '0' || canvasBlock.value == '0') {
            resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
        } else if (promoBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', showSum);
    canvasBlock.addEventListener('change', showSum);
    optionBlock.addEventListener('change', showSum);
    promoBlock.addEventListener('input', showSum);
};

export default calc;