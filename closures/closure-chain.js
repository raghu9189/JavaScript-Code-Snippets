// closure 
// closure scope chain

// scope 1 (global)
var username = "Raghu";
function main(){

    // scope 2 
    var greetMessage = "Hello,";

    function greet(name){
        // scope 3
        console.log(`${greetMessage} ${name}`)
    }
    return greet;
}

// main()(username);

let greetMessage = main()
greetMessage(username);

