function fibRecursion(n){
    if(n < 2){
        return n;
    }
    return fibRecursion(n-1) + fibRecursion(n-2);
}

console.log(fibRecursion(10));

