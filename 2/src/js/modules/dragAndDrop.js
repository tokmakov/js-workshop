const dragAndDrop = () => {
    /*
     * Ряд событий срабатывают на протяжении всей процедуры drag and drop. Только drag-события
     * срабатывают на протяжении операции перемещения; события мыши, такие как mousemove — нет.
     * События dragstart и dragend не срабатывают при переносе файла из операционной системы 
     * в браузер. Вместо этого при переносе файла из ОС следует использовать события dragenter,
     * dragleave и dragover.
     * 
     * Событие dragenter срабатывает, когда перемещаемый элемент входит в зону, принимающей
     * перетаскиваемые элементы.
     * 
     * Событие dragleave срабатывает, когда перемещаемый элемент выходит за пределы зоны,
     * принимающей перетаскиваемые элементы.
     * 
     * Событие dragover срабатывает каждые несколько сотен миллисекунд, когда перемещаемый
     * элемент оказывается над зоной, принимающей перетаскиваемые элементы. 
     * 
     * Событие drop вызывается для элемента, над которым произошло сбрасывание перемещаемого
     * элемента.
     */
    const fileInputs = document.querySelectorAll('[name="upload"]');

    // браузер имеет свой собственный drag and drop, который запускается автоматически и
    // будет конфликтовать с нашей реализацией, поэтому отключаем поведение по умолчанию
    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, (event) => {
                event.preventDefault();
                event.stopPropagation();
            });
        });
    });

    // когда перетаскиваемый файл находится над элементом input[type="file"], мы
    // выделяем область, где можно этот файл бросить — это подсказка пользователю
    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => {
                input.closest('.file_upload').style.border = '1px solid red';
                input.closest('.file_upload').style.backgroundColor = 'yellow';
            });
        });
    });

    // когда перетаскиваемый файл покидает элемент input[type="file"] или пользователь
    // бросает файл, мы снимаем выделение области, которое создали ранее
    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => {
                input.closest('.file_upload').style.border = 'none';
                input.closest('.file_upload').style.backgroundColor = 'transparent';
            });
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (event) => {
            /*
             * Объект DataTransfer используется для хранения данных, перетаскиваемых мышью во
             * время операции drag and drop. Объект может быть получен из свойства dataTransfer
             * всех событий перетаскивания. Он не может быть отдельно создан. Свойство files
             * содержит список локальных файлов, которые перетаскиваются из ОС в браузер.
             */
            input.files = event.dataTransfer.files;

            // обрезаем оригинальное имя файла в операционной системе
            const orig = input.files[0].name; // оригинальное имя
            const parts = orig.split('.'); // имя и расширение
            const dots = parts[0].length > 10 ? '...' : '.';
            parts[0] = parts[0].length > 10 ? parts[0].substr(0, 10) : parts[0];
            const name = parts[0] + dots + parts[1]; // обрезанное имя
            // показываем имя выбраного файла в div-блоке
            input.previousElementSibling.textContent = name;
        });
    });
};

export default dragAndDrop;