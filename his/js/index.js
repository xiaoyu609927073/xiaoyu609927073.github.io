$(function() {

    w = $(window).width();
    if (w > 750) {
        for (i = 1; i < 7; i++) {
            $('.skill-' + i).hover(function() {
                    $(this).children('.skill-li-div').fadeIn('slow');
                },
                function() {
                    $(this).children('.skill-li-div').fadeOut(10);
                });
        };
    } else {
        $('.footer-tips').css('display', 'none');
    };


})