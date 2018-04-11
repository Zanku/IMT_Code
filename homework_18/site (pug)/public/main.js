// Мигание тэгов

var tags = document.getElementsByClassName('tags');

for ( var i = 0; i < tags.length; i++){

    tags[i].addEventListener( 'mouseover', function(){
        this.style.color = "black";
        this.style.fontWeight = "bold";
    });

    tags[i].addEventListener( 'mouseout', function (){
        this.style.color = 'grey';
        this.style.fontWeight = "normal";
    });

    tags[i].addEventListener( 'click', function(){

    });
};


// Коррекция размера изображения
// если оно больше чем размер элемента, то оно уменьшается
// будет запускаться после загрузки всей страницы
window.onload = corration();

function corration() {
    var img = document.getElementsByTagName('img');

    var widthElem = document.getElementById('main').clientWidth;

    var length = img.length;

    for ( var i = 0; i < length; i++ ){

        var width = ( widthElem * 98 ) / 100;

        if ( img[i].width > width ){
            img[i].width = width;
        }
    };
}

setTimeout( corration, 500);