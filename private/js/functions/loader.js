'use strict';

export default function(){

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function checkCookie() {

        var loaderactif = getCookie("loaderactif");
        if (loaderactif != "true") {

            document.cookie = "loaderactif=true";
            setTimeout(function(){
                $(".loader").fadeOut("100");
            }, 4500);
        } else {

            $(".loader").fadeOut("100");
        }
    }

    checkCookie();

}