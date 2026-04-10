// Apply 
const user = {name: "Raghu"};

function sayHello(age, job) {
    return `Hello, ${this.name} is ${age} and he is a ${job}`;
}

console.log( sayHello.apply(user, [26, "Software engineer"]) ) // difference is here pass in array form