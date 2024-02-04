$(document).ready(function () {

    //navbar toggle
    $('.navbar-toggler').click(function () {
        $(this).toggleClass('active');
        $('header').toggleClass('bg-white');
    });

    //owl carousel

    $('.testimonial-carousel').owlCarousel({
        items: 3,
        loop: true,
        dots: false,
        responsiveClass: true,
        navText: ["<i class='lnr lnr-chevron-left'></i>", "<i class='lnr lnr-chevron-right'></i>"],
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            },
            991: {
                items: 3
            }
        }
    });

});

$(window).on('load', function() {
    $(this).scrollTop(0);
    //sticky header
    $(window).scroll(function () {

        var ws = $(window).scrollTop();
        var nav_height = $('header').outerHeight();
        var header_top = $('header');
        if (ws >= nav_height) {
            header_top.addClass("fixed");
        } else {
            header_top.removeClass("fixed");
        }
    });

});