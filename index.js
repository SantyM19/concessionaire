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

function car(marca,modelo,puertas,precio){
    this.marca = marca
    this.modelo=modelo
    this.puertas=puertas
    this.precio=precio
}

car.prototype.run=function(){
    console.log(`RunWey ${this.marca} ${this.modelo}`)
}

function bike(marca,modelo,cilindrada,precio){
    this.marca = marca
    this.modelo=modelo
    this.cilindrada=cilindrada
    this.precio=precio
}

bike.prototype.run=function(){
    console.log(`RunWey ${this.marca} ${this.modelo}`)
}


var car1= new car( "Peugeot",206, 4 ,"$200.000,00")
var bike1 = new bike("Honda","Titan","125cc" ,"$60.000,00")
var car2= new car( "Peugeot",208, 5 ,"$250.000,00")
var bike2 = new bike("Yamaha","YBR","160cc" ,"$80.500,50")
