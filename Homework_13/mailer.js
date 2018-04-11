var nodemailer = require('nodemailer');

/*
* Необъодимые данные для отправки Email мы получаем из аргументов командной строки где:
*   первый аргумент - Email с которого будет отправленно письмо
*   второй - пароль к Email с которого будет отправленно письмо
*
*   третий - Email, который получает письмо
* */
var mailSender = process.argv[2];
var mailSendPass = process.argv[3];
var mailAddressee = process.argv[4];
/*
console.log( mailSender );
console.log( mailSendPass );
console.log( mailAddressee );
*/
var transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: mailSender,
        pass: mailSendPass
    }
});

var mailOptions = {
    to : mailAddressee,
    subject : "Node.js Testing",
    text : "Thanks, for you Email!"
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});