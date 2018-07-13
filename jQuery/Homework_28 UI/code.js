$(document).ready( function(){
	$("#second, #first").hide();

	$(".item").draggable({
		helper : "clone"
	});

	$("#basket").droppable({
		activate : function( event, ui ){
	  },
	  drop : function( event, ui ){
	  	createList( ui.draggable.text() );
	    //ui.draggable.remove();
	  }
	});

	$("ol").sortable();

	function createList( elem ){
		var li = $("<li><div class='text line'></div><a class='delete line'></a></li>");
	  li.children().first().prepend( elem );
	  $("div ol").append( li );
	  $("#first").show();
	}

	// Удаление пунктов списка
	$("#list").click(function( e ){
		if ( e.target.tagName === "A" && e.target.className === "delete line"){
	  	$(e.target).parent().remove()
	  }
	  
	  if ( $('li').length === 0 ){
	  	$("#first").hide();
	  }
	})

	//Очистка списка
	$("input[value='Очистить']").click(function(){
		$("ol").empty();
	  $("#first").hide();
	})

	// Купить
	$("input[value='Купить']").first().click(function(){
		var items = $("#items");
		var list =	$("ol").clone().addClass('confirmation');
	  list.children().children("a").remove();
	  items.children().hide( "size", {}, 1000, function(){
	  	items.prepend( list );
	  	$("#second").show(); 
	  } );
	});


	// НАЗАД
	$("input[value='Назад']").click(function(){
	  $("ol").first().remove();
	  $("#items").children().show();
	  $("#second").hide();
	});


	// Вторая кнопка КУПИТЬ
	$("input[value='Купить']").last().click(function(){
		alert("Заказ принят");
	});
})