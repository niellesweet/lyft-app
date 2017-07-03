$("document").ready(function(){
	/*var opciones = [
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

	//Funciones que al clickear cambia la bandera codigo y placeholder correspondiente al país elegido
	$("#ar").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[0]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[0]);
	  $("input#telefono").attr("placeholder","123456789012");
	});

	$("#bo").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[1]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[1]);
	  $("input#telefono").attr("placeholder","12345678");
	});

	$("#br").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[2]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[2]);
	  $("input#telefono").attr("placeholder","12345678901");
	});

	$("#cl").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[3]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[3]);
	});

	$("#co").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[4]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[4]);
	  $("input#telefono").attr("placeholder","1234567890");
	});

	$("#ec").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[5]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[5]);
	});

	$("#gu").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[6]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[6]);
	  $("input#telefono").attr("placeholder","1234567");
	});

	$("#me").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[7]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[7]);
	  $("input#telefono").attr("placeholder","123456789012");
	});

	$("#pa").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[8]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[8]);
	});

	$("#pe").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[9]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[9]);
	});

	$("#su").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[10]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[10]);
	  $("input#telefono").attr("placeholder","1234567");
	});

	$("#ur").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[11]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[11]);
	  $("input#telefono").attr("placeholder","12345678");
	});

	$("#ve").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[12]);  // o  $(this).attr("src", nuevaImagen);
	  $("#codigo").text(code[12]);
	  $("input#telefono").attr("placeholder","1234567890");
	});

});






