$(document).ready(function () {
	var factor = -1;
	$(".headtext1").hide();

 $(".startingStage").click(function(){

        $('.headtext1').animate( { "opacity": "show", top:"100"} , 1500 );

               $('.myphoto').animate( {width: 280, height: 280, left: -278, top: 13}, 1500 );
                  $('.mylogo').animate({ width: 1175, left: -265, top: -130}, 1500);
                    $('.logo').animate( {width: 0, height: 0 }, 1500 );
                    
            });


});