class Vehiculo {

    // Propiedades
    Marca: string
    Anio: number
    Puertas: number

    // Constructor
    constructor(pMarca:string, pAnio:number, pPuertas:number) {
        this.Marca = pMarca
        this.Anio = pAnio
        this.Puertas = pPuertas
        
    }

    // Metodos
    Acelerar():void{
        console.log("Ojo que acelero")
    }

    Frenar():void{
        console.log("Ojo que freno")
    }
}


const coche = new Vehiculo('Ford', 2021, 4)
console.log(coche.Marca, coche.Anio, coche.Puertas)
coche.Acelerar()
coche.Frenar()