const changeModalState = (state) => {
    const windowShape = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'), 
          windowHeight = document.querySelectorAll('#height'), 
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    function bindActionToNodes(event, node, prop) {
        node.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i + 1;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'cold' : state[prop] = 'warm';
                            node.forEach((box, j) => {
                                box.checked = false;
                                if (i === j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;
                }
            });
        });
    }

    // выбор формы окна для остекления
    bindActionToNodes('click', windowShape, 'shape');
    // ширина и высота в миллиметрах
    bindActionToNodes('input', windowHeight, 'height');
    bindActionToNodes('input', windowWidth, 'width');
    // тип остекления балкона
    bindActionToNodes('change', windowType, 'type');
    // теплое или холодное
    bindActionToNodes('change', windowProfile, 'profile');
};

export default changeModalState;