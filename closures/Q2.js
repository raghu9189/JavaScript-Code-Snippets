// Interview question on closure

function createBase(num){
    return function (innerNum){
        // inner func can access to all of its outer func params and variables
        return (num + innerNum);
    }
}

let addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));