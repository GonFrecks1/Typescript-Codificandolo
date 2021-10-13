
// boolean
let si: boolean = true
let no: boolean = false

// string
let Name:string = 'Manuel'
let LastName:string = 'Valenzuela'

// Number
let Age: Number = 41

// Array
let Numbers: number[] = [1,2,3]
let Names: string[] = ['Manuel', 'Juan', 'Valentina']

// Array otra manera
let integers : Array<number> = [1, 2, 5]
let fruits : Array<string> = ['Pera','Manzana','Durazno']

console.log("My name is: " + Name + " | " + LastName + " and My Age is: " + Age)
for (let index = 0; index < Numbers.length; index++) {
    console.log( Numbers[index] + ' | ' + Names[index] + ' | ' + integers[index] + ' | ' + fruits[index])
}

// tuplas
let tupla: [number, string, boolean]
tupla = [41, 'Manuel', true]
console.log("Age: " + tupla[0], "Name: " + tupla[1], "Enginer: " + tupla[2])

// funciones
function sumar(a:number, b:number){
    return a + b;
}

const suma:number = sumar(2, 8)
console.log("La suma es: " + suma);

// funciones arrow
// normal
function mostrar1(a:string):void{
    console.log(a)
}
//arrow
const mostrar2 = (a:string):void => console.log(a)

mostrar1("Hola")
mostrar2("Hello")

// Parametros opcionales
