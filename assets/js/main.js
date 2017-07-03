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

	$("#ar").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[0]);  // o  $(this).attr("src", nuevaImagen);
	});

	$("#bo").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[1]);  // o  $(this).attr("src", nuevaImagen);
	});

	$("#br").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[2]);  // o  $(this).attr("src", nuevaImagen);
	});

	$("#cl").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[3]);  // o  $(this).attr("src", nuevaImagen);
	});

	$("#co").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[4]);  // o  $(this).attr("src", nuevaImagen);
	});

	$("#ec").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[5]);  // o  $(this).attr("src", nuevaImagen);
	});

	$("#gu").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[6]);  // o  $(this).attr("src", nuevaImagen);
	});

	$("#me").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[7]);  // o  $(this).attr("src", nuevaImagen);
	});

	$("#pa").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[8]);  // o  $(this).attr("src", nuevaImagen);
	});

	$("#pe").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[9]);  // o  $(this).attr("src", nuevaImagen);
	});

	$("#su").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[10]);  // o  $(this).attr("src", nuevaImagen);
	});

	$("#ur").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[11]);  // o  $(this).attr("src", nuevaImagen);
	});

	$("#ve").click(function(event){
	  event.preventDefault();
	  $(this).unbind(event);
	  $("#bandera").attr("src", op[12]);  // o  $(this).attr("src", nuevaImagen);
	});

});






