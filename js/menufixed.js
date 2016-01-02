$(document).ready(function(){
    var altura = $('.menu').offset().top;
    var altura2 = $('.icon-tito').offset().top;

    $(window).on('scroll', function(){
        if ( $(window).scrollTop() > altura ){
            $('.menu').addClass('menu-fixed');

        }
        else {
            $('.menu').removeClass('menu-fixed');

        }
    });

});