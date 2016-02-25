$(function(){
	var nav =  $(".menu");
	//tenho q encapsula minha janela "o windows"
	$(window).scroll(function(){
		//aqui tenho q verificar o tamanho da minha dive 
		if($(this).scrollTop()>200){
			//menu-fixo é a class q criei la no css
			nav.addClass("menu-fixo");
		}else{
			nav.removeClass("menu-fixo");
		}
	});
     
});