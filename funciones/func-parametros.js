// parametros opcionales
var opcionales = function (nombre, apellido, edad) {
    console.log("Se llama " + nombre + ", su apellido es " + apellido + " y su edad es " + ((edad == undefined) ? '"NA"' : edad));
};
opcionales('Manuel', 'Valenzuela');
// parametros por defecto
var porDefecto = function (nombre, apellido, edad) {
    if (edad === void 0) { edad = 42; }
    return "Se llama " + nombre + ", su apellido es " + apellido + " y su edad es " + ((edad == undefined) ? '"NA"' : edad);
};
var result = '';
result = porDefecto('Manuel', 'Valenzuela', 41);
console.log(result);
result = porDefecto('Juan', 'Perez');
console.log(result);
// Parametros REST (...name:datatype[]) -> son parametros de tipo array pero sin limite definido
var postres = function (postre) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    console.log("El postre es " + postre + " y tiene " + frutas);
};
postres('Postre1', 'naranja', 'piña', 'mango');
