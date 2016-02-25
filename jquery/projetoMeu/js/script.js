
$(function(){

	var pa = $(".pa1");

	var button = $(":button");


		button.click(function(){
		pa.fadeIn("slow", function(){
			$(".pa2").fadeIn("slow",function(){
				$(".pa3").fadeIn("slow",function(){
					$(".pa4").fadeIn("slow",function(){
						$(".pa5").fadeIn("slow",function(){
							$(".pa2").fadeIn("slow");
						});
					});
				});
			});
		})
		
	});


});

$(document).ready(function(){
	$('.pa1').hide();
	$('.pa2').hide();
	$('.pa3').hide();
	$('.pa4').hide();
	$('.pa5').hide();
	$('.pa6').hide();

		$("#slide img:eq(0 )").addClass("ativo").show();
	var texto = $(".ativo").attr("alt");
	$("#slide").prepend("<p>"+texto+"</p>");
	setInterval(slide, 3000);

});
