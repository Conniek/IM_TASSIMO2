delete require.cache[require.resolve("./at.js")];
delete require.cache[require.resolve("./be.js")];
delete require.cache[require.resolve("./de.js")];
delete require.cache[require.resolve("./es.js")];
delete require.cache[require.resolve("./fr.js")];
delete require.cache[require.resolve("./it.js")];
delete require.cache[require.resolve("./nl.js")];
delete require.cache[require.resolve("./uk.js")];

module.exports = {
    //ADD HERE MANY LANGUAGE AS YOU NEED
    fr: require('./fr'),
    es: require('./es'),
    de: require('./de')
}