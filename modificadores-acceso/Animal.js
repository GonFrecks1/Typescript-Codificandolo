var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Modificadores de acceso
var Animal = /** @class */ (function () {
    function Animal(pName, pheight) {
        // No se puede accecer desde fuera (instancia) solo en otra clase que herede esta clase Animal
        this.Zoologico = 'Zoologico Marinela';
        this.Name = pName;
        this.Height = pheight;
        this.Ubicacion = 'USA';
    }
    Animal.prototype.Moving = function () {
        console.log("The animal is moving!, the ubication is in: " + this.Ubicacion);
    };
    return Animal;
}());
var animal = new Animal('Horse', 10);
animal.Moving();
var Protegido = /** @class */ (function (_super) {
    __extends(Protegido, _super);
    /**
     *
     */
    function Protegido(pAtributo1, pAtributo2) {
        var _this = _super.call(this, 'Gato', 10) || this;
        _this.Atributo1 = pAtributo1;
        _this.Atributo2 = pAtributo2;
        return _this;
    }
    Protegido.prototype.LlamarAtributos = function () {
        console.log('LLamando atributos protected: ' + this.Zoologico);
    };
    return Protegido;
}(Animal));
var objProtegido = new Protegido('Atri-1', 1250);
objProtegido.LlamarAtributos();
