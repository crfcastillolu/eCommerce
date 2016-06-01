// var producto = "FIFA16";
// var cantidad = 3;
// var carrito = [];

function Producto(nNombre, nPrecio, nExistencias) {
	this.nombre = nNombre;
	this.precio = nPrecio;
	this.existencias = nExistencias;
}

Producto.prototype.agregarExistencias = function(nExistencias) {
	if (nExistencias < 0) {
		return "Ingrese un número positivo";
	} else if (typeof nExistencias !== 'number') {
		return "Ingrese un número";
	} else {
		this.existencias += nExistencias;
		return this.existencias;
	}
}

Producto.prototype.quitarExistencias = function(nExistencias) {
	if (nExistencias < 0) {
		return "Ingrese un número positivo";
	} else if (typeof nExistencias !== 'number') {
		return "Ingrese un número";
	} else if (this.existencias < nExistencias) {
		return "No hay suficientes productos en existencias";
	} else {
		this.existencias -= nExistencias;
		return this.existencias;
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