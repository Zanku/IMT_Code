function rounding ( value ){
    return (Math.round( value * 100) / 100);
}

function Calculation ( number, currencyRate, type ){

    this.type = type.toLowerCase();

// Проверка на число
    if ( (typeof number) !== 'number' ){
        throw new Error('Неправильный тип данных');
    }
// Проверка на тип операции
    if ( this.type === 'buy' ){
        return  buy( number, currencyRate );

    } else if ( this.type === 'sale' ){
        return  sale( number, currencyRate);

    } else {
        throw new Error('Ошибка в типе опреации с валютой');
    }
}

function buy ( value, rate ){
    return rounding( value * rate );
}

function sale ( value, rate ){
    return rounding( value / rate );
}

//console.log(calculation.sale( 6, 26).buy( 150, 26));


module.exports.Calculation = Calculation;

//console.log(calculation(150, 26, 'buy'));