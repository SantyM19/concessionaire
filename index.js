// Class 

  class vehicle{
    constructor(type,trademark,model,price){
        this.type = type                                 // Type Vehicle
        this.trademark = trademark  
        this.model=model
        this.price=price
    }
    getPrice(){
        return`$ ${this.price}`
    }
  }

// Inhetirance

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

//Searching for Letter
  vehicles.forEach(function(vehicles){
    if (vehicles.model.indexOf("Y") != -1){
        console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${vehicles.trademark} ${vehicles.model} ${vehicles.getPrice()}`)
    }
  })

  signal()

  console.log("Vehículos ordenados por precio de mayor a menor:")

//Showing Price Order Inventory
  order.forEach(function(order){
    console.log(`${order.trademark} ${order.model}`)
  })