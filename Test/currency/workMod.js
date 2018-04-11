var https = require('https');
var calc = require('./currency');

var apiPrivat = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

https.get( apiPrivat, function (res) {

    var rawData = '';
    var data;

    res.on( 'data', function( chunk ){

        rawData += chunk;
    } );

    res.on( 'end', function(){

        data = JSON.parse( rawData );
        console.log( data );
    });





});

