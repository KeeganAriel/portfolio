$(document).ready(function () {
	var factor = -1;
	$(".headtext1").hide();

	$(".startingStage").click(function(){
		$('.headtext1').animate( { "opacity": "show", top:"100"} , 1500 );
		$('.myphoto').animate( {width: 450, height: 450, left: -278, top: 13}, 1500 );
		$('.mylogo').animate({"opacity": 1, width: 400, height: 'auto', left: 575, top: 160}, 1500);
		$('.logo').animate( { width: 0, 'margin': 0, 'opacity': 1}, 1000); 
		$('.strengths').slideDown(1500); 
		$('.heart').slideDown(1300); 
		$('.design').slideDown(1300);
		$('.hide').slideDown(1300);
	});


	// $('.siteImage').hover(function() {
	// 	$('caption').show(1000);
	// },function(){
	// 	$('.caption').hide(1000);
	// });

});


$('.logo').hide();