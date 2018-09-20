
$(document).ready(function(){

	$(".menuItem").click(function(event){
		event.preventDefault();
		var $link = $(this).attr("href");
		console.log("fuck");
		$("#mainContent").animate({
			scrollLeft: $("#mainContent").scrollLeft() + $("link").offset().left
		},500);	
		
	});
});