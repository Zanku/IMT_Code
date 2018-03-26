
const apiNBU = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
const apiMinfin = 'https://minfin.com.ua/company/aval/currency/';
// Данный адрес используется, поскольку здесь больше список валют
const apiPrivatArchive = 'https://api.privatbank.ua/p24api/exchange_rates?json&date=';
const apiPrivat = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=11';
const apiPrivatAnother = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=12';
///////////////////// НЕНАСТРОЕН        МИНФИН


var request = require('request');
var converter = require('./converter');


// Получение информации
module.exports.Request = function Request ( whichApi, operation, currency, number ) {

    this.api = connectDefinition( whichApi );
    //this.operation = operation;
    //this.currency = currency;

        request(this.api, function (err, res, rawData) {

           var data = JSON.parse(rawData);

           console.log( getAllCurrencies( searching( data ) ) );

           console.log(  getCurrencyInfo( searching( data ), currency ) );

// По организации этого безобразия будет вопрос
           var rate = getCurrencyRate( getCurrencyInfo( searching( data ), currency ), operation );

           console.log( rate );
           console.log( converter.Calculation( number, rate, operation) );

        });
}



// Определение сайта для соединения
function connectDefinition( which ){

    switch ( which){
        case 'NBU' :
            return apiNBU;
            break;
        case 'PrivateBankArchive' :
            return ( apiPrivatArchive + dateDef() );
            break;
        case 'Minfin' :
            return apiMinfin;
            break;
        case 'PrivateBank' :
            return apiPrivat;
            break;
        case 'apiPrivatAnother' :
            return apiPrivatAnother;
            break;
    }
}

// запрос заканчивается датой
function dateDef() {
    var date = new Date
// Отрыв архива от текущей даты одна неделя
    date = new Date( date - 7 * 24 * 60 * 60 * 1000 );

        return ( date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() );
}


// Получение данных :
//      Ищем массив в котором содержится нужная информация
// Если массив отсутствует и содержится , то рекурсивно повторяем вызов функции
//      Получаем нужный объект из этого массива
//      Получаем курс из этого массива
function searching ( data ){
    if ( data instanceof Array ) {

        return data;
        //return getCurrencyInfo( data, currency );
        //console.log( getCurrencyRate( getCurrencyInfo( data, currency ), operation ) );

    } else {

        for (var key in data) {
            if ( (typeof data[key]) === 'object') {

                return ( searching( data[key] ) );
            }
        }
    }
}


// проверка объекта на нужную валюту
function validation ( data, currency ){

    for ( var key in data){
        if ( data[key] === currency ){
            return true;
        }
    }
    return false;
}

// получение объекта с нужной валютой
function getCurrencyInfo ( data, currency )
{
    var lenght = data.length;

    for (var i = 0; i < lenght; i++) {

        if ( validation(data[i], currency ) ) {
            return ( data[i] );
        }
    }
    throw new Error('Валюта НЕ найдена!');
}

// Получение курса валюты
function getCurrencyRate( data, field ){

    if ( buySaleValidation( data, field ) ){
        return data[field];
    }   else {

        for (var key in data) {
            //if (typeof data[key] === 'number') {

                if (/\d+[.]\d+/.test(data[key].toString())) {
                    return data[key];
                }
            //}
        }
    }
}

// Проверка на наличие полей BUY и SALE
function buySaleValidation ( data, field ){

    field = 'sell';

    if ( field === undefined){
        throw new Error('Не определена операция с валютой');
    }

    if ( (typeof field) !== 'string' ){
        throw new Error('Ошибочный тип данных. Должна быть строка');
    }
        return ( field in data );
}

// Вывод списка доступных валют
function getAllCurrencies( data ){

    var curr = [];
    var length = data.length;

    for ( var i = 0; i < length; i++) {
        for (var key in data[i]) {

            if ( !( (/^(UAH)$/).test( data[i][key] ) ) && (/^[A-Z]{3}$/.test( data[i][key] ) ) ) {

                curr.push( data[i][key] );
            }
        }
    }
    return curr;
}