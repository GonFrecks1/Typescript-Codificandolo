class Padre {

    Name: string
    Age: number

    constructor(pName:string, pAge:number) {
        this.Name = pName
        this.Age = pAge
    }

    ShowDataFather():void{
        console.log(this.Name)
    }
}

class Hijo extends Padre {
    
    LastName: string

    constructor(pName:string, pAge: number, pLastName:string) {
    
        // Inicializamos tambien el constructor de la clase Padre.
        super(pName, pAge)     
        this.LastName = pLastName

    }

    ShowDataSon():void{
        console.log(`Name of child: ${this.Name}`)
    }
}

const padre = new Padre('Mario', 70);
const hijo = new Hijo('Manuel', 41, 'Valenzuela');
padre.ShowDataFather()
hijo.ShowDataSon()