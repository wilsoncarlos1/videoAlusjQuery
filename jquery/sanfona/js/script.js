$(function() {
	$(".titulo").click(function(){

		var conteudo = $(this).parent().find(".conteudo");

		if(!conteudo.hasClass("show")){
			//aqui eu deixo a caixa oculta
			$(".caixa").find(".show").slideUp("fast", function(){
				$(this).addClass("hide").removeClass("show")
			});
			//aqui eu demosntro a caixa oculta ao clicar nela
			conteudo.slideDown("fast", function(){
				$(this).addClass("show").removeClass("hide")
			});
		}
	})

    

});