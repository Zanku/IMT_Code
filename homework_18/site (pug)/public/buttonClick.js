var form = document.getElementsByTagName('form')[0];
console.log( form );
form.action = 'add'

form.onsubmit = function() {
    var check = true;

    var inputs = document.getElementsByTagName('input');

    var length = inputs.length - 1;

    for ( var i = 0; i < length; i++ ){

        if ( inputs[i].value === '' ){
            inputs[i].style.border = "2px solid red";
            check = false;
        }
    }

    return check;
};
