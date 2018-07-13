/*
 1. Создать сервер,чтоб по запросу
    localhost:3000 сервер выдавал Hello World!,
            чтоб по запросу
    localhost:3000/about сервер выдавал нам данные о запросе в консоль,
            а по запросу
    localhost:3000/file чтоб выдал любой файл .mp3 и по запросу
    localhost:3000/stop - остановить сервер!
*/
var music = require('./fileReadingSync.js');
var asyncMusic = require('./fileReading');

var http = require('http');
var fs =  require('fs');
var port = 3000;
var path = 'Hurricane2000.mp3';
var pathURL = 'http://get10.mp3-you.me/BFFk9TIl_e7bcYhSOvFQ1A/1521171332/L29ubGluZS9tcDMvMjAxNC8wNy9zY29ycGlvbnMtaHVycmljYW5lLTIwMDAtKG1wMy15b3UubmV0KS5tcDM/aHR0cDovLzM3LjQ4LjY4LjIzNjo3NTAwL2RldjgvMC8wMDAvNDI3LzAwMDA0MjcwODIuZmlk';

var page =  "<!DOCTYPE html>"+
            '<html lang="en">'+
                "<head>"+
                    '<meta charset="UTF-8">'+
                    "<title>File Transmission</title>"+
                "</head>" +
                "<body>" +
                    "<p>Scorpions - Hurricane 2000</p>" +
                    '<audio controls>'+
                        '<source src="' + pathURL + '" type="audio/mp3">'+
                    '</audio>'+
                "</body>" +
            "</html>";

http.createServer( function(req, res){
    switch ( req.url ){
        case '/' : // Hello World!
            res.write('Hello World!');
            res.end();
            break;

        case '/about'   :
            console.log(req.method);
            console.log(req.headers);
            console.log(req.url);
            res.write('Go to Console');
            res.end();
            break;

// Синхронная передача файла
        case  '/file'   :
            var fileMp3 = new music.Music( path );
            res.write( fileMp3 );
            res.end();
            break;

// Файл передается Асинхронно
        case '/asyncFile' :
            asyncMusic.Music( path, res );
            break;

// Using HTML
        case '/page'    :
            res.write(page);
            res.end();
            break;

        case '/stop'    :
            res.write('The server has been stopped');
            console.log('\r\n'
                    +'The server has been stopped');
            res.end( function(){
                process.exit();
            });
            break;



    }
} ).listen( port, function(){
        console.log('It\'s a miracle, the Server is working \r\n');
});