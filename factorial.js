
// find factorial of given number 
// !5 = 1 x 2 x 3 x 4 x 5
function factorial(n){
    let factNum = 1;
    for(let i = 1; i <= n; i++){
        factNum = factNum * i; 
        console.log(`Factorial of ${i} is ${factNum}`);
    }
    return factNum;
}

console.log("Factorial = " + factorial(7));
