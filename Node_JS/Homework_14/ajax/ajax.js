/*
    4. Как отобразить эти данные используя только обычный html и javascript, без сервера?
*/

var apiPrivat = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';

var request = new XMLHttpRequest();

// Получение и преобразование данных
request.onreadystatechange = function() {
    if (this.readyState !== 4 && this.status !== 200) {
        throw ( new Error (request.status + ' : ' + request.statusText ) );
    } else {

        try{
           var data = JSON.parse(this.responseText);
        }
        catch(err){
            console.log(err);
        }

        createTable( data );
    }
};
request.open("GET", apiPrivat, true);
request.send();

//Генерация таблицы с данными
function createTable ( data ){

    var table = '<table>'
        + '<caption>Курс валют</caption>';
    var tableBot = '</table>';
    var length = data.length;

//для EUR и USD поэтому +2
    for ( var i = 0; i < length; i += 2 ){
        for ( var key in data[i] ){

            switch (key){
                case 'ccy'  :
                    table += '<tr><td>' + data[i][key] + ' / ';
                    break;
                case 'base_ccy' :
                    table += '' + data[i][key] + '</td></tr>';
                    break;
                case 'buy'  :
                    table += '<tr><td>' + 'Покупка' + '</td><td>' + data[i][key] + '</td></tr>';
                    break;
                case 'sell' :
                    table += '<tr><td>' + 'Продажа' + '</td><td>' + data[i][key] + '</td></tr>';
                    break
            }
        }
    }

    table += tableBot;
    var tbl = document.getElementById('table');
    tbl.outerHTML = table;
}