/*
Marca: Peugeot // Modelo: 206 // Puertas: 4 // Precio: $200.000,00
Marca: Honda // Modelo: Titan // Cilindrada: 125cc // Precio: $60.000,00
Marca: Peugeot // Modelo: 208 // Puertas: 5 // Precio: $250.000,00
Marca: Yamaha // Modelo: YBR // Cilindrada: 160cc // Precio: $80.500,50
=============================
Vehículo más caro: Peugeot 208
Vehículo más barato: Honda Titan
Vehículo que contiene en el modelo la letra ‘Y’: Yamaha YBR $80.500,50
=============================
Vehículos ordenados por precio de mayor a menor:
Peugeot 208
Peugeot 206
Yamaha YBR
Honda Titan
*/

class vehicle{
    constructor(trademark,model,price){
        this.trademark = trademark
        this.model=model
        this.price=price
    }
    getPrice(){
        console.log(`$ ${this.price}`);
    }
}

class car extends vehicle{
    constructor(trademark,model,doors,price){
        super(trademark,model,price)                // Inhetirance
        this.doors=doors                            // New attribute
    }
}

class motorcycle extends vehicle{
    constructor(trademark,model,displacement,price){
        super(trademark,model,price)                // Inhetirance
        this.displacement=displacement              // New attribute
    }

    getDisplacement(){
        console.log(`${this.displacement}cc`);
    }
}

var car1= new car( "Peugeot","206", 4 ,200000.00)
var motorcycle1 = new motorcycle("Honda","Titan",125 ,60000.00)
var car2= new car( "Peugeot","208", 5 ,250000.00)
var motorcycle2 = new motorcycle("Yamaha","YBR",160 ,80500.50)

// Object Array
var vehicles=[car1,motorcycle1,car2,motorcycle2]
