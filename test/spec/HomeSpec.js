describe("Pruebas del e-Commerce", function() {
  var juego;

  describe("Buscar productos en stock", function() {

    it("Debería buscar producto ", function() {
      var tiendaVideojuegos = new Almacen("videoJuegos");
      expect(tiendaVideojuegos.productosStock[0].id).toBe("01");          
    });

    it("Debería buscar productos con nombre pes16 y retornar un arreglo de longitud tres", function() {
      var tiendaVideojuegos = new Almacen("videoJuegos");
      var resultado = tiendaVideojuegos.buscarStock("pes16");      
      expect(resultado.length).toBe(3);          
    });

    it("Debería buscar productos con nombre pes16 y retornar un arreglo de longitud tres", function() {
      var tiendaVideojuegos = new Almacen("videoJuegos");
      var bajas = tiendaVideojuegos.convertirALowerCase("pES16")
      var resultado = tiendaVideojuegos.buscarStock(bajas);
      expect(resultado.length).toBe(3);          
    });

    it("Debería buscar productos con un valor 'number' y retornar un string que diga que no es un argumento válido", function() {
      var tiendaVideojuegos = new Almacen("videoJuegos");
      var resultado = tiendaVideojuegos.buscarStock(16);
      expect(resultado).toBe("el argumento no es un string");          
    });

  });

  describe("Poner producto de stock en carrito", function() {

    it("Debería poner tres productos seleccionados del stock en el carrito", function() {
      var tiendaVideojuegos = new Almacen("videoJuegos");
      var buscarStock = tiendaVideojuegos.buscarStock("pes16");
        console.log('objetos encontrados: ' + buscarStock);
      cliente = new Usuario("Felipe","fcastillo@gmail.com",1234);
      var resultado = cliente.agregarACarrito(buscarStock);
      expect(resultado.length).toBe(3);          
    });

  });  

  // describe("Buscar en el arreglo", function() {

  //     // beforeEach(function() {
  //     //   var juego = new Producto("A",10,5);
  //     // });

  //   it("Buscar un objeto con el nombre 'the witcher 3' en el carrito", function() {
  //     var user = new Usuario("flacao","rflacao@gmail.com",12342)
  //     var prueba = user.carrito.buscarExistencias("the witcher 3");
  //     expect(prueba.nombre).toBe("the witcher 3");
  //     expect(prueba.precio).toBe(125000);
  //     expect(prueba.existencias).toBe(12);
  //     expect(prueba.consola).toBe("play station");
      
  //   });  

  // });

});

















