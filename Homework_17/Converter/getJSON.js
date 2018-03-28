
const apiNBU = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
const apiMinfin = 'https://minfin.com.ua/company/aval/currency/';
// Данный адрес используется, поскольку здесь больше список валют
const apiPrivatArchive = 'https://api.privatbank.ua/p24api/exchange_rates?json&date=';
const apiPrivat = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=11';
const apiPrivatAnother = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=12';


var request = require('request');


// Получение информации
module.exports.Request = function Request ( whichApi, resolve, reject ) {

    this.api = connectDefinition( whichApi );

    request( this.api, function (err, res, rawData) {

           if ( rawData === undefined ){
                console.log( rawData );
               console.log(' rawData === undefined ');
               reject();
           } else {

               Request.__proto__.data = JSON.parse(rawData);
               resolve();
           }
    });
}


// Определение сайта для соединения
function connectDefinition( which ){

    switch ( which ){
        case 'NBU' :
            return apiNBU;
            break;
        case 'PrivateBankArchive' :
            return ( apiPrivatArchive + dateDef() );
            break;
        // case 'Minfin' :
        //     return apiMinfin;
        //     break;
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
// т.е. последнее обновление архива отличается на 7 дней от текущей даты
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
module.exports.getCurrencyInfo = function getCurrencyInfo ( data, currency )
{
    // Получения массива с объектом валют
    var dataArr = searching( data );

    var lenght = dataArr.length;

    for (var i = 0; i < lenght; i++) {

        if ( validation(dataArr[i], currency ) ) {
            return ( dataArr[i] );
        }
    }
    throw new Error('Валюта НЕ найдена!');
}

// Получение курса валюты
module.exports.getCurrencyRate = function getCurrencyRate( data, field ){

    if ( buySaleValidation( data, field ) ){
        return data[field];

    }   else {

        for (var key in data) {

            if (/\d+[.]\d+/.test(data[key].toString())) {

                return data[key];
            }
        }
    }
}

// Проверка на наличие полей BUY и SALE
function buySaleValidation ( data, field ){

    if ( field === undefined){
        throw new Error('Не определена операция с валютой');
    }

    if ( (typeof field) !== 'string' ){
        throw new Error('Ошибочный тип данных. Должна быть строка');
    }
        return ( field in data );
}

// Вывод списка доступных валют
module.exports.getAllCurrencies = function getAllCurrencies( data ){

    var dataArr = searching( data );
    var curr = [];
    var length = dataArr.length;

    for ( var i = 0; i < length; i++) {
        for (var key in dataArr[i]) {

            if ( !( (/^(UAH)$/).test( dataArr[i][key] ) ) && (/^[A-Z]{3}$/.test( dataArr[i][key] ) ) ) {

                curr.push( dataArr[i][key] );
            }
        }
    }
    return curr;
}
