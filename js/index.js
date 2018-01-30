$(function() {
    for (i = 1; i < 7; i++) {
        $('.skill-' + i).hover(function() {
                $(this).children('.skill-li-div').fadeIn('slow');
            },
            function() {
                $(this).children('.skill-li-div').fadeOut(10);
            });
    };

})