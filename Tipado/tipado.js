// boolean
var si = true;
var no = false;
// string
var Name = 'Manuel';
var LastName = 'Valenzuela';
// Number
var Age = 41;
// Array
var Numbers = [1, 2, 3];
var Names = ['Manuel', 'Juan', 'Valentina'];
// Array otra manera
var integers = [1, 2, 5];
var fruits = ['Pera', 'Manzana', 'Durazno'];
console.log("My name is: " + Name + " | " + LastName + " and My Age is: " + Age);
for (var index = 0; index < Numbers.length; index++) {
    console.log(Numbers[index] + ' | ' + Names[index] + ' | ' + integers[index] + ' | ' + fruits[index]);
}
// tuplas
var tupla;
tupla = [41, 'Manuel', true];
console.log("Age: " + tupla[0], "Name: " + tupla[1], "Enginer: " + tupla[2]);
// funciones
function sumar(a, b) {
    return a + b;
}
var suma = sumar(2, 8);
console.log("La suma es: " + suma);
// funciones arrow
// normal
function mostrar1(a) {
    console.log(a);
}
//arrow
var mostrar2 = function (a) { return console.log(a); };
mostrar1("Hola");
mostrar2("Hello");
// Parametros opcionales
