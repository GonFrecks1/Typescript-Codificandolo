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
var Padre = /** @class */ (function () {
    function Padre(pName, pAge) {
        this.Name = pName;
        this.Age = pAge;
    }
    Padre.prototype.ShowDataFather = function () {
        console.log(this.Name);
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo(pName, pAge, pLastName) {
        var _this = 
        // Inicializamos tambien el constructor de la clase Padre.
        _super.call(this, pName, pAge) || this;
        _this.LastName = pLastName;
        return _this;
    }
    Hijo.prototype.ShowDataSon = function () {
        console.log("Name of child: " + this.Name);
    };
    return Hijo;
}(Padre));
var padre = new Padre('Mario', 70);
var hijo = new Hijo('Manuel', 41, 'Valenzuela');
padre.ShowDataFather();
hijo.ShowDataSon();
