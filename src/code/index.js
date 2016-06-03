
var Almacen = function(nNombre) {
	this.nombre = nNombre;
	this.productosStock = [
							new Producto ("01","halo","150000","12","xbox","shooter"),
							new Producto ("02","pes16","115000","7","xbox","sports"),
							new Producto ("03","fifa16","125000","8","playstation","sports"),
							new Producto ("04","pes16","115000","9","playstation","sports"),
							new Producto ("05","pes16","105000","5","pc","sports")
						];

}

Almacen.prototype.convertirALowerCase = function(nNombre){
	return nNombre.toLowerCase();
}

Almacen.prototype.buscarStock = function(nNombre) {
	var resultados = []
	if (typeof nNombre === 'string') {
		for (var i = 0; i < this.productosStock.length; i++) {
			if (this.productosStock[i].nombre === nNombre){
				resultados.push(this.productosStock[i]);
			} 
		} 
		return resultados;		
	} else {
		return "el argumento no es un string"
	}

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

// var Carrito = function () {
// 	this.productos = [];
// }

var Usuario = function(nNombre, nCorreo, nContrasenia) {
	this.nombre = nNombre;
	this.correo = nCorreo;
	this.contrasenia = nContrasenia;
	this.carrito = [];
}

Usuario.prototype.agregarACarrito = function(nArregloResultados) {
	numeroDeProductos = this.carrito.push(nArregloResultados)
	return this.carrito[0];
};

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



