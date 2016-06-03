
var Almacen = function(nNombre) {
	this.nombre = nNombre;
	this.productosStock = [
							new Producto ("01","halo","150000","12","xbox","shooter"),
							new Producto ("02","pes16","115000","7","xbox","sports"),
							new Producto ("03","fifa16","125000","8","playstation","sports"),
							new Producto ("04","pes16","115000","9","playstation","sports"),
							new Producto ("05","pes16","105000","5","pc","sports")
						];

	// this.almacenExistencias = [
	// 				new Producto("the witcher 3",150000,3,"xbox"),
	// 				new Producto("fifa16",125000, 12,"play station"),
	// 				new Producto("pes16", 115000,10,"xbox")
	// 				]
	// this.buscarExistencias = function(buscar) {
	// 	for (var i = 0; i < almacenExistencias.length; i++) {
	// 		if (almacenExistencias[i].nombre === buscar){
	// 			return almacenExistencias[i];
	// 		}
	// 	}
	// }
}

Almacen.prototype.buscarStock = function(nNombre) {
	var resultados = []
	for (var i = 0; i < this.productosStock.length; i++) {
		if (this.productosStock[i].nombre === nNombre){
			resultados.push(this.productosStock[i]);
		} 
	}
	return resultados;
};

Almacen.prototype.quitarStock = function(nId) {};
Almacen.prototype.checkOut = function(nCarrito) {};

var Producto = function(nId, nNombre, nPrecio, nExistencias, nConsola, nGenero) {
	this.id = nId;
	this.nombre = nNombre;
	this.precio = nPrecio;
	this.existencias = nExistencias;
	this.consola = nConsola;
	this.genero = nGenero;
}

function Carrito() {
	this.productos = [];
}

function Usuario(nNombre, nCorreo, nContrasenia) {
	this.nombre = nNombre;
	this.correo = nCorreo;
	this.contrasenia = nContrasenia;
}

Usuario.prototype.agregarACarrito = function(nId) {};
Usuario.prototype.quitarDelCarrito = function(nId) {};
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

// Producto.prototype.quitarExistencias = function(nExistencias) {
// 	if (nExistencias < 0) {
// 		return "Ingrese un número positivo";
// 	} else if (typeof nExistencias !== 'number') {
// 		return "Ingrese un número";
// 	} else if (this.existencias < nExistencias) {
// 		return "No hay suficientes productos en existencias";
// 	} else {
// 		this.existencias -= nExistencias;
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



