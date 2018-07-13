$( document ).ready(function(){
  $("#count:first").append( $("ol").children(":visible").length );
  // можно еще получить число так :
  console.log( $("li:visible").length );
  console.log( $("ol").children(":visible").length );


  $("p").css("border", "2px dotted red")
			.css("padding", "5px")
			.css("margin-left", "20px")
			.css("margin-right", "500px")
			.css("text-align", "center")

  $("li:nth-child(odd)").css("background-color", "#F2E5E5");			
  $("li:nth-child(even)").css("background-color", "#FBF6F6");
      
  $("li")
    .dblclick( function(){
        $(this).hide();
        $("#count")[0].textContent = "count : " + $("li:visible").length;
    })
    .on("click", function(){
        $(this).css("text-decoration", "line-through");
    });
})