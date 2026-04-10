// Bind
const user = {name: "Raghu"};

function sayHello(age, job){
    return `Hello, ${this.name} is ${age}, he is a ${job}`;
}

// method 1
const bindFunc = sayHello.bind(user)

console.log(bindFunc(25, "Software Developer"))
console.log(bindFunc(26, "Software Engineer"))
console.log(bindFunc(26, "Full Stack Engineer"))

// OR

// method 2
console.log(sayHello.bind(user)(30, "Raju"));
console.log(sayHello.bind(user)(31, "Pothu Raju"));
console.log(sayHello.bind(user)(33, "Gunda Raju"));



