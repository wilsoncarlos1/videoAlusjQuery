$(function(){
	//trabalhando tg de imagens
	
	//só quando n existir a imagem mesmo 
	$("img").error(function(){
	//	$("img").attr("src","img/erro.jpg");
		var imagem = $(this).attr("src");
		alert("imagem "+imagem+"indisponivel");
		$("img").attr("src","img/erro.png");


		//8888888888888888888888888888888888888888888888


	});


});
$(function(){
	//para a imagem acompanha a janela do navegador
		
		$(window).resize(function(){
		$("img").width($(window).width()).height($(window).height());

	})

});
//quando rolar a imagem some 

$(function(){
	//emcapsula imagem sumir
	$(window).scroll(function(){
		$("img").fadeOut("1000");
	});

});


$(function(){
	//emcapsula imagem sumir
	$(window).scroll(function(){
		var topo =$(window).scrolltop();
		alert(topo);
	});

});