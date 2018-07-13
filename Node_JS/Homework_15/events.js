/*
    1. На основе событий создать свой логер(logger).
    Который будет регистрировать пользователя со временем посещения и выводит эти данные в консоль.
    Также можно добавить информацию типа (такой то пользователь вошёл и вышел),
    набросать событий типа logIn, logout, someAction…. Код произвольный,
    главное использовать события класса EventEmitter.
*/
var counter = 0;

var http = require('http');
var port = 3000;

var event = require('events').EventEmitter;

var privatAPI = require('./jsonPrivat');

// Отрабатывает при старте сервера
var start = new event();
start.on('serverStart', function(){
    console.log('Server is running');
    console.log('Emitter end');
});

// Отрабатывает при получении запроса на сервер
var came = new event();
came.on('came', function( req ){
    // Информация о запросе и дата
    console.log( req.headers.host + ' : ' + new Date() );
    // Ставка НБУ
    privatAPI.Request();
});

// Срабатывает после Ответа
var resp = new event();
resp.on('respEnd', function(){
    console.log('That was ' + (++counter) + ' request');
});

// При выключении сервера
process.on('exit', function(){
    console.log('ВСЕ ПРОПАЛО!!! мы его теряем!!!' + '\r\nОн УМЕР');
});

http.createServer( function( req, res ){

    switch(req.url){
        case '/close'   :
            res.write('Server has STOPPED');
            res.end( function(){
                process.exit();
            })
            break;
        default :

            came.emit( 'came', req );

            res.write('I remember that');

            res.end( function () {
                resp.emit('respEnd');
            });
    }

} ).listen( port, function() {
    start.emit( 'serverStart' );
});