// Bind Problem 1
const user = {name: "Raghu"};

function sayHello(){
    return `Hello, ${this.name}`;
}

console.log(sayHello.bind(user)()); // sayHello is bound to user object here
