var Vehiculo = /** @class */ (function () {
    // Constructor
    function Vehiculo(pMarca, pAnio, pPuertas) {
        this.Marca = pMarca;
        this.Anio = pAnio;
        this.Puertas = pPuertas;
    }
    // Metodos
    Vehiculo.prototype.Acelerar = function () {
        console.log("Ojo que acelero");
    };
    Vehiculo.prototype.Frenar = function () {
        console.log("Ojo que freno");
    };
    return Vehiculo;
}());
var coche = new Vehiculo('Ford', 2021, 4);
console.log(coche.Marca, coche.Anio, coche.Puertas);
coche.Acelerar();
coche.Frenar();
