$(function(){

	var ex =$(".ex1");


	//evento para desparar apos clique
	$(".ev1").click(function(){
		$(this).css("background","#ccc");
		ex.text("voce clicou");
	});

		//evento com 2 cliques
	$(".ev2").dblclick(function(){
		$(this).css("background", "#ccc");
		ex.text("voce due 2 cliques");

	})
	//colocar e tirar o foco de alguma coisa
	$(".ev3").focusin(function(){
		$(this).css("background", "#ccc")
		ex.text("voce deu foco");
	}).focusout(function(){
		$(this).css("background", "#000")
		ex.text("voce tirou foco");

	});
	//passar o mouse

	$(".ev4").hover(function(){
		$(this).css("background", "#ccc")
		ex.text("voce passou o mouse");
	});
	//evento de clicar e soltar o mouse
	$(".ev5").mousedown(function(){
		$(this).css("background","#ccc")
		ex.text("voce apertou o mouse");
	}).mouseup(function(){
		$(this).css("background","#ccc")
		ex.text("voce soltou o mouse");
	});
	//mouse contar, acrescentar +1
	var a =0;
	$(".ev6").mouseenter(function(){
		a +=1;
		ex.text("entradas do mouse" +a);
	}).mouseout(function(){
		ex.text("saida do mouse");
	});
	//mouse hover ao passa 
	var b =0;
	$(".ev7").mouseover(function(){
		b +=1;
		ex.text("mouse over "+b );
	}).mouseleave(function(){
		ex.text("mouse livre" );
	});
	//mostra as distancias dos eixos
	$(".ev8").mousemove(function(move){
		var localx = move.pageX;
		var localy = move.pageY;

		ex.text("movimento X: "+localx+"movimento Y: "+localy);
	});
});