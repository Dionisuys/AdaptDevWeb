$(function () {
    $('.px-2').show(1500);

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
});