
// этой ссылке для работы нужно указать год
// Мы получаем ставку НБУ
var privatAPI = "https://api.buh.privatbank.ua/ratenbu.php?year=";
var year = 2017;

var https = require('https');

function Request(){

    https.get( privatAPI + year , function(res){

        var rawData = '';

        res.on('data', function(data){
            rawData += data;
// Удаление мусора
            rawData = rawData.slice(3)
        });
        res.on('end', function(data){

            var data = JSON.parse(rawData);
            var length = data.length;

            for (var i = 0; i < length; i++){

                console.log( 'До ' + data[i].rate_date + '  Ставка НБУ = ' + data[i].rate_value + '%' +  '\r\n');
            }

        });
    });
}

exports.Request = Request;