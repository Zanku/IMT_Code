$(document).ready(function(){
	var div = $(".main");
	var params = { transform : 'rotate(50deg)' };
	var i = 0;

	wait();


	function wait(){
		setTimeout( rotate , 10)
	  //wait();
	}

	function rotate(){
		i += 60;
		var str = 'rotate(' + i +'deg)';
		params.transform = str;
	  
	div.css('transition', 'transform 1s')
	div.css("transform", str);


	//div.rotate( i + 'deg');

	console.log( "i = " + i);
	console.log("str = " + str);

	div.animate(params, 300, function next(){
		wait();
	});

	}
	//div.css("transform", "rotate(30deg)");
})