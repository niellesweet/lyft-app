
$("document").ready(function(){

	/* Quise hacerlo con array pero no pude u.u

	var opciones = [
		{	"nombre" : "Argentina",
			"codigo" : "+54",
			"img" : "assets/img/banderas/argentina.png"},
		{	"nombre" : "Bolivia",
			"codigo" : "+591",
			"img" : "assets/img/banderas/bolivia.png"},
		{	"nombre" : "Brasil",
			"codigo" : "+55",
			"img" : "assets/img/banderas/brasil.png"},
		{	"nombre" : "Chile",
			"codigo" : "+56",
			"img" : "assets/img/banderas/chile.png"},
		{	"nombre" : "Colombia",
			"codigo" : "+57",
			"img" : "assets/img/banderas/colombia.png"},
		{	"nombre" : "Ecuador",
			"codigo" : "+593",
			"img" : "assets/img/banderas/ecuador.png"},
		{	"nombre" : "Guayana",
			"codigo" : "+592",
			"img" : "assets/img/banderas/guayana.png"},
		{	"nombre" : "México",
			"codigo" : "+52",
			"img" : "assets/img/banderas/mexico.png"},
		{	"nombre" : "Paraguay",
			"codigo" : "+595",
			"img" : "assets/img/banderas/paraguay.png"},
		{	"nombre" : "Perú",
			"codigo" : "+51",
			"img" : "assets/img/banderas/peru.png"},
		{	"nombre" : "Surinam",
			"codigo" : "+597",
			"img" : "assets/img/banderas/surinam.png"},
		{	"nombre" : "Uruguay",
			"codigo" : "+598",
			"img" : "assets/img/banderas/uruguay.png"},
		{	"nombre" : "Venezuela",
			"codigo" : "+58",
			"img" : "assets/img/banderas/venezuela.png"},
	];

*/


//FUNCIONES INDEX2 E INDEX2-PAISES
	//Arreglo con direccion de imagenes de banderas
	var op = [
	"assets/img/banderas/argentina.png",
	"assets/img/banderas/bolivia.png",
	"assets/img/banderas/brasil.png",
	"assets/img/banderas/chile.png",
	"assets/img/banderas/colombia.png",
	"assets/img/banderas/ecuador.png",
	"assets/img/banderas/guayana.png",
	"assets/img/banderas/mexico.png",
	"assets/img/banderas/paraguay.png",
	"assets/img/banderas/peru.png",
	"assets/img/banderas/surinam.png",
	"assets/img/banderas/uruguay.png",
	"assets/img/banderas/venezuela.png"
	];

	//Arreglo con códigos de países
	var code = ["+54", "+591", "+55", "+56", "+57", "+593", "+592", "+595", "+51", "+597", "+598", "+58", "+52"];

	//Funciones que al clickear cambia la bandera codigo y placeholder correspondiente al país elegido además de activar el boton next si esta correcta la información
	//ARGENTINA
	$("#ar").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[0]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[0]);
	  $("input#telefono").attr("placeholder","123456789012");

	  $("#next").click(function(e){
	  	e.preventDefault();
	  	 if($("input#telefono").val() == "" || $("input#telefono").length != 12 || isNaN($("input#telefono").val())){
	  	 	alert("Debe ingresar un número de 12 dígitos");
	  	 	$("#next").attr("disabled","true");
	  	 }else{
	  	 	$("#next").attr("disabled","false");

	  	 }
	  });
	});


	//BOLIVIA
	$("#bo").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[1]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[1]);
	  $("input#telefono").attr("placeholder","12345678");

	  $("#next").click(function(e){
	  	e.preventDefault();
	  	 if($("input#telefono").val() == "" || $("input#telefono").length != 8 || isNaN($("input#telefono").val())){
	  	 	alert("Debe ingresar un número de 8 dígitos");
	  	 	$("#next").attr("disabled","true");
	  	 }else{
	  	 	$("#next").attr("disabled","false");
	  	 }
	  });
	});


	//BRASIL
	$("#br").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[2]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[2]);
	  $("input#telefono").attr("placeholder","12345678901");

	  $("#next").click(function(e){
	  	e.preventDefault();
	  	 if($("input#telefono").val() == "" || $("input#telefono").length != 11 || isNaN($("input#telefono").val())){
	  	 	alert("Debe ingresar un número de 11 dígitos");
	  	 	$("#next").attr("disabled","true");
	  	 }else{
	  	 	$("#next").attr("disabled","false");
	  	 }
	  });
	});


	//CHILE
	$("#cl").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[3]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[3]);

	  $("#next").click(function(e){
	  	e.preventDefault();
	  	 if($("input#telefono").val() == "" || $("input#telefono").length != 9 || isNaN($("input#telefono").val())){
	  	 	alert("Debe ingresar un número de 9 dígitos");
	  	 	$("#next").attr("disabled","true");
	  	 }else{
	  	 	$("#next").attr("disabled","false");
	  	 }
	  });
	});


	// COLOMBIA
	$("#co").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[4]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[4]);
	  $("input#telefono").attr("placeholder","1234567890");

	  $("#next").click(function(e){
	  	e.preventDefault();
	  	 if($("input#telefono").val() == "" || $("input#telefono").length != 10 || isNaN($("input#telefono").val())){
	  	 	alert("Debe ingresar un número de 10 dígitos");
	  	 	$("#next").attr("disabled","true");
	  	 }else{
	  	 	$("#next").attr("disabled","false");
	  	 }
	  });
	});


	// ECUADOR
	$("#ec").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[5]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[5]);

	  $("#next").click(function(e){
	  	e.preventDefault();
	  	 if($("input#telefono").val() == "" || $("input#telefono").length != 9 || isNaN($("input#telefono").val())){
	  	 	alert("Debe ingresar un número de 9 dígitos");
	  	 	$("#next").attr("disabled","true");
	  	 }else{
	  	 	$("#next").attr("disabled","false");
	  	 }
	  });
	});


	//GUAYANA
	$("#gu").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[6]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[6]);
	  $("input#telefono").attr("placeholder","1234567");

	  $("#next").click(function(e){
	  	e.preventDefault();
	  	 if($("input#telefono").val() == "" || $("input#telefono").length != 7 || isNaN($("input#telefono").val())){
	  	 	alert("Debe ingresar un número de 7 dígitos");
	  	 	$("#next").attr("disabled","true");
	  	 }else{
	  	 	$("#next").attr("disabled","false");
	  	 }
	  });
	});


	//MÉXICO
	$("#me").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[7]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[7]);
	  $("input#telefono").attr("placeholder","123456789012");

	  $("#next").click(function(e){
	  	e.preventDefault();
	  	 if($("input#telefono").val() == "" || $("input#telefono").length != 12 || isNaN($("input#telefono").val())){
	  	 	alert("Debe ingresar un número de 12 dígitos");
	  	 	$("#next").attr("disabled","true");
	  	 }else{
	  	 	$("#next").attr("disabled","false");
	  	 }
	  });
	});


	// PARAGUAY
	$("#pa").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[8]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[8]);

	  $("#next").click(function(e){
	  	e.preventDefault();
	  	 if($("input#telefono").val() == "" || $("input#telefono").length != 9 || isNaN($("input#telefono").val())){
	  	 	alert("Debe ingresar un número de 9 dígitos");
	  	 	$("#next").attr("disabled","true");
	  	 }else{
	  	 	$("#next").attr("disabled","false");
	  	 }
	  });
	});


	//PERÚ
	$("#pe").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[9]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[9]);

	  $("#next").click(function(e){
	  	e.preventDefault();
	  	 if($("input#telefono").val() == "" || $("input#telefono").length != 9 || isNaN($("input#telefono").val())){
	  	 	alert("Debe ingresar un número de 9 dígitos");
	  	 	$("#next").attr("disabled","true");
	  	 }else{
	  	 	$("#next").attr("disabled","false");
	  	 }
	  });
	});


	//SURINAM
	$("#su").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[10]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[10]);
	  $("input#telefono").attr("placeholder","1234567");

	  $("#next").click(function(e){
	  	e.preventDefault();
	  	 if($("input#telefono").val() == "" || $("input#telefono").length != 7|| isNaN($("input#telefono").val())){
	  	 	alert("Debe ingresar un número de 7dígitos");
	  	 	$("#next").attr("disabled","true");
	  	 }else{
	  	 	$("#next").attr("disabled","false");
	  	 }
	  });
	});


	// URUGUAY
	$("#ur").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[11]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[11]);
	  $("input#telefono").attr("placeholder","12345678");

	  $("#next").click(function(e){
	  	e.preventDefault();
	  	 if($("input#telefono").val() == "" || $("input#telefono").length != 8 || isNaN($("input#telefono").val())){
	  	 	alert("Debe ingresar un número de 8 dígitos");
	  	 	$("#next").attr("disabled","true");
	  	 }else{
	  	 	$("#next").attr("disabled","false");
	  	 }
	  });
	});


	// VENEZUELA
	$("#ve").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[12]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[12]);
	  $("input#telefono").attr("placeholder","1234567890");

	  $("#next").click(function(e){
	  	e.preventDefault();
	  	 if($("input#telefono").val() == "" || $("input#telefono").length != 10 || isNaN($("input#telefono").val())){
	  	 	alert("Debe ingresar un número de 10 dígitos");
	  	 	$("#next").attr("disabled","true");
	  	 }else{
	  	 	$("#next").attr("disabled","false");
	  	 }
	  });
	});

	//LOCALSTORAGE

});

