$(document).ready(function(){

  // Показывает элемент если список дел пустой
  if ( ($("ol").children().length - 1) === 0 ){
      $("p[hidden]").last().show()
  }
  // обновляет значение счетчика при загрузке страницы
  countUpdating()



  // действия при клике на кнопку
  $("input[type]").click(function(){
      var inputSet = $("#text");
      var inputValue = inputSet.val();
    
    // Проверка на пустой текст
    if (inputValue === "")
      return;

   inputValue = stringStandardization( inputValue );

      if ( testUniquenessInputString( inputValue ) ){
      inputSet.addClass("warn");
      $("#main").addClass('warning');
      return;
    }
    
    // Создание элемента
    var elem = $("<li></li>").text( inputValue );
     
  // добавление функционала созданному элементу
    elem.on("dblclick", dblclick);
    elem.on("click", click );
    // убирает комментарии к списку 
    $("p[hidden]").hide();
    // добавляет элемент в конец списка "ol"
    $("ol").append( elem );

    countUpdating();
   // Очистка Input'a
      inputSet.removeClass("warn");
    inputSet[0].value = "";
    $("#main").removeClass('warning');
    
    listLayout();
  })



  // Добавление реакции на клики списку List
  $("ol>li").on("click", click )
                      .on("dblclick", dblclick);


  // функция описывающая реакцию на клик
  function click(){
      $(this).css("text-decoration", "line-through");
  }


  // функция описывающая реакцию на двойной клик
  function dblclick(){
   var elem = $("<li></li>").text($(this)[0].textContent);
   
    $("ul").append( elem );
    $(this).remove();
    
    countUpdating();
    listLayout();
  // Если список пуст появляется мотивашка  
    if ( ($("ol").children().length - 1) === 0 ){
              $("p[hidden]").first().show()
    }
  }


  // Обновляет значение счетчика
  function countUpdating (){
    var length = ($("ol").children().length) - 1;
    $("p:contains('Count')").text("Count : " + length );
  }

  // Проверка Списков на уникальность значений
  function testUniquenessInputString( string ){
      var elemSet =   $("li:contains(" + string + ")"); 
      if ( elemSet.length === 0 )
      return false;
    
    return deppUniquenessTesting( string, elemSet );
  }

  // Проводит полное сравнение строк из полученного набора
  function deppUniquenessTesting( string, elemSet ){
      for (var i = 0; i < elemSet.length; i++){
      
      if ( string === elemSet[i].textContent ){
        return true;
      }
    }
    return false;
  }

  // Стандартизация входной строки
  function stringStandardization( string ){
      var str = string[0].toUpperCase() + string.slice(1).toLowerCase();
    return str;
  }

  // Реакция на клавишу ENTER (иммитирует клик)
  $("#text").keydown( function(e){
      if( e.key === "Enter"){
      $("input[type]").trigger("click");  
    }
  })

  function listLayout(){
      $("ol>li:even").css("background-color", "rgb(5, 5, 5)");
      $("ul>li:even").css("background-color", "rgb(5, 5, 5)");
  }

  listLayout();
});