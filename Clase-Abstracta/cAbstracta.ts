abstract class ClaseAbstracta {

    abstract Get(): void
    abstract Post(): void
    abstract Put(): void
    abstract Delete(): void
    
}

class ClaseHija extends ClaseAbstracta {

    private cadena: string
    private metodo:string=''

    Get(): void {
        this.cadena = 'Mensaje de clase abstracta implementada, metodo:'
        this.metodo = 'Get'
        console.log(this.cadena + this.metodo)
    }
    Post(): void {
        this.metodo = 'Post'
        console.log(this.cadena + this.metodo)
    }
    Put(): void {
        this.metodo = 'Put'
        console.log(this.cadena + this.metodo)
    }
    Delete(): void {
        this.metodo = 'Delete'
        console.log(this.cadena + this.metodo)
    }   
}

const objClaseHija = new ClaseHija();
objClaseHija.Get()
objClaseHija.Post()
objClaseHija.Put()
objClaseHija.Delete()