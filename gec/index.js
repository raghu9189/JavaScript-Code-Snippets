// Explaination of Global execution context 

var x = 1;
a();
b();
console.log(price);
let price = 200;
console.log(x);


function a() {
    var x = 10;
    console.log(x);
    console.log(this.x + " func this")
}

function b() {
    var x = 100
    console.log(x);
}
