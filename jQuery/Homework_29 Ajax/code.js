$(document).ready( function(){
////// https://jsonplaceholder.typicode.com/users

	const PATTERN_ID 		= /\d+/;
	const PATTERN_NAME 		= /\D{2,}(\s\D{2,})*/ ;
	const PATTERN_USER_NAME = /^[A-Za-z].{3,}/ ;
	const PATTERN_EMAIL 	= /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
	const URL = 'https://jsonplaceholder.typicode.com/users';

	var report = $("<p class = 'report'></p>");
	var typeOfRequest = 'get';
	var warn = $('<p class="warn"></p>');
	var empty = "Введите ";
	// текст для ошибок
	var text = {	   id : 'В этом поле должны быть только цифры', 
					 name : 'Количество симоволов должно быть больше 2-х',
	     		 username : 'Начинается с буквы, и должно быть 4 символа',
	           		email : 'Email веден не корректно'};
	// Переключение между режимами           
	var mods = { 	   get : function(){ 	$('input[placeholder]').hide();	},
					  post : function(){ 	$('input[placeholder]').show();
	    												$('#id').hide();   	},
	             	   put : function(){  $('input[placeholder]').show(); 	},
					delete : function(){  $('input[placeholder]').hide();
	      												$('#id').show(); 	},
				};
	// Определение типа запроса
	var request = {    get : send_GET_request,
					  post : send_POST_request,
					   put : send_PUT_request,
	              	delete : send_DELETE_request,
	              };
	// Проверку полей для раздичных режимов
	var checkList = {  	 get : function(){ return true } ,
						post : function(){ return +
	                  			check (	$("#name")	  , PATTERN_NAME ) 		&
								check ( $("#username"), PATTERN_USER_NAME ) &
								check ( $("#email")	  , PATTERN_EMAIL ) 	},
	                     put : function(){ return +
	                   			check (	$("#id")	  , PATTERN_ID )		&
								check ( $("#name")	  , PATTERN_NAME ) 		&
								check ( $("#username"), PATTERN_USER_NAME ) &
								check ( $("#email")	  , PATTERN_EMAIL );	},
	                  delete : function(){ return +
	                			check ( $("#id"), PATTERN_ID );					},   
								};
	// переход в режим GET, POST, PUT, DELETE
	mods[ typeOfRequest ]();



	$('#send').click(function(){
	// Очистка от ошибки (ошибка запроса)
		$("#error").empty();

		if ( checkList[ typeOfRequest ]() ){
			var obj = {};
	       	obj.id 		 = $("#id").val();
	       	obj.name 	 = $("#name").val();
	       	obj.username = $("#username").val();
	       	obj.email 	 = $("#email").val();
			request[ typeOfRequest ]( obj );
	  }
	})

	// Проверка определенного поля по шаблону
	function check( elem, pattern){
		if ( elem.val().length < 1 ){
	  		create( elem, empty + elem.attr('placeholder') );
	      return null;
	  } else if ( !elem.val().match( pattern ) ){
	    	create( elem, text[ elem.attr('id') ] );
	      return null;
	  } else {
	  		remove( elem );
	      return true;
	  }
	}

	// Сигнализация о наличии ошибок в поле
	function create( elem, text ){
		if ( !elem.next().is('p') ){
	    	elem.addClass('alert');
		    elem.after( warn.clone().text( text ) );
	    } else {
	    	elem.next().text( text );
	    }
	}

	// Удаление указаний на ошибку
	function remove( elem ){
		elem.removeClass('alert');
	    if ( elem.next().is('p') ){
	        elem.next().remove();
	    }
	}

	// Переключение между режимами
	$('table').click(function( e ){
		var target = $(e.target);
	  
	  clearWarnings();
	  
	  if ( target.is('td') ){
	  	$('.selected').removeClass('selected');
	  	target.addClass('selected');
	    typeOfRequest = target.attr("id"); 
	    mods[ typeOfRequest ]();
	  }
	});





	function send_GET_request(){
		$.ajax({
	  	url 		: URL,
	    success : function( resp ){
		      	$("#info").empty();
				var responce = resp;
		      	responce.forEach( function( item ){
		      	elementCreation( 'id = ' + item.id + ', name = ' + item.name + ', username = ' + item.username );
		      	});
		    },
	    error 	: function( error ){
		    	$("#error").html('Error. Status code: ' + error.status);
		    }
	  })
	}

	function send_POST_request( info ){
		$.ajax({
	  	method  : "POST",
	    url 	: URL,
	    data 	: { name : info.name,  username : info.username, email : info.email },
	    success : function( resp ){
	    	var text = "id = " + ($("#info >").length + 1) +  
	    			", name = " + info.name + 
	    		", username = " + info.username + 
	    		   ", email = " + info.email;

	    	elementCreation( text );
	      $("input[placeholder]").val('');
	    },
	    error : function( error ){
	    	$("#error").html('Error. Status code: ' + error.status);},
	  });
	}

	function send_PUT_request( info ){
		$.ajax({
	  	method 	: "PUT",
	    url 	: (URL + '/' + info.id),
	    data 	: {  name : info.name,  username : info.username, email : info.email },
	    success : function( resp ){
	    var text = "id = " + info.id + 
	    		", name = " + info.name + 
	    	", username = " + info.username + 
	    	   ", email = " + info.email;

	    	$("#info p:nth-child(" + info.id + ")" ).text( text );
	      	$("input[placeholder]").val('');
	    },
	    error : function( error ){
	    	$("#error").html('Error. Status code: ' + error.status);},
	  });
	}


	function send_DELETE_request( info ){
		$.ajax({
	  	method 	: "DELETE",
	    url 	: URL + '/' + info.id,
	    success : function( resp ){
		    	$("#info p:nth-child(" + info.id + ")").remove();
		      	$("input[placeholder]").val('');
		    },
	    error 	: function( error ){
		    	$("#error").html('Error. Status code: ' + error.status);},
		  	});
	}

	// Добавление элемента на страницу
	function elementCreation( info ){
		var elem = report.clone().text( info );
	  $('#info').append( elem );
	}

	// Удаление информации об ошибквх ввода
	function clearWarnings(){
		var inputs = $("input[placeholder]");
	  for (var i = 0; i < inputs.length; i++){
	  	  remove( $(inputs[i]) );
	  }
	}
})