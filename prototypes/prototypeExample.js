function Car(brand) {
  this.brand = brand;
}

// Define method on prototype
Car.prototype.drive = function() {
  console.log(this.brand + " is driving...");
};

let c1 = new Car("Toyota");
let c2 = new Car("Honda");

c1.drive(); // Toyota is driving...
c2.drive(); // Honda is driving...

// Here:
// Car is a constructor function.
// Car.prototype holds shared methods.
// c1 and c2 inherit from Car.prototype.