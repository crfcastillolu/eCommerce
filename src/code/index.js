
var Almacen = function(nNombre) {
	this.nombre = nNombre;
	this.productosStock = [
							new Producto ("01","halo","150000","12","xbox","shooter"),
							new Producto ("03","fifa16","125000","8","playstation","sports"),
							new Producto ("04","pes16","115000","0","playstation","sports"),
							new Producto ("05","pes16","105000","14","xbox","sports"),
							new Producto ("06","pes16","99000","12","pc","sports"),
							new Producto ("07","farcry4","122000","10","playstation","fps"),
							new Producto ("08","farcry4","117000","7","xbox","fps"),
							new Producto ("09","farcry4","110500","3","pc","fps")
						];
}

Almacen.prototype.convertirALowerCase = function(nNombre){
	return nNombre.toLowerCase();
}

Almacen.prototype.buscarStock = function(nNombre) {
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

Almacen.prototype.quitarProductoDeStock = function(nExistencias) {
		nExistencias.existencias -= 1
		return nExistencias.existencias
}

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
	for (var i = 0; i < nArregloResultados.length; i++) {
		this.carrito.push(nArregloResultados[i])
	}
	return this.carrito;
};

Usuario.prototype.quitarDelCarrito = function(nArregloResultados, nProducto) {
	for (var i = 0; i < nArregloResultados.length; i++) {
		if(nArregloResultados[i].consola === nProducto){
			this.carrito.pop();	
		}
	}
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














