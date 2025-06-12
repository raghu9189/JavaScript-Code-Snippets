// Given a number 'n' find the first 'n' elements of the fibonacci sequence

function fibonacci(n){
    const fibNum = [0, 1];
    for(let i = 2; i < n; i++){
        fibNum[i] = fibNum[i-1] + fibNum[i-2];
    }
    return fibNum;
}

// fibonacci(2);
console.log(fibonacci(100));
