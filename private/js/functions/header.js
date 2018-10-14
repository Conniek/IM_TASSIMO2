'use strict';

export default function() {

    // Menu open/close
    $('.js-menu').on('click', function() {

        $('.header__menu').slideToggle();
        $(this).toggleClass('active');
        $('.js-waypoint-content').toggleClass('in-header');

    });

    // Menu close on navigation link
    $('.js-menu-nav').on('click', function(e) {

        e.preventDefault();
        $('.js-menu').removeClass('active');
        $('.js-waypoint-content').removeClass('in-header');

        if( !$('html').hasClass('desktop') ) {
            $('.header__menu').slideUp();
        }

    });

};
