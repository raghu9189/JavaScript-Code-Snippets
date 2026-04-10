// Call 
const user = {name: "Raghu"};

function sayHello(age, job) {
    return `Hello, ${this.name} is ${age} and he is a ${job}`;
}

console.log( sayHello.call(user, 26, "Software engineer") )