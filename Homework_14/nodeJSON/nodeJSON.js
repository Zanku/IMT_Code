/*
3. https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3
    По этой ссылке находятся валюты Приват Банка в виде json. Задание: попробовать с помощью Node,
    отобразить эти данные у себя в консоли или же вывести в ответ на запрос сервера.

*/

var https = require('https');
var apiPrivat = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';

exports.RequestServ = RequestServ;

function RequestServ( response ) {
    https.get( apiPrivat , function (res) {

            const contentType = res.headers['content-type'];

            let error;

            if (res.statusCode !== 200) {
                error = new Error('Requst Failed!\r\n' + 'Status Code : ' +
                    res.statusCode);
            } else if (!/^application\/json/.test(contentType)) {
                error = new Error('Invalid content-type!\r\n' + 'Content-Type : ' +
                    contentType)
            }
            if (error) {
                console.log(error.message);
                res.resume();
                return;
            }

            var rawData = '';

            res.on('data', function (chunk) {
                rawData += chunk;
            })
            res.on('end', function () {
                try {
                    var data = JSON.parse(rawData);
                }
                catch (err) {
                    console.log(err);
                }
// Вывод данных в консоль
                console.log(data);
// вывод данных 2
                outDefault( response, data );
// вывод данных 3
                outReform( response, data );


                response.end();

            }).on('error', function (err) {
                console.log('Got error : ' + err);
            });
        });
}



// Вывод объекта на страницу
function outDefault ( response, data ) {

    var length = data.length;
    for (var i = 0; i < length; i++){

        for (var key in data[i]){
            //response.write(key + '\r\n');
            response.write('' + key + ' : ' + data[i][key] + '\t\t');
        }
        response.write('\r\n');
    }

    response.write('\r\n\r\n');
}

// Вывод информации в виде:
//  EUR / UAH
// buy : price
// sell : price
function outReform ( response, data ){

    var length = data.length;
    for (var i = 0; i < length; i++){
        for (var key in data[i]){
            switch (key){
                case 'ccy'   :
                    response.write('\t' + data[i][key] + ' / ');
                    break;
                case 'base_ccy'  :
                    response.write('' + data[i][key] + '\r\n');
                    break;
                default  :
                    response.write('' + key + ' : ' + data[i][key] + '\r\n');
                    break;
            }
        }
        response.write('\r\n');
    }
}