// implement memoize/ caching function


function timedSquare(num1, num2) {
    for (i = 0; i < 1000000; i++) { }
    return num1 * num2;
}

console.time("3")
timedSquare(3, 4)
console.timeEnd("3")

console.time("78")
timedSquare(3, 4)
console.timeEnd("78")