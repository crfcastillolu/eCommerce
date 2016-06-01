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
      juego.agregarExistencia(2);
      expect(juego.existencias).toBe(5);
    });

    it("Después de devolver 2 elementos con número negativo a existencias debe solicitar nuevo ingreso", function() {
      var juego = new Producto("Halo",75000,5);
      var resultado = juego.agregarExistencia(-2);
      expect(resultado).toBe("Ingrese un número positivo");
    });



});
});
