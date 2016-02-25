$(function(){
	//aqui irei preencher o campo com uma mrca d´agua com o nome do campo
	$(".place").each(function(){
		//aqui ele pega o titulo do html da classe place
		var place = $(this).attr("title");
		var input = $(this);
		input
		//aqui ele pega o valor do place e coloca no input
			.val(place)
			//aqui ele deixa o valor do place cinza
			.css("color","#ccc")
			.focusin(function(){
				input.css("color","#000");
				//aqui verifico c o valor do inputi é o mesmo do valor a "marca d´agua"
				if(input.val() == place){
					input.val("");
				}

			}).focusout(function(){
				//aqui vou pegar o input.val e verificar c ta vazil 
				//c estiver ele ira aparce o valor do place macad´agua
				if(input.val()==""){
					input.css("color","#ccc");
					input.val(place);
				}
			});
	});
	//evento q digita e aparece em cima
	//eles altera de acordo como digitamos
	var ex = $(".ex1");
	/*$(".key").keypress(function(){
		ex.text($(this).val());
	});

	$(".key").keydown(function(){
		ex.text($(this).val());
	});*/
	//diferença tempo real
	$(".key").keyup(function(){
		ex.text($(this).val());
	});
	

});