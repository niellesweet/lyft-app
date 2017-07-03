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
	  	 	$("#next").attr("disabled","flase");
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
	  	 	$("#next").attr("disabled","flase");
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
	  	 	$("#next").attr("disabled","flase");
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
	  	 	$("#next").attr("disabled","flase");
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
	  	 	$("#next").attr("disabled","flase");
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
	  	 	$("#next").attr("disabled","flase");
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
	  	 	$("#next").attr("disabled","flase");
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
	  	 	$("#next").attr("disabled","flase");
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
	  	 	$("#next").attr("disabled","flase");
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
	  	 	$("#next").attr("disabled","flase");
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
	  	 	$("#next").attr("disabled","flase");
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
	  	 	$("#next").attr("disabled","flase");
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
	  	 	$("#next").attr("disabled","flase");
	  	 }
	  });
	});

	//LOCALSTORAHGSAHAFS

});






