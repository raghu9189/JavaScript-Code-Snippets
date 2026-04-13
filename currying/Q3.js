// Write a function that can add any number of arguments
// Example: sum(1)(2)(3)(4)(); Infinite currying
const sum = function (a) {
    return function (b) {
        if (b) {
            return sum(a + b);
        } else {
            return a;
        }
    }
}

console.log(sum(1)(2)(3)(4)());