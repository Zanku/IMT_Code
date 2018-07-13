$(document).ready(function(){
	var STEPS_QUANTITY = 9;
	var HEIGHT_COEFFICIENT = 2;
	const WAIT_TIME = 500;

	var params = { 	left 	: "=0px",
	      			height 	: "=0px" };

	var widthMax  = $(".main")[0].getBoundingClientRect().width;
	var heightMax = $(".main")[0].getBoundingClientRect().height;
	var working = false;


	function wait(){
		setTimeout( anime, WAIT_TIME );
	}

	function anime(){
		var elem = $(".elem");
		var position = elem.position();
	  
	if ( position.left > (widthMax * 0.8) ){
	   params.left = "-=" + (widthMax / STEPS_QUANTITY) + "px" ;
	} else if ( position.left < (widthMax * 0.1) ) {
	   params.left = "+=" + (widthMax / STEPS_QUANTITY) + "px" ;
	}


	if ( position.top < (heightMax * 0.1) ){
	   params.height = "-=" + (heightMax / STEPS_QUANTITY) * HEIGHT_COEFFICIENT + "px" ;
	} else if ( position.top > (heightMax * 0.8) ) {
	   params.height = "+=" + (heightMax / STEPS_QUANTITY) * HEIGHT_COEFFICIENT + "px" ;
	}

	// console.log( $(".elem").position() );
	      
	elem.animate( params, "slow", function(){
				
	      if ( working ){
	      	wait();
	      } else {
	      	return false
	      }
	    })
	  
	}

	$(".start").click(function(){
		
		if ( !working ){
	  	working = true;
	    var elem = elemCreation(); 
	    wait();
		}
	});

	$(".stop").click(function(){
		working = false; 
	});

	function elemCreation(){
		
	  var elem = $(".elem");
	  
	  if ( elem.length > 0 ){
	  	return elem
	  
	  } else {
	  	var width  = widthMax / STEPS_QUANTITY;
		var height = heightMax / STEPS_QUANTITY;
		elem = $("<div class = elem></div>");
	  	elem.css("width", "" + width + "px")
	  		.css("height", "" + height + "px");
	  	$(".main").append( elem );
			
	    return elem;
	  }
	}

})