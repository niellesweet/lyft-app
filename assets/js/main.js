// parte de pauli y cony para html 3

function validarNombre(){
   var nombre = $("#nombre").val();
   
   if (nombre == ""){
      $('#alert').html('Debes  ingresar tu nombre').slideDown(500);
      /*se pone slideDown para q aparezca como animacion en 500 milisegundos */
      $('#nombre').focus(); /*con focus: se situa el cursor y no pasara al 
      siguiente campo hasta q se cumpla la condicion*/
      return false;
   }else{
      $('alert').html('').slideUp(300);
      /* slideUp se escondera el mensaje*/
   }


}
//cony: funcion validador para q el mail tenga @ y cl o com.
function validador(email){
   var tester= /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
   return tester.test(email);

}

function validar(){
   var email = $("#email").val();
   
   if (email == ""){
      $('#alert').html('Debes  ingresar tu correo electronico').slideDown(500);
      /*se pone slideDown para q aparezca como animacion en 500 milisegundos */
      $('#email').focus(); /*con focus: se situa el cursor y no pasara al 
      siguiente campo hasta q se cumpla la condicion*/
      return false;
   }else{
      $('alert').html('').slideUp(300);
      /* slideUp se escondera el mensaje*/
   }

 //cony :agrego una condicion para q em mail sea valido
   if(validador(email)==false){
      $('#alert').html('Ingresa un mail válido').slideDown(500);
      $('#email').focus();
      return false;
   }else{
      $('#alert').html('').slideUp(300);
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

 //cony :aqui agrege local storage
$.jStorage.set(nombre, email);
