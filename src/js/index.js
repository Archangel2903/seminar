import '../scss/main.scss';
import $ from 'jquery';
import 'bootstrap';
import 'popper.js';
import 'slick-carousel'

$(window).on('load', function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    }

    $('body').removeClass('loaded');
});

$(window).on('load resize', function () {
    $('.scroll-down').on('click', function (e) {
        $('html, body').stop().animate({
            scrollTop: window.innerHeight
        }, 1000);
        e.preventDefault();
    });

    if (window.innerHeight >= 550) {
        $('.main-section').height(window.innerHeight);
    }
});

$(function () {
    $('.slick-slider').each(function () {
        if($(this).hasClass('reviews')){

        }

        $(this).slick({
            arrows: true,
            prevArrow: '<button class="slick-prev slick-arrow"><svg><use xlink:href="img/spritemap.svg#sprite-chevron-left"></use></svg></button>',
            nextArrow: '<button class="slick-next slick-arrow"><svg><use xlink:href="img/spritemap.svg#sprite-chevron-right"></use></svg></button>',
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            adaptiveHeight: true
        });
    });
});