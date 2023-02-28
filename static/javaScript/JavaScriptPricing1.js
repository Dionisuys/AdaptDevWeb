document.addEventListener("DOMContentLoaded", function () {

    //Всплывабщая подсказка справа --------------------------

    // Получаем все элементы с классом "px-2"
    const pxElements = document.querySelectorAll('.px-2');

    // Показываем элементы с классом "px-2"
    pxElements.forEach(pxElement => {
        pxElement.style.display = 'block';
        pxElement.style.opacity = '0';
        fadeIn(pxElement, 3000);
    });

    // Показываем все элементы с классом "my-4" с задержкой
    const myElements = document.querySelectorAll('.my-4');
    myElements.forEach((myElement, i) => {
        myElement.style.display = 'block';
        myElement.style.opacity = '0';
        setTimeout(() => {
            fadeIn(myElement, 2000);
        }, 500 * i);
    });

    // Функция для плавного появления элемента
    function fadeIn(element, duration) {
        let opacity = 0;
        const interval = 50;
        const gap = interval / duration;

        function setOpacity() {
            opacity += gap;
            element.style.opacity = opacity;

            if (opacity >= 1) {
                clearInterval(fadeInterval);
            }
        }

        const fadeInterval = setInterval(setOpacity, interval);
    }
    //-------------------------------------------------------

    //Увеличение фотографии при наведении на неё-------------

    // Получаем все элементы с классом "card-img-top"
    const cardImgTops = document.querySelectorAll('.card-img-top');

    // Добавляем обработчик событий для каждого элемента
    cardImgTops.forEach(cardImgTop => {
        cardImgTop.addEventListener('mouseenter', function () {
            this.style.position = 'absolute';
            this.style.zIndex = '9999';
            this.style.transform = 'scale(1.5)';
            this.style.transition = 'transform 0.3s ease-in-out';
        });

        cardImgTop.addEventListener('mouseleave', function () {
            this.style.position = '';
            this.style.zIndex = '';
            this.style.transform = '';
            this.style.transition = '';
        });
    });
    //-------------------------------------------------------

    //Отоброжение текста, который содержиться в data-description

    // Сохраняем ссылку на все элементы с классом 'card-img-top'
    var images = document.querySelectorAll('.card-img-top');

    // Обработчик события клика по изображению
    var handleImageClick = function () {
        // Предотвращаем повторное нажатие на изображение, когда оно уже открыто
        if (document.querySelector('.overlay')) {
            return;
        }

        var description = this.getAttribute('data-description');
        var overlay = document.createElement('div');
        overlay.classList.add('overlay');
        var popup = document.createElement('div');
        popup.classList.add('popup');
        popup.textContent = description;

        // Добавляем наложение "затемнения"
        document.body.appendChild(overlay);

        // Добавляем всплывающее окно
        document.body.appendChild(popup);

        // Предотвращаем взаимодействие с элементами под наложением "затемнения"
        document.body.style.overflow = 'hidden';

        // Центрируем всплывающее окно по вертикали и горизонтали
        var topOffset = (window.innerHeight - popup.offsetHeight) / 2;
        var leftOffset = (window.innerWidth - popup.offsetWidth) / 2;
        popup.style.top = topOffset + 'px';
        popup.style.left = leftOffset + 'px';

        // Закрытие всплывающего окна и наложения "затемнения"
        var handlePopupClick = function () {
            document.querySelector('.overlay').remove();
            popup.remove();
            document.body.style.overflow = 'auto';
        };
        overlay.addEventListener('click', handlePopupClick);
        popup.addEventListener('click', function (event) {
            event.stopPropagation();
        });

        // Увеличиваем изображение
        this.style.position = 'absolute';
        this.style.zIndex = '9999';
        this.style.transform = 'scale(1.5)';
        this.style.transition = 'transform 0.3s ease-in-out';
    };

    // Обработчик события клика на всплывающее окно
    var handlePopupClick = function () {
        document.querySelector('.overlay').remove();
        document.querySelector('.popup').remove();
        document.body.style.overflow = 'auto';
    };

    // Обработчик события клика по изображению для возврата в исходное состояние
    var handleImageClickReset = function () {
        this.style.position = '';
        this.style.zIndex = '';
        this.style.transform = '';
        this.style.transition = '';
    };

    // Добавляем обработчик события клика на каждое изображение
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', handleImageClick);
        images[i].addEventListener('click', handleImageClickReset);
    }

    // Добавляем обработчик события клика на всплывающее окно
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('popup')) {
            handlePopupClick();
        }
    });
    //-------------------------------------------------------
});