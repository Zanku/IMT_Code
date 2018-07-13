$(document).ready(function(){
	var STEP = 5;


	const MAX_HEIGHT = $("#container")[0].clientHeight;
	const MAX_WIDTH	 = $("#container")[0].clientWidth;

	
	// Создание элемента
	function create( top, left, container ){
		var ball = $("<div class='ball'></div>");
	  ball.css("top", top + "px");
		ball.css("left", left + "px");
	  $(container).append( ball );
	  
	 	return ball;
	}

	var sun = create( (MAX_HEIGHT - 43) / 2 , (MAX_WIDTH - 43) / 2 , "#container" );
	//var sun = create( 0 , 0 , "#container" );
	
	sun .css('background-image', 'url(images/sun.png)' )
		.css('width', '85px')
		.css('height', '85px');
	console.log( sun );	

	var mercury = create(0, 60, sun );
	mercury .css('background-image', 'url(images/Mercury.png)' )
			.css('width', 	'55px')
			.css('height', '40px');

	var venus = create(100, 200, sun );
	venus.css('background-image', 'url(images/Venus.png)' )
		 .css('width', 	'40px')
		 .css('height', '40px')

	var earth = create(160, 320, sun );
	earth.css('background-image', 'url(images/earth.png)' )
		 .css('width', '60px')
		 .css('height', '60px');

	var moon = create(-70, 0, earth );
	moon.css('background-image', 'url(images/moon.png)')
		.css('width', '30px')
		.css('height', '30px');

	// Запуск анимации
	//		element, radius, 	bias(x;y),			 stepTime
	anim( mercury, 	 	 60, { x : 20, 	y : 10}, 	93 );
	anim( venus, 		100, { x : 0, 	y : 0}, 	143 );
	anim( earth,		160, { x : 0, 	y : 0}, 	140 );
	anim( moon, 		 60, { x : 0, 	y : 0}, 	52 );

	// Создание анимации
	function anim( elem, radius, bias, stepTime ){
	
	  var result;
	  var top = elem.position().top;
	  var left = elem.position().left;
	  var position = { top : top, left : left };

	// Левый конус
	  if ( top <= ( bias.y - radius * 0.5 ) ){
	    position.left += STEP;  
	        result = cheсk( position.left, radius, bias.x );
	        if ( result ){
	          position.left = result;
	        }
	    position.top = bias.y - Math.round( Math.sqrt( Math.pow(radius, 2) - Math.pow( (position.left - bias.x) ,2) ));

	// Верхний конус
	  } else  if ( top >= ( radius * 0.5 + bias.y ) ){
	    position.left -= STEP;  
	        result = cheсk( position.left, radius, bias.x );
	        if ( result ){
	          position.left = result;
	        }  
	    position.top = bias.y + Math.round(Math.sqrt( Math.pow(radius, 2) - Math.pow( (position.left - bias.x) ,2) ));

	// Правый конус
	  } else if ( left <= ( bias.x - radius * 0.5 ) ){
	    position.top -= STEP;
	        result = cheсk( position.top, radius, bias.y );
	        if ( result ){
	          position.top = result;
	        }
	    position.left = bias.x - Math.round(Math.sqrt( Math.pow(radius, 2) - Math.pow( (position.top - bias.y) ,2) )); 

	// Нижний конус
	  }	else {
	    position.top += STEP;
	        result = cheсk( position.top, radius, bias.y );
	        if ( result ){
	          position.top = result;
	        }
	    position.left = bias.x + Math.round(Math.sqrt( Math.pow(radius, 2) - Math.pow( (position.top - bias.y) ,2) )); 
	  }


	  // Анимация
	    elem.animate( position, stepTime, function(){
	        anim( elem, radius, bias, stepTime );
	    });
	}

	// Проверяет значение на выход за допустимые пределы (защита от NaN)
	function cheсk( axis, radius, bias ){
		if ( axis < bias - radius ){ 
	  	return bias - radius;
	  } else if ( axis > ( radius + bias ) ){ 
	  	return radius + bias; }
	}
})