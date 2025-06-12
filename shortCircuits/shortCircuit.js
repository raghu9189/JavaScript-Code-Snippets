// Logical AND && 
// const isStockAvailable = () => {
//     console.log("Stock is not available");
//     return false;
// }
// const isTransportAvailable = () => {
//     console.log("Transport is available");
//     return true;
// }

// const acceptOk = isStockAvailable() && isTransportAvailable()
// console.log(`Final result: ${acceptOk}`);



// Logical OR ||
const isStockAvailable = () => {
    console.log("Stock is not available");
    return false;
}
const isTransportAvailable = () => {
    console.log("Transport is available");
    return true;
}

const acceptOk = isStockAvailable() || isTransportAvailable()
console.log(`Final result: ${acceptOk}`);


// With Closure

function numberTheory(num){
    let myNewNum = 88;
    return {
        evenOrOdd: function(){
            if(num%2==0) return 'even'
            else return 'odd'
        },
        isOdd: function(){
            if (this.evenOrOdd() == 'odd') return true
            return false;
        },
        isEven: function(){
            if (this.evenOrOdd() == 'even') return true
            return false;
        }
    };
}

const checkNumberSpec = numberTheory(12);
// console.log(checkNumberSpec.evenOrOdd());
console.log(checkNumberSpec.isOdd());
console.log(checkNumberSpec.isEven());


