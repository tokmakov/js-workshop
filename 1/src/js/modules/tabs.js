const tabs = (headerSelector, tabSelector, bodySelector, activeClass) => {
    const header = document.querySelector(headerSelector), // контейнер для переключателей
          tabLinks = document.querySelectorAll(tabSelector), // переключатели вкладок
          tabBodies = document.querySelectorAll(bodySelector); // содержимое вкладок

    // скрывает содержимое всех вкладок
    function hideTabContent() {
        tabBodies.forEach(item => {
            item.style.display = 'none';
        });
        tabLinks.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    // показывает содержимое вкладки с номером i
    function showTabContent(i = 0) {
        tabBodies[i].style.display = 'block';
        tabLinks[i].classList.add(activeClass);
    }

    // сразу после загрузки страницы скрываем все вкладки
    // и показываем содержимое первой вкладки
    hideTabContent();
    showTabContent();

    // при клике на контейнере переключателей выясняем, по какой ссылке
    // был клик — делаем эту вкладку активной и показываем этот контент
    header.addEventListener('click', (e) => {
        const target = e.target,
              tabSelectorClass = tabSelector.replace('.', ''),
              tabLinkHasClass = target.classList.contains(tabSelectorClass),
              parentHasClass = target.parentNode.classList.contains(tabSelectorClass);
        if (target && (tabLinkHasClass || parentHasClass)) {
            tabLinks.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;