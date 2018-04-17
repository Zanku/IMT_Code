var ObjectID = require('mongodb').ObjectID;
const collection = 'note';

module.exports = function(app, db) {

    // сохраняем связь с базой данных
    this.db = db;

// Получение информации об объекте с определенным ID
    app.get('/notes/:id', (req, res) => {

        const id = req.params.id;
// Создание объекта ID (он особый объект в MONGO)
        const details = { '_id' : new ObjectID( id ) };
//Поиск нужного объекта в базе данных
        this.db.collection( collection ).findOne( details, (err, item) => {

            if (err) {
                    res.send({'error':'An error has occurred'});
                } else {
                    res.send(item);
                }
        });
    });

// Добавление нового элемента в коллекцию
    app.post('/notes', (req, res) => {
// Определение элемента
        const note = { text: req.body.body, title: req.body.title };
// Отправка полученной информации о новом элементе коллекции в MONGO
        this.db.collection( collection ).insertOne(note, (err, result) => {

            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(result.ops[0]);
            }
        });
  });

// Удаление элемента из коллекции
    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        this.db.collection( collection ).deleteOne( details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send('Note ' + id + ' deleted!');
            }
        });
    });

// Изменение элемента в коллекции
    app.put('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const note = { text: req.body.body, title: req.body.title };
        this.db.collection( collection ).updateOne(details, note, (err, result) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(note);
            }
        });
    });

};