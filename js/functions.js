$(document).ready(function() {
    $('.flip_card').on('click', function () {
    	if ($(this).hasClass('flipped')) {
    		$(this).removeClass('flipped');
    	}
    	else {
    		$(this).addClass('flipped');
    	}
    });

    // Popup
    $('.popup_link').on('click', function () {
        $('#screen_overlay').fadeIn();
        $('#popup_outer_container').fadeIn();
        $('body').addClass('modal_open');
    });
    $('#popup_exit').on('click', function () {
        $('#screen_overlay').fadeOut();
        $('#popup_outer_container').fadeOut();
        $('body').removeClass('modal_open');
    });
    $('#screen_overlay').on('click', function () {
        $('#screen_overlay').fadeOut();
        $('#popup_outer_container').fadeOut();
        $('body').removeClass('modal_open');
    });

});