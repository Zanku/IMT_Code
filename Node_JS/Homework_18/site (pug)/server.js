var express = require('express');
app = express();
var data = require('./data/data.json');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');


app.set('view engine', 'pug');

app.use( bodyParser.urlencoded( { extended : true } ) );
app.use( express.static( __dirname + '/public' ) );

app.get( '/', function ( req, res ) {
    res.render( 'index', {   title : "Главная",
                            data : data } );
});

app.get( '/add', function( req, res ){
    res.render( 'addPost', { title : "Добавление поста" })
});

app.post( '/add', function ( req, res ) {

// Поправка на случай, если тегов будет несколько
    req.body.tags = verif( req.body.tags );
//    req.body.tags = req.body.tags.toLowerCase().match(/[a-zA-Z0-9]+/ig);

/*    var post =  {   title : req.body.title,
                    tags : req.body.tags,
                    filling : req.body.filling
                }; */

    data.push( req.body );
    res.redirect('/');
});

app.get( '/about', function( req, res ){
    res.render( 'about', { title : "about"} );
});

app.get( '/contacts', function( req, res ){
    res.render( 'contacts', { title : "contacts"} );
});

// отправка почты
app.post( '/contacts', function ( req, res ) {

   console.log( sendEmail( req.body) );

    res.redirect('/contacts');
});

app.get( '/content/edit/:id', function( req, res ){

// Тут будет вопрос
// почему     req.params.id  содержит 3 переменные
//    [ '0' ][ 'menu.js' ][ 'common.css' ]

/*
    var index = ( Number( req.params.id ) );

//    console.log( index );

    if ( data[index].tags instanceof Array ){
        data[index].tags = data[index].tags.join(' ');
    }

     var obj ={ title : data[index].title,
                tags : data[index].tags,
                filling : data[index].filling
            };
*/

    var obj ={ title : data[0].title,
        tags : data[0].tags.join(' '),
        filling : data[0].filling
    };

    res.render( 'edit',  { title : "Модификация",
                           data : obj } );
});

app.post( '/content/edit/:id', function ( req, res ) {

    req.body.tags = verif( req.body.tags );
    data[ req.params.id ] = req.body;

    res.redirect('/');
});

app.get( '/content/delete/:id', function( req, res ){

    data = data.filter( function( value, index){
        return index !== Number( req.params.id );
    });

    res.redirect('/');
});

app.listen( 3000, function () {
    console.log( "Работает" );
});


// Отправка почты
function sendEmail( data ) {
    var transporter = nodemailer.createTransport( {

        service : data.service,
        auth : {
            user : data.login,
            pass : data.password
        }
    } );

    var mailOptions = {
        to : data.email,
        subject : data.topic,
        text : data.text
    }

    transporter.sendMail( mailOptions, function ( err, info ) {
        if ( err ){
            console.log( err );
            return err;
        } else {
            console.log( 'Email sent: ' + info.response);
            return 'Email sent: ' + info.response;
        }
    });
}

// Поправка на случай, если тегов будет несколько
function verif ( tags ) {
    return tags.toLowerCase().match(/[a-zA-Z0-9[а-я][А-Я]+/ig);
}