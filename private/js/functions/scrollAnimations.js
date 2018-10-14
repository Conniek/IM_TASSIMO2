'use strict';

export default function(dest){

    $('.intro').waypoint(function (direction) {
        if (direction === 'down') {
            $('.intro__container--right').toggleClass('animRight');
        }else {
            $('.intro__container--right').toggleClass('animRight');
        }
    }, {
        offset: '80%'
    });

    $('.adv').waypoint(function (direction) {
        if (direction === 'down') {
            $('.adv_item--ico').toggleClass('flipInY');
        }else {
            $('.adv_item--ico').toggleClass('flipInY');
        }
    }, {
        offset: '80%'
    });


    $('.avis').waypoint(function (direction) {
        if (direction === 'down') {
            $('.avis__ico').toggleClass('fadeInRight');
            console.log("avis");
        }else {
            $('.avis__ico').toggleClass('fadeInRight');
        }
    }, {
        offset: '80%'
    });

    $('.intro').waypoint(function (direction) {

        if (direction === 'down') {
            console.log("lor");
            $('.pack__item--1').toggleClass('fadeInRight');
            $('.pack__item--2').toggleClass('fadeInLeft');
            $('.pack__item--3').toggleClass('fadeInLeft');
            $('.pack__item--4').toggleClass('fadeInLeft');
            $('.tasse').toggleClass('fadeInRight');
            $('.suchards').toggleClass('fadeInRight');
            $('.twinings').toggleClass('fadeInRight');

        }else {
            console.log("up lor")
            $('.pack__item--1').toggleClass('fadeInRight');
            $('.pack__item--2').toggleClass('fadeInLeft');
            $('.pack__item--3').toggleClass('fadeInLeft');
            $('.pack__item--4').toggleClass('fadeInLeft');
            $('.tasse').toggleClass('fadeInRight');
            $('.suchards').toggleClass('fadeInRight');
            $('.twinings').toggleClass('fadeInRight');

        }
    }, {

    });

}
