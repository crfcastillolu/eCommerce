describe("Debería crear un nuevo producto", function() {
  var juego;



  describe("dag", function() {

      // beforeEach(function() {
      //   var juego = new Producto("A",10,5);
      // });


    it("Debería haber 3 productos llamados Halo con valor de 75000", function() {
      var juego = new Producto("Halo",75000,3);
      expect(juego.nombre).toBe("Halo");
      expect(juego.precio).toBe(75000);
      expect(juego.existencias).toBe(3);            
    });


    it("Después de devolver 2 elementos del carrito deberían quedar 5 en existencias", function() {
      var juego = new Producto("Halo",75000,3);
      juego.agregarExistencias(2);
      expect(juego.existencias).toBe(5);
    });

    it("Después de devolver 2 elementos con número negativo a existencias debe solicitar nuevo ingreso", function() {
      var juego = new Producto("Halo",75000,5);
      var resultado = juego.agregarExistencias(-2);
      expect(resultado).toBe("Ingrese un número positivo");
    });

    it("Después de ingresar un string por parámetro debería solicitar ingresar un número", function() {
      var juego = new Producto("Halo",75000,5);
      var resultado = juego.agregarExistencias("dos");
      expect(resultado).toBe("Ingrese un número");
    });

    it("Después de sustraer 2 elementos de existencias, deberían quedar 6 en existencias", function() {
      var juego = new Producto("Halo",75000,8);
      var resultado = juego.quitarExistencias(2);
      expect(resultado).toBe(6);
    });

    it("Después de sustraer 30 productos de los 20 en existencias debería solicitar nuevo número", function() {
      var juego = new Producto("Halo",75000,15);
      var resultado = juego.quitarExistencias(30);
      expect(resultado).toBe("No hay suficientes productos en existencias");
    });


    it("Después de ingresar un string por parámetro debería solicitar ingresar un número", function() {
      var juego = new Producto("Halo",75000,5);
      var resultado = juego.quitarExistencias("dos");
      expect(resultado).toBe("Ingrese un número");
    });

    it("Después de sustraer 2 elementos con número negativo de existencias debe solicitar nuevo ingreso", function() {
      var juego = new Producto("Halo",75000,5);
      var resultado = juego.quitarExistencias(-2);
      expect(resultado).toBe("Ingrese un número positivo");
    });    

});
});





