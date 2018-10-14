define(function(){

    var StringUtils = {

        nettoieChaine : function(txt)
        {
            txt = txt.replace(/[àáâãäå]/g, "a");
            txt = txt.replace(/[ÀÁÂÃÄÅ]/g, "A");
            txt = txt.replace(/[èéêë]/g, "e");
            txt = txt.replace(/[ËÉÊÈ]/g, "E");
            txt = txt.replace(/[ìíîï]/g, "i");
            txt = txt.replace(/[ÌÍÎÏ]/g, "I");
            txt = txt.replace(/[ðòóôõöø]/g, "o");
            txt = txt.replace(/[ÐÒÓÔÕÖØ]/g, "O");
            txt = txt.replace(/[ùúûü]/g, "u");
            txt = txt.replace(/[ÙÚÛÜ]/g, "U");
            txt = txt.replace(/[ýýÿ]/g, "y");
            txt = txt.replace(/[ÝÝŸ]/g, "Y");
            txt = txt.replace(/[ç]/g, "c");
            txt = txt.replace(/[Ç]/g, "C");
            txt = txt.replace(/[ñ]/g, "n");
            txt = txt.replace(/[Ñ]/g, "N");
            txt = txt.replace(/[š]/g, "s");
            txt = txt.replace(/[Š]/g, "S");
            txt = txt.replace(/[ž]/g, "z");
            txt = txt.replace(/[Ž]/g, "Z");
            txt = txt.replace(/[æ]/g, "ae");
            txt = txt.replace(/[Æ]/g, "AE");
            txt = txt.replace(/[œ]/g, "oe");
            txt = txt.replace(/[Œ]/g, "OE");
            txt = txt.replace(/[ ]/g, "");
            txt = txt.replace(/[']/g, "");

            return txt.toLowerCase();
        },

        addslashes : function( str )
        {
            return (str+'').replace(/([\\"'])/g, "\\$1").replace(/\0/g, "\\0");
        },

        toCamel : function(str) {
            var accent = [
                /[\300-\306]/g, /[\340-\346]/g, // A, a
                /[\310-\313]/g, /[\350-\353]/g, // E, e
                /[\314-\317]/g, /[\354-\357]/g, // I, i
                /[\322-\330]/g, /[\362-\370]/g, // O, o
                /[\331-\334]/g, /[\371-\374]/g, // U, u
                /[\321]/g, /[\361]/g, // N, n
                /[\307]/g, /[\347]/g, // C, c
            ];
            var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];

            for(var i = 0; i < accent.length; i++){
                str = str.replace(accent[i], noaccent[i]);
            }

            str = str.replace(/ /g, "-");

            return str;
        }
    }
    return StringUtils;
});
