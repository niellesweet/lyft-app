/* boceto parte de cony y pauli */
function validar(){
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