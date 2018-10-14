"use strict";


export default function () {

    var depart = null;


    $('[data-city]').fancybox({
        smallBtn: false,
        buttons: [
            'close'
        ]
    }).click(function () {
        // setTimeout(function () {
        //     $('.fancybox-container').animate({scrollBottom: 0}, 500);
        // }, 250);
    });


    $(document).on('click touchend','.from__select-city', function () {
        var v = $(this).html();
        var link;

        depart = v;

        $('.from__plus--original').hide(0);
        $('.from__close').show(0);

        $('.original').html(v);
        parent.jQuery.fancybox.getInstance().close();

        var destinations = [];

        trad.cities.forEach(function (city) {
            city.destinations.forEach(function (destination) {
                if (findByAttribute(destination.from, v, 'name') && destinations.indexOf(city) < 0) {
                    destinations.push(city);
                }
            });
        });

        $('.destination').addClass('mask');
        destinations.forEach(function (destination) {
            $('#dest_' + destination.title.replace(' ', '_')).removeClass('mask');
        });

    });

    $('.city_action').click(function () {
        var cityTitle = $(this).attr('data-cityVal');
        if (depart !== null) {
            var city = findByAttribute(trad.cities, cityTitle, 'title');
            var found = false;
            if (city !== null) {
                city.destinations.forEach(function (destination) {
                    if (!found) {
                        var $from = findByAttribute(destination.from, depart, 'name');
                        if ($from) {
                            found = true;
                            $('#lien_oui_' + cityTitle).attr('href', $from.oui);
                            $('#lien_trainline_' + cityTitle).attr('href', $from.trainline);
                        }
                    }

                });
            }
        }
    });


    var findByAttribute = function (objects, val, attr) {
        for  (var i = 0; i < objects.length; i ++) {
            var attrVal = objects[i][attr];
            if (attr == 'title') attrVal = attrVal.replace(' ', '_');
            if (attrVal == val) {
                return objects[i];
            }
        };
        return false;
    }


};