"use strict";

export default function() {

    let getURLParameter = function(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    };

    let headerDev = $('.header-dev');


    headerDev.find('button.header-dev__mixpanel').on('click', function(){

        let mixpanel = getURLParameter('mp_properties');
        let url;

        let hash = window.location.hash;

        if(!mixpanel) {
            let token = 'eyJJbnRlcmZhY2UiOiJTbWFydHBob25lIEFuZHJvaWQgYXBwIiwiVVRNIFRlcm0gW0xhc3QgVG91Y2hdIjoiT3JnYW5pYyIsIlVUTSBDb250ZW50IFtMYXN0IFRvdWNoXSI6Ik9yZ2FuaWMiLCJVVE0gQ2FtcGFpZ24gW0xhc3QgVG91Y2hdIjoiT3JnYW5pYyIsIlVUTSBNZWRpdW0gW0xhc3QgVG91Y2hdIjoiT3JnYW5pYyIsIlVUTSBTb3VyY2UgW0xhc3QgVG91Y2hdIjoiT3JnYW5pYyIsIkNSTSBTZWdtZW50IjoxLCIjIG9mIENvbXBsZXRlZCBQdXJjaGFzZXMiOjI1NiwiTWVtYmVyIElEIjoxNTc3Mzk4NiwiUG9pbnQgcmVhY2hlZCBvbiBob21lcGFnZSI6NCwiT3B0aW1pemVseSBDdXJyZW50IEFcL0IgVGVzdHMiOlsiNzg3Njk0MDAxNCAtIFZhcmlhdGlvbiBSYW5kb20iXSwiU291cmNlIjoiT3JnYW5pYyIsIlBvaW50IFJlYWNoZWQgT24gSG9tZXBhZ2UiOjR9';
            url = window.location.host + '?mp_properties=' + token;
        } else {
            url = window.location.host;
        }
        console.log(url);

        window.location = 'http://' + url + hash;

    });


    headerDev.find('button.header-dev__swap').on('click', function(){

        let swap = window.location.hash;

        let url;

        if(swap !== '#swap') {
            url = window.location.host + '#swap';
            window.location.href = 'http://' + url;
            location.reload();
        } else {
            url = window.location.host;
            window.location.href = 'http://' + url;
        }


    });


    headerDev.find('button.header-dev__tracking').on('click', function(){

        let tracking = window.location.hash;

        let url;

        if(tracking !== '#tracking') {
            url = window.location.host + '#tracking';
            window.location.href = 'http://' + url;
            location.reload();
        } else {
            url = window.location.host;
            window.location.href = 'http://' + url;
        }


    });

    headerDev.find('.header-dev__close').on('click', function(){

        headerDev.addClass('header-dev--closed');

    });

    headerDev.find('.header-dev__open-app').on('click', function(){

        let url = window.location.href;

        window.location.href = 'appvp://openwv/' + encodeURIComponent(url);

    });


    ///re - open devToolbar
    window.addEventListener('click', function (evt) {
        if (evt.detail === 3) {
            $('.header-dev').removeClass('header-dev--closed');
        }
    });

}
