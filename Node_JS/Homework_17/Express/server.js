var express = require('express');
var pug = require('pug');

var server = new express();


server.get( '/', function( req, res ){
    const compiledFunction = pug.compileFile('index.pug');
    res.send( compiledFunction() );
});

server.get( '/contact', function( req, res ){
    const compiledFunction = pug.compileFile('contact.pug');
    res.send( compiledFunction() );
});

server.get( '/faq', function( req, res ){
    res.send('<h1>F.A.Q.</h1>');
});

server.listen( 3000, function(){
    console.log( 'Сервер работает' );
});


//