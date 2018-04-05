var express = require('express');
app = express();
var data = require('./data/data.json');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');


app.set('view engine', 'pug');

app.use( bodyParser.urlencoded( { extended : true } ) );
app.use( express.static( __dirname + '/public' ) );


app.route( '/')
    .get( function ( req, res ) {
        console.log( req );
        res.render( 'index', {   title : "Главная",
            data : data } );
    });


app.route( '/content/edit/:id')
    .get( function( req, res ){

//////  Вопросы ТУТ                         //////////////////
// здесь творится чудо
// почему     req.params.id  содержит 3 переменные
//    [ '0' ][ 'menu.js' ][ 'common.css' ]

            //console.log( req );


// Заглушка : получение данных о первом объекте в JSON
// при заглушке запрос отрабатывается до конца и высылается ответ с новой страницей
        /*
        var obj ={ title : data[0].title,
            tags : data[0].tags.join(' '),
            filling : data[0].filling
        };
*/
// Так тут должно работать

        // получаем номер элемента черех параметры адресной строки
        var index = ( Number( req.params.id ) );

        // если по ключу TAGS содержится массив, то мы его преобразуем с строку
        if ( data[index].tags instanceof Array ){
            data[index].tags = data[index].tags.join(' ');
         }

        // заполняем объект информацией и далее заменяем в массиве нужный объект
        var obj ={ title : data[index].title,
                    tags : data[index].tags,
                 filling : data[index].filling
         };

        res.render( 'edit',  { title : "Модификация",
            data : obj } );
    })

    .post( function( req, res ){
// проведение изменений в нужном элементе и возврат на главную
        req.body.tags = verif( req.body.tags );
        data[ req.params.id ] = req.body;
        res.redirect('/');
    });


// Добавление постов на сайт
// после добавления мы попадаем на главную страницу
app.route( '/add')
    .get( function( req, res ){
        res.render( 'addPost', { title : "Добавление поста" });
    })

    .post( function( req, res ){
        req.body.tags = verif( req.body.tags );
        data.push( req.body );
        res.redirect('/');
    });


app.route( '/about')
    .get ( function( req, res ){
        res.render( 'about', { title : "about"} );
    });


// Контакты и ОТПРАВКА почты
app.route( '/contacts' )
    .get( function( req, res ){
        res.render( 'contacts', { title : "contacts"} );
    })

    .post( function ( req, res ) {

        console.log( sendEmail( req.body) );

        res.redirect('/contacts');
    });


app.route( '/content/delete/:id')
    .get( function( req, res ){

        data = data.filter( function( value, index){
            return index !== Number( req.params.id );
        });

        res.redirect('/');
    });



app.listen( 3000, function () {
    console.log( "Работает ROUTE-server" );
});

// Поправка на случай, если тегов будет несколько
function verif ( tags ) {
    return tags.toLowerCase().match(/[a-zA-Z0-9[а-я][А-Я]+/ig);
}

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