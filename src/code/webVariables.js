$(document).ready(function() {

	var tiendaVideojuegos = new Almacen("videoJuegos");
	var usuario = new Usuario("Mateo","cmateo@gmail.com",1234)



      $("#botonBuscar").click(function(){
      	$(".gameBox").remove()
      	var resultado;
      	var inputBuscar = $("#inputBuscar").val()
      	resultado = tiendaVideojuegos.buscarStockConsola(inputBuscar);
      	tiendaVideojuegos.monstrarBusqueda(resultado);
	      $("button").click(function(){
	      	nId = this.id
			// console.log("muestra id: " + this.id);
	      	var resultado = usuario.agregarACarrito(nId);
	      	usuario.agregarACarrito(resultado);  	
	      })
      })
});