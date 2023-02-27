$(function () {

    //Всплывабщая подсказка справа
    $(".px-2").fadeIn(3000, function () {
        $(".my-4").each(function (i) {
            $(this).delay(500 * i).fadeIn(2000);
        });
    });

    //Увеличение фотографии при наведении на неё
    $('.card-img-top').hover(function () {
        $(this).css({
            'position': 'absolute',
            'z-index': '9999',
            'transform': 'scale(1.5)',
            'transition': 'transform 0.3s ease-in-out'
        });
    }, function () {
        $(this).css({
            'position': '',
            'z-index': '',
            'transform': '',
            'transition': ''
        });
    });

    $('.card-img-top').on('click', function () {
        // Предотвращаем повторное нажатие на изображение, когда оно уже открыто
        if ($('.overlay').length > 0) {
            return;
        }

        var description = $(this).attr('data-description');
        var overlay = $('<div class="overlay"></div>');
        var popup = $('<div class="popup">' + description + '</div>');

        // Добавляем наложение "затемнения"
        overlay.appendTo('body');

        // Добавляем всплывающее окно
        popup.appendTo('body');

        // Предотвращаем взаимодействие с элементами под наложением "затемнения"
        $('body').css('overflow', 'hidden');

        // Центрируем всплывающее окно по вертикали и горизонтали
        var topOffset = ($(window).height() - popup.outerHeight()) / 2;
        var leftOffset = ($(window).width() - popup.outerWidth()) / 2;
        popup.css({
            'top': topOffset + 'px',
            'left': leftOffset + 'px'
        });

        // Закрытие всплывающего окна и наложения "затемнения"
        $('.overlay, .popup').on('click', function () {
            $('.overlay, .popup').remove();
            $('body').css('overflow', 'auto');
        });

        // Предотвращаем закрытие всплывающего окна при клике на само окно
        $('.popup').on('click', function (event) {
            event.stopPropagation();
        });
    });

    // Событие клика по изображению
    $('.card-img-top').on('click', function () {
        // Возвращаем изображение в исходное состояние
        $(this).css({
            'position': '',
            'z-index': '',
            'transform': '',
            'transition': ''
        });
    });
});