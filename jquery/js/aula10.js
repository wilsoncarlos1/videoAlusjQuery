$(function(){
	var ex = $(".ex1");
//evento q faz des´parecer 
	$(".ev1").click(function(){
		ex.hide("3000");
	});
		//aqui faz aparecer 
		$(".ev2").click(function(){
		ex.show("3000");
	});
		//esse aqui faz as 2 coisas aparecer e sumir 
		$(".ev3").click(function(){
		ex.toggle("3000");
	});

		$(".ev4").keyup(function(){
			var texto = $(this).val();
			//aqui c eu digitar hide el somo, se eu digitar show wlw aparece
			//c eu digitar toggleele aparece ou somo 
			if(texto =="hide"){
				ex.hide("1000");
			}

			if(texto =="show"){
				ex.show("1000");
			}

			if(texto =="toggle"){
				ex.toggle("1000");
			}
		})



});