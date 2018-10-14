'use strict';

import sliders from '../functions/sliders.js';

export default function (dest) {

    var hash = window.location.hash;

    if (hash == '#tracking' ) {

        $('.event').each(function() {
            $(this).addClass('tooltip');
            var dataLabel = $(this).data('label');
            $(this).attr('title', dataLabel);
            $(this).find('img').each(function() {
                var imgW = $(this).width();
                var imgH = $(this).height();

                $(this).closest('.tooltip').addClass('tooltip--img');
                $('.tooltip--img img').after('<p class="tooltip__content tooltip__content--img"><span class="imgwording">IMAGE : </span>'+dataLabel+'</p>');
                $('.tooltip--img .tooltip__content').width(imgW);
                $('.tooltip--img .tooltip__content').height(imgH);
                $(this).find('img').hide();
            })

            $(this).html('<span class="tooltip__content">'+dataLabel+'</span>')
        });
    }

}
