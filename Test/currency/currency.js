
var UAH_USD = 26.5;

function UAHtoC( value ){
    return correct( value / UAH_USD );
}

function CtoUAH ( value ){
    return correct( value * UAH_USD);
}

function correct ( value ){
    return ( Math.round( value * 100 ) / 100 );
}

exports.UAHtoC = UAHtoC();

exports.CtoUAH = CtoUAH();