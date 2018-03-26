var express = require('express');

var server = new express();

server.get( '/', function( req, res ){
    res.send('Hello, World');
});

server.listen( 3000, function(){
    console.log( 'Сервер работает' );
});