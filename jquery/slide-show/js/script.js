$(function(){
	//aqui pesso para selecionar a primeira imagen
	//o eq(0) é para pegar a primeira imagen 
	$("#slide img:eq(0)").addClass("ativo").show();
	var texto = $(".ativo").attr("alt");
	$("#slide").prepend("<p>"+texto+"</p>");
	setInterval(slide, 3000);

	//funçao para alterar as imagens 
	function slide(){
		if ($(".ativo").next().size()){

			$(".ativo").fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");

		}else{
			//aqui é para sai as imagens apos 3s
			$(".ativo").fadeOut().removeClass("ativo");
			//aqui é para entrar imagens 
			$(".ativo img:eq(0)").fadeIn().addClass("ativo");

		}
		//aqui nessa variavel coloquei nome para todas as imagens
		//para n ficar todas com o mesmo nome
		var texto = $(".ativo").attr("alt");
		//aqui peguei o nome das imagens la no html e fiz elas aparecerem no slide
		$("#slide p ").hide().html(texto).delay(500).fadeIn();
	}

	
});