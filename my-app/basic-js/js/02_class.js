console.log ("class")

class Car {
    constructor(nama){
        this.name = nama;
    }
    present (){
        return "nama mobilku adalah "+this.name;
    }
}
let myCar = new Car ("carr-i");
console.log (myCar.present());