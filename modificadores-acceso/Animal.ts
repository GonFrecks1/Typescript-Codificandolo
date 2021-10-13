// Modificadores de acceso
class Animal{

    public Name : string
    public Height : number
    // No se puede accecer desde fuera (instancia)
    private Ubicacion : string
    // No se puede accecer desde fuera (instancia) solo en otra clase que herede esta clase Animal
    protected Zoologico : string = 'Zoologico Marinela'
    
    public constructor(pName:string, pheight: number) {
        this.Name = pName
        this.Height = pheight      
        this.Ubicacion = 'USA'  
    }

    public Moving():void{
        console.log(`The animal is moving!, the ubication is in: ${this.Ubicacion}`)
    }
}

const animal = new Animal('Horse', 10);
animal.Moving()

class Protegido extends Animal{
    protected Atributo1:string
    protected Atributo2:number

    /**
     *
     */
    constructor(pAtributo1:string, pAtributo2:number) {
        super('Gato', 10)    
        
        this.Atributo1 = pAtributo1
        this.Atributo2 = pAtributo2
    }

    LlamarAtributos():void{
        console.log('LLamando atributos protected: ' + this.Zoologico)
    }
}

const objProtegido = new Protegido('Atri-1', 1250)
objProtegido.LlamarAtributos();

