// parametros opcionales
const opcionales = (nombre:string, apellido:string, edad?:number) =>{
    console.log(`Se llama ${nombre}, su apellido es ${apellido} y su edad es ${(edad == undefined) ? '"NA"' : edad}`)
}
opcionales('Manuel', 'Valenzuela')

// parametros por defecto
const porDefecto = (nombre:string, apellido:string, edad:number=42) =>{
    return `Se llama ${nombre}, su apellido es ${apellido} y su edad es ${(edad == undefined) ? '"NA"' : edad}`
}
let result:string = ''

result = porDefecto('Manuel', 'Valenzuela', 41)
console.log(result)
result = porDefecto('Juan', 'Perez')
console.log(result)

// Parametros REST (...name:datatype[]) -> son parametros de tipo array pero sin limite definido
const postres = (postre:string, ...frutas:string[]) => {
    console.log(`El postre es ${postre} y tiene ${frutas}`)
}
postres('Postre1', 'naranja', 'piña', 'mango')