'use strict';

export default function (trigger) {

    $('.responsive').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('#slider_offre').slick({
        dots: true,
        arrow: false,
        infinite: true,
        autoplay:true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        //cssEase: 'linear'
    });
    $('#product_slider').slick({
        dots: true,
        arrow: false,
        infinite: true,
        autoplay:true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        //cssEase: 'linear'
    });


    /*$('.toggle-button').click( function() {
        var toggleH = $(".toggle-content").height() == auto ? "0px" : "auto";
        $('.toggle-content').animate({ height: toggleH },800);
    });*/


    $('#toggle--1').click(function () {
        if ( $("#content--1").is( ":hidden" ) ) {
            $(this).addClass('rotated');
            $("#content--1").slideDown( "slow" );
        } else {
            $(this).removeClass('rotated');
            $("#content--1").slideUp( "slow" );
        }
    });

    $('#toggle--2').click(function () {
        if ( $("#content--2").is( ":hidden" ) ) {
            $(this).addClass('rotated');
            $("#content--2").slideDown( "slow" );
        } else {
            $(this).removeClass('rotated');
            $("#content--2").slideUp( "slow" );
        }
    });

    $('#toggle--3').click(function () {
        if ( $("#content--3").is( ":hidden" ) ) {
            $(this).addClass('rotated');
            $("#content--3").slideDown( "slow" );
        } else {
            $(this).removeClass('rotated');
            $("#content--3").slideUp( "slow" );
        }
    });

    /*function stretchFeedbackSlider() {

        var $slider = $(".responsive");
        var oldWidth = $slider.width();

        stretchingSlides();
        $slider.on('breakpoint', stretchingSlides)
        $slider.on('setPosition', function(){
            var newWidth = $slider.width();
            if (oldWidth !== newWidth) {
                stretchingSlides();
                oldWidth = newWidth;
            }
        });

        function stretchingSlides() {
            var $slides = $slider.find(".slider__content");
            var heightSlides = [];
            var maxHeight;

            $slides.css('height', 'auto');
            $slides.each(function(){
                heightSlides.push($(this).height())
            })
            maxHeight  = Math.max.apply(null, heightSlides);

            $slides.height(maxHeight);
        }
    }

    $('.responsive').on('setPosition', function () {
        $(this).find('.slick-slide').height('auto');
        var slickTrack = $(this).find('.slick-track');
        var slickTrackHeight = $(slickTrack).height();
        $(this).find('.slick-slide').css('height', slickTrackHeight + 50 +  'px');
    });*/
}
