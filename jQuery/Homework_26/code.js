$(document).ready( function(){
	var elem = $("<th></th>");
	var elemAlert = $("<p class = alert></p>");
	countUpdating();

	// Действия при клике на ТАБЛИЦУ
	$('table[name=list]').click( function(e){
		var str = $(e.target).parent();

	if ( !str.hasClass('hold') ){
			str.toggleClass("remove");
	  }
	});


	// Действия при ДВОЙНОМ клике на ТАБЛИЦУ
	// Устанавливается дата выполнения
	$('table[name=list]').dblclick( function(e){
	  var str = $(e.target).parent();
	  var date = new Date();
	  
	  if ( !str.hasClass('hold') ){
	  	str.css("text-decoration", "none");
	    str.children().last().text( date.toISOString().slice(0, 10) );
	    $('table').last().append( str );
	  }
		countUpdating();
	})


	// Действия при клике на КНОПКУ Add
	$("input[type=button][value=Add]").on("click", function(){
	  
	  var inputs = $("input:lt(2)");
	  
	  classWarnAdd( inputs );
	  addNewColumn( inputs );
	  countUpdating();
	});


	// Действия при клике на КНОПКУ Remove
	$("input[type=button][value=Remove]").on("click", function(){	
	  $(".remove").remove();
	  countUpdating();
	});


	// Обновляет счетчик
	function countUpdating (){
		$("#count").text( "Count : " + ($('table[name=list] tr').length - 1) );
	  stimulation();
	}


	// Добавляет класс WARN при определенном условии
	function classWarnAdd( inputs ){
		$(".warn").removeClass("warn");
		$("p.alert").remove();
	  var status = false;
	  
		for (var i = 0; i < inputs.length; i++){
	  
	  	if ( inputs[i].value === '' ){
	    
	    	$(inputs[i]).addClass('warn');
	      status = true;
	    }
	  }
	  if ( $('select').val() === null ){
	  	$('select').addClass("warn");
	    status = true;
	  }
	  
	  if ( status ){
	  	var alert = elemAlert.text("Заполните ОБЯЗАТЕЛЬНЫЕ поля");
	    $("table:last").after(alert);
	  }
	}


	// Добавление нового элемента в таблицу
	function addNewColumn( inputs ){
	// Проверка на ошибки
		if ( $(".warn").length === 0 ){
	  	
	    var inputText = stringStandardization( inputs[0].value );
	    
	    if ( testUniquenessInputString( inputText ) ){
	    	existingAlert( inputText );
	      return;
	    }
	    
	    var thItem = elem.clone().text( inputText );
	    var thPriority = elem.clone().text( $("select").val() );
	    var thDate = elem.clone().text( inputs[1].value );
	    var tr = $("<tr></tr>").append( thItem ).append( thPriority ).append( thDate );
	    
	   	var rowWithThisPriority = getTableRowsPriority( thPriority );
	    
	    var existingTableRows = $('table[name=list] tbody tr');
	    
	    // Проверка на наличие элементов в таблице
	    if ( existingTableRows.length > 1 ){
	    
	    	switch( rowWithThisPriority ){
	    	case undefined :
	      	$("table[name=list]").append( tr );
	        break;
	      case null :
	      	$(".hold").after( tr );
	        break;
	      default :
	       var tableRow = $(dateСompare( rowWithThisPriority, tr )[0])
	       tableRow.after( tr ); 
	        break;	
	      }
	      
	    } else {
	      existingTableRows.after( tr );
	    }
	    $(".alert").remove();
	  }
	}


	// Сортировка элементов по приоритету
	function getPriority( element ){
		var prior;
	  
	  switch ( element ){
	  	case "Very High" : 
	  		prior = 5;
	      break;
	    case "High" : 
	  		prior = 4;
	      break;
	    case "Medium" : 
	  		prior = 3;
	      break;
	    case "Low" : 
	  		prior = 2;
	      break;
	    case "Far Future" : 
	  		prior = 0;
	      break;  
	      default : 
	      	console.log( "element = " + element);
	      	throw new Error("Unknown name of PRIORITY");
	  }
	  return prior;
	}


	//Функция сравнивает приоритет добавляемой строки со строками таблицы
	// Если у добавляемой строки приоритет ВЫШЕ чем у всех строк таблицы, то возвращает NULL
	// Если у добавляемой строки приоритет НИЖЕ чем у всех строк таблицы, то возвращает UNDEFINED
	// Иначе возвращает массив который обрабатывается функцией dateСompare
	function getTableRowsPriority( thPriority ){
		// Берем только элементы с колонки ПРИОРИТЕТ
	    var tableTR = $("table[name=list] tbody tr:gt(0) th + th:even")

		var priorityTh = getPriority( thPriority.text() );
		var matchSet = [];
	    
	    for (var i = 0; i < tableTR.length; i++){
	    	
	      let tableTRpriority = getPriority( $(tableTR[i]).text() );
	      
	      
	      if ( tableTRpriority > priorityTh ){
	        continue;
	        
	      } else if ( tableTRpriority ===  priorityTh ){
	        matchSet.push( $(tableTR[i]).parent() );
	      
	      }else if( i > 0 &&  (tableTRpriority < priorityTh) && (priorityTh < getPriority( $(tableTR[i - 1]).text() ) ) ) {
	      	matchSet.push( $(tableTR[i - 1]).parent() );
	        return matchSet;
	      
	      } else {
	      	// Если первый элемент будет с меньшим приоритетом, что строка добавится
	        if ( matchSet.length < 1 ){
	        	matchSet = null;
	        }
	        // Если идут элементы с меньшим приоритетом, что цикл закончится
	        return matchSet;
	      }
	    }
	    if ( matchSet.length > 0 ){
	    	return matchSet;
	    }
	}


	// Сравнение даты исполнения пунктов
	// Если в масииве 1 элементо то:
	//	    1)	сравнивается приоритеты :
	//						1.1) Если они НЕ РАВНЫ, то элемент вставляется после элемента из масиива
	//						1.2) Если РАВНЫ, то сравниваются их ДАТЫ
	//									1.2.1) Если дата в элементе таблицы МЕНЬШЕ, то возвращается его ПРЕДЫДУЩИЙ сиблинг
	//									1.2.2) Если БОЛЬШЕ, возвращается он сам
	//			2) сравниваются даты элементов в массиве для определения места для нового элементы
	//						2.1) Если дата в элементе массива МЕНЬШЕ или РАВНА, то ничего не происходит
	//						2.2) Если дата БОЛЬШЕ возвращается предыдущий элемент ( вставка происходит после предыдущего элемента)
	//			3) если цикл отработал и элемент не нашел совего места, то он вставляется после последнего элемента из массива
	function dateСompare( arrOfElements, tr ){
	  	
	  var trChildren = tr.children();
	  // Если в массиве 1 элемент, то эти либо единственное совпадение, либо элемент удовлетворяющий наше условие
	  if ( arrOfElements.length < 2 ){
	  	// Приоритет
	    if ( tr.children().eq(1).text() !== $(arrOfElements[0]).children().eq(1).text() ){
	    	//console.log("<<<<<<<<<<<<   1  >>>>>>>>>>>>>>");
	    	return arrOfElements;
	    // Дата
	    } else if ( tr.children().last().text() < $(arrOfElements[0]).children().last().text() ){
	    	//console.log("<<<<<<<<<<<<   2  >>>>>>>>>>>>>>");
	      return $(arrOfElements[0]).prev();
	    
	    } else {
		    //console.log("<<<<<<<<<<<<   3  >>>>>>>>>>>>>>");
	    	return arrOfElements;
	    }
	  // Если совпадений много, то проверяем их даты
	  } else {
	  	for (var i = 0; i < arrOfElements.length; i++ ){
	    
	    	let elementDate = $(arrOfElements[i]).children().last().text();
	      let newElementDate = trChildren.last().text();
	      
	      if ( new Date(elementDate) <= new Date(newElementDate) ){
	      	//console.log("<<<<<<<<<<<<   4  >>>>>>>>>>>>>>");
	        continue;
	        
	      } else {
	      //console.log("<<<<<<<<<<<<   5  >>>>>>>>>>>>>>");
	      	return $(arrOfElements[i]).prev();
	      }
	    }
	    //console.log("<<<<<<<<<<<<<   6   >>>>>>>>>>>>>>");
	    return $(arrOfElements[i - 1]);   
	  }
	}


	//Стандартизация вводимой строки
	function stringStandardization( string ){
		var str = string[0].toUpperCase() + string.slice(1).toLowerCase();
	  return str;
	}


	// Проверка Списков на уникальность значений
	function testUniquenessInputString( string ){
		var elemSet =	$("table tbody tr th:first-child:gt(0):contains(" + string + ")"); 
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


	// Предупреждение о наличии даного пункта
	function existingAlert( string ){
		var existeAlert = $(".alert");
	  
	  if ( existeAlert.length > 0 ){
	  	existeAlert.text("Пункт \"" + string + "\" уже существует");
	  
	  } else {
	  	var alert = elemAlert.text("Пункт \"" + string + "\" уже существует");
	   	$("table:last").after( alert );
	  }
	}


	// Сооздание мотивирующего сообщения при опустошении списка
	function stimulation(){

		  if ( $("table[name = list] tbody tr").length < 2 ){
	    
					var stimul = $("<p class=stimul></p>").text("You are so INCREDIBLE! Good Work!");
	  			$("table:eq(0)").before( stimul );
	    } else {
	    	$("p.stimul").remove();
	    }
	}
})