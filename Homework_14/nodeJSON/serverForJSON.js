var port = 3000;
var http = require('http');
var requestServ = require('./nodeJSON');

http.createServer( function (req, res) {

    var json = new requestServ.RequestServ( res );

}).listen( port, function(){
    console.log('Server is waiting');
})