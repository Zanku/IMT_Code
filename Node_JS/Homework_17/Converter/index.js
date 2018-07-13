//  НБУ
// https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json

// Приват АРХИВ
// https://api.privatbank.ua/p24api/exchange_rates?json&date= + DATE

// МИНФИН нужен парсер
// https://minfin.com.ua/company/aval/currency/

const API = [ 'PrivateBank', 'NBU', 'PrivateBankArchive', 'apiPrivatAnother' ];
const BUYorSALE = ['buy', 'sale'];

// Это те валюты которые можно получить из адресов, включеных в список
const CURRENCIES_INFO = {   PrivateBank : ['USD', 'EUR', 'RUR', 'BTC'],

                            NBU : [ 'PLN', 'BRL', 'TJS', 'RUB', 'RSD', 'BYN', 'DZD', 'AZN',
                                    'AUD', 'BDT', 'AMD', 'BGN', 'CAD', 'CNY', 'HRK', 'CZK',
                                    'DKK', 'HKD', 'HUF', 'INR', 'IDR', 'IRR', 'IQD', 'ILS',
                                    'GEL', 'JPY', 'KZT', 'KRW', 'KGS', 'LBP', 'MYR', 'MXN',
                                    'MDL', 'MAD', 'NZD', 'NOK', 'PKR', 'RON', 'SAR', 'SGD',
                                    'VND', 'ZAR', 'SEK', 'CHF', 'THB', 'AED', 'TND', 'TRY',
                                    'TMT', 'EGP', 'GBP', 'USD', 'UZS', 'TWD', 'XAU', 'XDR',
                                    'XAG', 'XPT', 'XPD', 'EUR' ],

                            PrivateBankArchive : ['AUD', 'CAD', 'CZK', 'DKK', 'HUF', 'ILS', 'JPY',
                                                  'LVL', 'LTL', 'NOK', 'SKK', 'SEK', 'CHF', 'RUB',
                                                  'GBP', 'USD', 'BYR', 'EUR', 'GEL', 'PLZ'],

                            apiPrivatAnother : ['CAD', 'CHF', 'CZK', 'GBP', 'ILS', 'JPY',
                                                'NOK', 'PLZ', 'SEK', 'SKK', 'BTC']
                                                };

var req = require('./getJSON');
var converter = require('./converter');


var promise = new Promise( function( resolve, reject){

    new req.Request( API[0], resolve, reject );
});

promise.then( function(){

    var currencies = req.getAllCurrencies( req.Request.data );
    console.log( currencies );

    var currencyObj = req.getCurrencyInfo( req.Request.data, 'USD' );
    //console.log( currencyObj );


    var type = BUYorSALE[0];


    var currencyRate = req.getCurrencyRate( currencyObj, type );
    //console.log( currencyRate );

    console.log( converter.Calculation( 150, currencyRate, type ) );

}, function(){

    console.log('Ошибка в PROMISE');
})
