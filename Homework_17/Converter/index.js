//  НБУ
// https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json

// Приват АРХИВ
// https://api.privatbank.ua/p24api/exchange_rates?json&date= + DATE

// МИНФИН нужен парсер
// https://minfin.com.ua/company/aval/currency/

const api = [ 'PrivateBank', 'NBU', 'PrivateBankArchive', 'apiPrivatAnother', 'Minfin' ];
const type = ['buy', 'sale'];

var req = require('./getJSON');

new req.Request( api[0], type[1], 'EUR', 150 );

