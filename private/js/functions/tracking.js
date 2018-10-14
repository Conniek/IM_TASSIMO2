'use strict';

import StringUtils from './utils';

export default function () {

    let data = config;

    /********************* RECUPERER LES PROPRIETES ****************************/

    // Récupération du info member
    var infoMember = getCookieID('infoMember');
    infoMember = ( infoMember != null ) ? infoMember.substr(4) : data.operation.code + '_member'; // VALEUR FINALE

    $('.event').on('click', function () {

        let event = $(this).data('event'),
            label = $(this).data('label'),
            prefix = "";

        switch (event) {
            case 'TagEvent::Marketing':
                break;
            case 'TagEvent::Exit':
                prefix = "EXIT_";
                break;
            case 'TagEvent::Page':
                break;
            default:
                break;
        }

        // Mixpanel
        mixpanel.track("Click",{
            "Operation Code": data.operation.code,
            "Click Name":"Mini site " + prefix + label
        });

        // Adotmob
        if (data.modules.adotmob) {
            adotmob.triggerEvent(infoMember, data.operation.code, "Mini site " + prefix + label);
        }
    });

};
