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
    constructor(type,trademark,model,price){
        this.type = type                                 //Type Vehicle
        this.trademark = trademark  
        this.model=model
        this.price=price
    }
    getPrice(){
        return`$ ${this.price}`
    }
}

class car extends vehicle{
    constructor(type,trademark,model,doors,price){
        super(type,trademark,model,price)                // Inhetirance
        this.doors=doors                                 // New attribute
    }
}

class motorcycle extends vehicle{
    constructor(type,trademark,model,displacement,price){
        super(type,trademark,model,price)                // Inhetirance
        this.displacement=displacement                   // New attribute
    }

    getDisplacement(){
        return`${this.displacement}cc`
    }
}

const TYPE1="car"
const TYPE2="motorcycle"

var car1= new car( TYPE1,"Peugeot","206  ", 4 ,200000.00)
var motorcycle1 = new motorcycle(TYPE2,"Honda  ","Titan",125 ,60000.00)
var car2= new car( TYPE1,"Peugeot","208  ", 5 ,250000.00)
var motorcycle2 = new motorcycle(TYPE2,"Yamaha ","YBR  ",160 ,80500.50)

// Object Array
var vehicles=[car1,motorcycle1,car2,motorcycle2]

//Signal 
function signal(){
    console.log("=============================")
}

//Showing Inventory
vehicles.forEach(function(vehicles){
    var other
    if (vehicles.type==TYPE1) {
        other = "Puertas: " + vehicles.doors + "       "
    }
    else{
        other = "Cilindrada: " + vehicles.getDisplacement()
    }
    console.log(`Marca: ${vehicles.trademark} // Modelo: ${vehicles.model} // ${other} // Precio: ${vehicles.getPrice()}`)
})

signal()

//Price Order
var order=vehicles.sort(function (a, b) {
    if (a.price < b.price) {
      return 1;
    }
    if (a.price > b.price) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

//Most Xpensive
  console.log(`Vehículo más caro:    ${order[1].trademark} ${order[1].model}`)
//Cheaper
  console.log(`Vehículo más barato:  ${order[order.length-1].trademark} ${order[order.length-1].model}`)

signal()

//Showing Price Order Inventory
order.forEach(function(order){
    console.log(`${order.trademark} ${order.model}`)
})
