const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const app            = express();

const port = 8000;

app.use(bodyParser.urlencoded( { extended: true } ));

require('./app/routes')(app, {});

// Подключение к базе данных
MongoClient.connect(db.url, (err, database) => {

    if (err) return console.log(err);

    var dataB = database.db("note-api");

    // передача контроля над путями и базой данных в папку .app/ROUTES
    require('./app/routes')(app, dataB);

    app.listen(port, () => {
    console.log('We are live on ' + port);
    });
});