/* boceto parte de cony y pauli */
/*funcion index3/*
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
    // index2.html
   //
   $("input#telefono")
         $("#myModal").on("shown.bs.modal", function () {
             $("#myInput").focus()
             //
             var clave = $("input#telefono").val();
             $(".modal-body#codigo").append(clave);
             console.log("trabajando");
             // storage obtener desde clave
             $.jStorage.set(clave);
           });
 // Fin index2.html
});
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

//almacena datos 
$("#submit").click(function() {

var nombre = $('#nombre').val();
var email = $('#email').val();
//El método trim () elimina espacios en blanco de ambos lados de una cadena.
if($.trim('#nombre') == '' || $.trim('#email')== ''){
  $('')
}


}

//cony: fin local storage
$.jStorage.set(nombre, email);

$("document").ready(function(){
  // index.html
    // validacion click boton Sign Up
    $("#sign").click(function(){
    window.location.href = "index2.html";
    });
  // Fin index.html
/* Geolocalización */

function initMap(){

    /* RUTA para calcular la ruta entre dos puntos */
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: -9.1191427, lng: -77.0349046}, // muestra ubicacion inicial en stgo --> center: {lat: -33.4569400, lng: -70.6482700},
    disableDefaultUI: true // quita el zoom y las vistas por defecto del mapa
  });

  directionsDisplay.setMap(map);


	/*Dentro de la función initMap(), agregamos la funcion buscar()
		*.getCurrentPosition -> permite al usuario obtener su ubicación actual, el parámetro funcionExito,
		se ejecuta solo cuando el usuario comparte su ubicación, mientras que funcionError se ejecuta
		cuando se produce un error en la geolocalización.

		Pregunta si quieres activar geolocalizacion.
	*/

	function buscar(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
		}
	}
	var latitud,longitud;

	/*Agregaremos las variables funcionExito, con el que obtendremos nuestra latitud
	o longituf y además crearemos un marcador de nuestra ubicación*/

	var funcionExito = function(posicion){
		latitud = posicion.coords.latitude;
		longitud = posicion.coords.longitude;

	/*Aumentaremos la profundidad de visualización de nuestro mapa con map.setZoom y le asignaremos
	un nuevo centro con map.setCenter.
	También añadimos funcionError con un mensaje para el usuario, en caso de que nuestra geolocalización
	falle.
	*/
		map.setZoom(17);
		map.setCenter({lat: latitud,lng: longitud}); // centra el mapa en la ubicacion

	// Función que coloca un marcador
	var miUbicacion = new google.maps.Marker({
		position: {lat: latitud, lng:longitud},
		animation: google.maps.Animation.BOUNCE, // .BOUNCE para que salte el monito .DROP para que deje de saltar
		map: map,
		icon: 'assets/img/iconoPerrito.png', // icono
	});

	}

	// se ejecuta esta funcion si no escuentra la ubicacion
	var funcionError = function (error){
		error(true,map.getCenter());
		alert("Tenemos un problema con encontrar tu ubicación");
	}
	buscar(); // Esto es lo que permite que al cargar la pagina la funcion buscar se ejecute y pregunte lo de la ubicacion

  /* Autocomplete */
  var final = (document.getElementById('destino'));
  var autocomplete = new google.maps.places.Autocomplete(final);
  autocomplete.bindTo('bounds', map);

  // para que haga la ruta con el boton
  	document.getElementById('ruta').addEventListener('click', function(){
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });

  // RUTA TRAZADO de ambos puntos, origin a destination
  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
    origin: {lat: latitud, lng:longitud}, // origen lo tenemos conectado a la variable de coordenadas
    destination: document.getElementById('destino').value,
    travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
  }
}

/* FIN Geolocalización */

