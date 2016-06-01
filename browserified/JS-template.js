(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// var producto = "FIFA16";
// var cantidad = 3;
// var carrito = [];

function Producto(nNombre, nPrecio, nExistencias) {
	this.nombre = nNombre;
	this.precio = nPrecio;
	this.existencias = nExistencias;
}

Producto.prototype.agregarExistencia = function(nExistencias) {
	if (nExistencias < 0) {
		return "Ingrese un número positivo"
	} else {
		this.existencias += nExistencias;
		return "Existencias actualizadas, ahora son: " + this.existencias;
	}

}

function Usuario(nNombre, nCorreo, nContrasenia) {
	this.nombre = nNombre;
	this.correo = nCorreo;
	this.contrasenia = nContrasenia;
	this.carrito = new Carrito();
}

function Carrito() {
	this.productos = [];
}

Carrito.prototype.agregarCarrito = function() {

}



// var agregarCarrito = function(producto,cantidad){
// 	carrito.push([producto,cantidad]);
// };

// var quitarElemento = function(producto){
// 	carrito.pop();
// };

// var solicitarProducto = function(producto, cantidad){
// 	var cantidad = cantidad;
// 	var item = producto;

// 	agregarCarrito(item, cantidad);
// 	alert(carrito);
// }
 
// agregarCarrito(producto,cantidad);
// Ejecución de código

// var cantidadProductos = cantidad;

// for(var index = 0;index < cantidadProductos; index++) {
// 	solicitarProducto();
// }

// var quitarProductos = prompt("Ingrese el producto a retirar");

// // modificar la funcion de quitar, para eliminar el item que yo quiera

// for(var index = 0;index <= carrito.length-1; index++){
// 	if(carrito[index][0] === quitarProductos){   
// 	}
// }

console.log("masa");
},{}],2:[function(require,module,exports){
function WebVariables() {
  this.title = "JS jasmine example";
}

},{}]},{},[1,2]);
