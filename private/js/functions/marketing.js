'use strict';

export default function() {

    let wrapper = $('.fixable .js-waypoint-wrapper'),
        content = $('.fixable .js-waypoint-content');

    let placeholderHeight = function() {
        //wrapper.css('height', content.innerHeight());

        if( $('.footer').length ) {
            wrapper.waypoint(function(dir) {
                dir === 'down' ? content.removeClass('fixed') : content.addClass('fixed');
            }, {
                offset: 'bottom-in-view'
            });
        } else {
            $('.screen').last().waypoint(function(dir) {
                dir === 'down' ? content.removeClass('fixed') : content.addClass('fixed');
            }, {
                offset: 'bottom-in-view'
            });
        }
    };

    $(window).on('resize', placeholderHeight);
    placeholderHeight();

    $('body').waypoint(function(dir) {
        dir === 'down' ? content.addClass('fixed') : content.removeClass('fixed');
    }, {
        offset: -10
    });





}
