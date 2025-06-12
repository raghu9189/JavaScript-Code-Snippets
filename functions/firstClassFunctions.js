/*
In JavaScript, functions can be used same as other variables.
That’s why JavaScript is said to have a first-calss functions. 
The functions can be passed as arguments to the other functions.
*/

// Assignment to variables
const myFunction = function(){
    console.log("Function Assignment Hello");
}
myFunction();

// Passing as arguments
function sayGreet(name, customCallBack){
    console.log(`My name is: ${name}`);
    customCallBack();
}

const sayGoodbye = () => {
    console.log("Good Bye");
}

sayGreet('Raghu', sayGoodbye);

// Returning from functions
function createGreeter(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    };
}

const sayHelloTo = createGreater("Hello");
sayHelloTo("Raghu");

/*
What is a Higher Order Function?
A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.
*/

// Callback function, passed as a parameter in the higher order function
function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction);