$(function(){
	var ex = $(".ex1");
	var ex2 = $(".ex2");
	var button = $(":button");

	/*button.click(function(){
		ex.fadeOut("slow");
		faz sumir elemento
	});*/
	//aqui troco efeito de vizualização 
	button.click(function(){
		ex.fadeTo("slow",0.3, function(){
			ex2.fadeTo("slow",0.3);
		});
		
	});
	
		

});