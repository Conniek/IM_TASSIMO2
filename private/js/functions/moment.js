'use strict';

import moment from 'moment';

export default function () {

    delete require.cache[require.resolve("../../data/config")];
    let configSite = require("../../data/config");

    Object.keys(configSite).map(lang => {

        let data = configSite[lang];
        let d;
        let t;
        let n = moment();

        d = moment(data.operation.date, 'DD/MM/YYYY HH:mm');
        t = (d > n) ? data.marketingButton.beforeSale : data.marketingButton.duringSale;


        var hash = window.location.hash,
        dday = data.operation.date_only;

        if (d > n && (hash != '#swap') ) {
            t = data.marketingButton.beforeSale;

            // New type of the tag
            var replacementTag = 'span';
            // Replace all a tags with the type of replacementTag
            $('a.shophover, a.grid__item, a.introlink').each(function() {
                var outer = this.outerHTML;
                // Replace opening tag
                var regex = new RegExp('<' + this.tagName, 'i');
                var newTag = outer.replace(regex, '<' + replacementTag);
                // Replace closing tag
                regex = new RegExp('</' + this.tagName, 'i');
                newTag = newTag.replace(regex, '</' + replacementTag);
                $(this).replaceWith(newTag);
            });

        }else{
            t = data.marketingButton.duringSale;

            $('.swap').each(function() {
                var swapText = $(this).data('swap');
                $(this).html(swapText);
            })
        }

        if (hash == '#swap') {
            t = data.marketingButton.duringSale;

            $('.swap').each(function() {
                var swapText = $(this).data('swap');
                $(this).html(swapText);
            })
        }


        $('a.event:not(".introlink")').each(function () {

            let type = $(this).data('event');

            if (type == 'TagEvent::Marketing') {
                if( !$(this).hasClass('shophover') && !$(this).hasClass('swap') ) {
                    $(this).html(t);
                }
                /*if( $(this).hasClass('swap') && d > n ) {
                 var swapText = $(this).data('swap');
                 $(this).html(swapText);
                 }*/
            }
        });

        if (n > d) {
            $('.justBefore').remove();
        }

        if (d > n) {
            $('a.product').removeAttr('href').css("cursor", "default");
            $('.justAfter').remove();
            $('.linkAfter').removeAttr('href');
        }

    });

}