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
var ClaseAbstracta = /** @class */ (function () {
    function ClaseAbstracta() {
    }
    return ClaseAbstracta;
}());
var ClaseHija = /** @class */ (function (_super) {
    __extends(ClaseHija, _super);
    function ClaseHija() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.metodo = '';
        return _this;
    }
    ClaseHija.prototype.Get = function () {
        this.cadena = 'Mensaje de clase abstracta implementada, metodo:';
        this.metodo = 'Get';
        console.log(this.cadena + this.metodo);
    };
    ClaseHija.prototype.Post = function () {
        this.metodo = 'Post';
        console.log(this.cadena + this.metodo);
    };
    ClaseHija.prototype.Put = function () {
        this.metodo = 'Put';
        console.log(this.cadena + this.metodo);
    };
    ClaseHija.prototype.Delete = function () {
        this.metodo = 'Delete';
        console.log(this.cadena + this.metodo);
    };
    return ClaseHija;
}(ClaseAbstracta));
var objClaseHija = new ClaseHija();
objClaseHija.Get();
objClaseHija.Post();
objClaseHija.Put();
objClaseHija.Delete();
