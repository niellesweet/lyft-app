/*
$(document).ready(function(){

	$("#enviar").click(function(){
		var name = $("#nombre").val();
		var correo = $("#email").val();

		if(name == ""){
			$('#alert').html('debes  ingresar tu nombre').slideDown(500);
			$('#nombre').focus();
			return false;
		}else{
      $('alert').html('').slideUp(300);
       }

}
	});


});

*/



function validarNombre(){
   var nombre = document.getElementById("nombre").value;
   
   if (nombre == ""){
      $('#alert').html('debes  ingresar tu nombre').slideDown(500);
      /*se pone slideDown para q aparezca como animacion en 500 milisegundos */
      $('#nombre').focus(); /*con focus: se situa el cursor y no pasara al 
      siguiente campo hasta q se cumpla la condicion*/
      return false;
   }else{
      $('alert').html('').slideUp(300);
      /* slideUp se escondera el mensaje*/
   }

}

function validar(){
   var email = document.getElementById("email").value;
   
   if (email == ""){
      $('#alert').html('debes  ingresar tu correo electronico').slideDown(500);
      /*se pone slideDown para q aparezca como animacion en 500 milisegundos */
      $('#email').focus(); /*con focus: se situa el cursor y no pasara al 
      siguiente campo hasta q se cumpla la condicion*/
      return false;
   }else{
      $('alert').html('').slideUp(300);
      /* slideUp se escondera el mensaje*/
   }

}

$(document).ready(function() {
    $("#enviar").on("click", function() {
        var condiciones = $("#aceptar").is(":checked");
        if (!condiciones) {
            alert("Debe aceptar las condiciones");
            event.preventDefault();
        }
    });
    
});



