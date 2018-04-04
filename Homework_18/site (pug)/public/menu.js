// Плюшки для кнопок МЕНЮ
var menu = document.getElementsByClassName('menu');

for ( var i = 0; i < menu.length; i++){

    menu[i].addEventListener( 'mouseover', function(){
        this.style.backgroundColor = "red";
    });

    menu[i].addEventListener( 'mouseout', function (){
        this.style.backgroundColor = 'darkorange';
    });

    menu[i].addEventListener( 'click', function(){

        switch ( this.textContent ){
            case 'Главная' :
                location.href = '/';
                break;
            case 'О нас' :
                location.href = '/about';
                break;
            case 'Контакты' :
                location.href = '/contacts';
                break;
            case 'Добавить пост' :
                location.href = 'add';
                break;
        }
    })
}

