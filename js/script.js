

$(window).on('load', function () {
   $(".head1").delay(500).fadeOut(); 
});

$(function () {
    $("#gallery-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});