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

//**************************************************************************
//*********************aula9*****************************
	var ex = $(".ex1");
	//attr é parar dar foco
	//aqio pegeui o evento av1, quando seleciono ele mosta la em cima na class ex1
	/*$(".ev1").focus(function(){
		ex.text($(this).attr("title"));
		//aqui vou pedir para pular para o proximo campo
		//keyup mostra em tempo real o q esta sendo feito
	}).keyup(function(){
		//aqui sai automaticamente do campo
		if($(this).val()=="wilson"){
			$(".ev2").focus();
		}
	});*/
	//avisar q saiu do campo 
	//$(".ev1").blur(function(){
		//aqui ele ira pegar ele mesmo com o this e mostrara
	//	ex.text("saida do campo: " + $(this).attr("name"));
	//});

	$(".ev1").change(function(){
		ex.text("campo alterado: " + $(this).val());
	});
	//aqui envio o formulario
	$(".selecionar").click(function(){
		$(".ev3").select();
		//aqui bloqueio o envio do formulario
		$("form").submit(function(){
			return false;
		});
	});


});