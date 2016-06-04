(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

Almacen = function(nNombre) {
	this.nombre = nNombre;
	this.productosStock = [
                            new Producto ("01","halo","150000","12","xbox","shooter"),
                            new Producto ("02","forza","121000","8","xbox","racing"),
                            new Producto ("03","fifa16","125000","8","playstation","sports"),
                            new Producto ("04","pes16","115000","0","playstation","sports"),
                            new Producto ("05","pes16","105000","14","xbox","sports"),
                            new Producto ("06","pes16","99000","12","pc","sports"),
                            new Producto ("07","farcry4","122000","10","playstation","fps"),
                            new Producto ("08","farcry4","117000","7","xbox","fps"),
                            new Producto ("09","farcry4","110500","3","pc","fps"),
                            new Producto ("10","doom","215000","23","playstation","fps"),
                            new Producto ("11","doom","217000","17","xbox","fps"),
                            new Producto ("12","ufc","230000","12","playstation","fight"),
                            new Producto ("13","ufc","235000","11","xbox","fight"),
                            new Producto ("14","uncharted","200000","12","playstation","fight"),
                            new Producto ("15","granturismo","220000","17","playstation","racing")
						];
}

Almacen.prototype.convertirALowerCase = function(nNombre){
	return nNombre.toLowerCase();
}

// buscar por objeto

Almacen.prototype.buscarStockNombre = function(nNombre) {
	var resultados = []
	if (typeof nNombre === 'string') {
		for (var i = 0; i < this.productosStock.length; i++) {
			if (this.productosStock[i].nombre === nNombre && this.productosStock[i].existencias > 0 ){
				this.quitarProductoDeStock(this.productosStock[i])
				resultados.push(this.productosStock[i]);
			} 
		}
		return resultados;
	} else {
		return "el argumento no es un string";
	}
};

// buscar por consola

Almacen.prototype.buscarStockConsola = function(nConsola) {
	var resultados = []
	if (typeof nConsola === 'string') {
		for (var i = 0; i < this.productosStock.length; i++) {
			if (this.productosStock[i].consola === nConsola && this.productosStock[i].existencias > 0 ){
				this.quitarProductoDeStock(this.productosStock[i])
				resultados.push(this.productosStock[i]);
			} 
		} 
		return resultados;
	} else {
		return "el argumento no es un string";
	}
};


// mostrar búsqueda

Almacen.prototype.monstrarBusqueda = function(nBusqueda) {
		for (var i = 0; i < nBusqueda.length; i++) {
			$("#box").append("<div class='col-xs-12 col-sm-6 col-lg-4 gameBox'>"
				+ "<h2>" + nBusqueda[i].nombre + "</h2>"
				+ "<h4>" + nBusqueda[i].consola + "</h4>"
				+ "<img src='assets/img/" + nBusqueda[i].id + ".jpg'>"
				+ "<h3>$ " + nBusqueda[i].precio + "</h3>"
				+ "<button type='button' class='btn btn-success-outline center-block btnAgregarCarrito' id='"
				+ nBusqueda[i].id
				+ "'>Agregar a carrito</button>"
				+ "</div>")
		} 
};

Almacen.prototype.quitarProductoDeStock = function(nExistencias) {
		nExistencias.existencias -= 1
		return nExistencias.existencias
}

Almacen.prototype.quitarStock = function(nId) {};
Almacen.prototype.checkOut = function(nCarrito) {};

Producto = function(nId, nNombre, nPrecio, nExistencias, nConsola, nGenero) {
	this.id = nId;
	this.nombre = nNombre;
	this.precio = nPrecio;
	this.existencias = nExistencias;
	this.consola = nConsola;
	this.genero = nGenero;
}


Usuario = function(nNombre, nCorreo, nContrasenia) {
	this.nombre = nNombre;
	this.correo = nCorreo;
	this.contrasenia = nContrasenia;
	this.carrito = [];
}

var tiendaVideojuegos = new Almacen("videoJuegos");
var usuario = new Usuario("Mateo","cmateo@gmail.com",1234)

Usuario.prototype.agregarACarrito = function(nId) {

		for (var i = 0; i < tiendaVideojuegos.productosStock.length; i++) {
			if (tiendaVideojuegos.productosStock[i].id === nId){
				var producto = tiendaVideojuegos.productosStock[i]
				this.carrito.push(producto)
				console.log("resultados: " + tiendaVideojuegos.productosStock[i].nombre);
			} 
		} 
		


};

// Usuario.prototype.agregarACarrito = function(nArregloResultados) {
// 	for (var i = 0; i < nArregloResultados.length; i++) {
// 		this.carrito.push(nArregloResultados[i])
// 	}
// 	return this.carrito;
// };

Usuario.prototype.quitarDelCarrito = function(nArregloResultados, nProducto) {
	for (var i = 0; i < nArregloResultados.length; i++) {
		if(nArregloResultados[i].consola === nProducto){
			this.carrito.pop();	
		}
	}
	console.log(this.carrito);
	return this.carrito;
};

Usuario.prototype.checkIn = function(nCarrito) {};






// Producto.prototype.agregarExistencias = function(nExistencias) {
// 	if (nExistencias < 0) {
// 		return "Ingrese un número positivo";
// 	} else if (typeof nExistencias !== 'number') {
// 		return "Ingrese un número";
// 	} else {
// 		this.existencias += nExistencias;
// 		return this.existencias;
// 	}
// }



// Carrito.prototype.buscarExistencias = function(buscar) {
// 	for (var i = 0; i < almacenExistencias.length; i++) {
// 		if (almacenExistencias[i].nombre === buscar){
// 			return almacenExistencias[i];
// 		}
// 	}
// }















},{}],2:[function(require,module,exports){
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
			console.log("muestra id: " + this.id);
	      	var resultado = usuario.agregarACarrito(nId);
	      	usuario.agregarACarrito(resultado);  	
	      })
      })
});
},{}]},{},[1,2]);
