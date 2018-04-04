var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var hbs = require("hbs");

var strhbs = "<html>" +
    "<head>" +
    "<title>{{title}}</title>" +
    "</head>" +
    "<body>" +
    "<p>{{test}}</p>" +
    "</body>" +
    "</html>";

//app.engine('handlebars', exphbs({defaultLayout: 'main'}));
//app.set( 'view engine', 'hbs');



//app.engine('handlebars', exphbs({defaultLayout: 'main'}));
/*
app.set('view engine', 'hbs');
//app.set('view engine', 'html');

app.engine('html', require('hbs').__express);
*/

app.use( bodyParser.urlencoded( { extended : true } ) );


app.get( '/', function( req, res ){
/*
    res.render( 'test', { title : "hbs TEST"},
                            { test : "Hello, world"});
*/

var str = hbs.compile(strhbs);
    console.log( str() );
    res.send( str() );
})

app.listen( 3000, function () {
    console.log("Working");
})

/*
 <html>
 <head>
 <title>{{title}}</title>
 </head>
 <body>"
 */