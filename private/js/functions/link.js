'use strict';


export default function(e){
	var configSite = require("../../data/config");
	var lang = $('html').attr('lang');
	var data = configSite[lang];
	var opeID = data.operation.id;
	var u = navigator.userAgent.toLowerCase();

    $('.onepage-button').each(function(e){

        if (u.indexOf("vp-iphone") > -1 || u.indexOf("vp-ipad") > -1 || u.indexOf("vp-android-smartphone") > -1) {
            $(this).attr('href', data.url.application + opeID);
        } else if ($_GET('FromApp') && ($_GET('FromApp') == true || $_GET('FromApp') == 'true')) {
            $(this).attr('href', data.url.application + opeID);
        } else if ($_GET('FromWebApp') && ($_GET('FromWebApp') == true || $_GET('FromWebApp') == 'true')) {
            $(this).attr('href', data.url.productLinkMobile + opeID);
            $(this).attr('target', '_top');
        } else if ($('html').hasClass('mobile')) {
            $(this).attr('href', data.url.productLinkMobile + opeID);
            $(this).attr('target', '_top');
        } else {
            $(this).attr('href', data.url.productLinkWeb + opeID);
        }
    });

	$('.universe-button').each(function(e){
		var universeID = $(this).attr('data-universe');

		if (u.indexOf("vp-iphone") > -1 || u.indexOf("vp-ipad") > -1 || u.indexOf("vp-android-smartphone") > -1) {
            $(this).attr('href', data.url.productLinkApp + opeID + '/' + universeID);
        } else if ($_GET('FromApp') && ($_GET('FromApp') == true || $_GET('FromApp') == 'true')) {
            $(this).attr('href', data.url.productLinkApp + opeID + '/' + universeID);
        } else if ($_GET('FromWebApp') && ($_GET('FromWebApp') == true || $_GET('FromWebApp') == 'true')) {
            $(this).attr('href', data.url.productLinkMobile + opeID + '/' + universeID);
            $(this).attr('target', '_top');
        } else if ($('html').hasClass('mobile')) {
            $(this).attr('href', data.url.productLinkMobile + opeID + '/' + universeID);
            $(this).attr('target', '_top');
        } else {
            $(this).attr('href', data.url.productLinkWeb + opeID + '/classic/' + universeID + '/catalog');
        }
	});

	$('.product-button').each(function(e){
		var universeID = $(this).attr('data-universe');
		var familyID = $(this).attr('data-family');

		if (u.indexOf("vp-iphone") > -1 || u.indexOf("vp-ipad") > -1 || u.indexOf("vp-android-smartphone") > -1) {
        	$(this).attr('href', data.url.productLinkApp + opeID + '/' + universeID + '/' + familyID);
        } else if ($_GET('FromApp') && ($_GET('FromApp') == true || $_GET('FromApp') == 'true')) {
        	$(this).attr('href', data.url.productLinkApp + opeID + '/' + universeID + '/' + familyID);
        } else if ($_GET('FromWebApp') && ($_GET('FromWebApp') == true || $_GET('FromWebApp') == 'true')) {
            $(this).attr('href', data.url.productLinkMobile + opeID + '/' + universeID + "/p/" + familyID);
            $(this).attr('target', '_top');
        } else if ($('html').hasClass('mobile')) {
            $(this).attr('href', data.url.productLinkMobile + opeID + '/' + universeID + "/p/" + familyID);
            $(this).attr('target', '_top');
        } else {
        	$(this).attr('href', data.url.productLinkWeb + opeID + '/classic/product-sheet/' + familyID);
        }
	});

    $('.filter-button').each(function() {
        // FOR SPECIALEVENT SALES ONLY !!!
        /*
            Final url rendering :
            DESKTOP : https://secure.fr.vente-privee.com/ns/fr-fr/operation/{OPERATION_ID}/specialevent/{UNIVERSE_ID}/catalog?0={FILTER_ID}
            APP : appvp://specialcatalog/{OPERATION_ID}/{FILTER_ID}
            Web Mobile : https://m.vente-privee.com/w2/index.html#specialcatalog/{OPERATION_ID}/{FILTER_ID}
        */
        var universeID  = $(this).attr('data-universe'),
            filterID    = $(this).attr('data-filter');

        if (u.indexOf("vp-iphone") > -1 || u.indexOf("vp-ipad") > -1 || u.indexOf("vp-android-smartphone") > -1) {
            $(this).attr('href', data.url.SpecialEventLinkApp + opeID + '/' + filterID);
        } else if ($_GET('FromApp') && ($_GET('FromApp') == true || $_GET('FromApp') == 'true')) {
            $(this).attr('href', data.url.SpecialEventLinkApp + opeID + '/' + filterID);
        } else if ($_GET('FromWebApp') && ($_GET('FromWebApp') == true || $_GET('FromWebApp') == 'true')) {
            $(this).attr('href', data.url.SpecialEventWebApp + opeID + '/' + filterID);
            $(this).attr('target', '_top');
        } else if ($('html').hasClass('mobile')) {
            $(this).attr('href', data.url.SpecialEventWebApp + opeID + '/' + filterID);
            $(this).attr('target', '_self');
        } else {
            $(this).attr('href', data.url.productLinkWeb + opeID + '/specialevent/' + universeID + '/catalog?0=' + filterID);
        }
    })
}
