var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){

	$("#enviar").click(function(){
		var name = $("#nombre").val();
		var correo = $("#email").val();

		if(name == ""){
			$("mensaje1").fadeIn();
			return false;
		}else{
			$("mensaje1").fadeOut();
			if(correo == "" || !expr.test(correo)){
				$("mensaje2").fadeIn();
				return false;
			}else{
				$("mensaje2").fadeOut();

			}
		}
	});
});