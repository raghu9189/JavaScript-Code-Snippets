// implement a function that calculates the power of a number using recursion
function power(base, exponent) {
    // Base case: any number to the power of 0 is 1
    if (exponent === 0) {
        return 1;
    }
    // If exponent is negative, calculate the positive exponent and take reciprocal
    if (exponent < 0) {
        return 1 / power(base, -exponent);
    }
    // Recursive case: multiply base by the result of power with exponent decreased by 1
    return base * power(base, exponent - 1);
}

// Example usage:
console.log(power(2, 3)); // 8
console.log(power(5, 0)); // 1
console.log(power(2, -2)); // 0.25
console.log(power(3, 4)); // 81
console.log(power(10, 2)); // 100
console.log(power(2, 10)); // 1024
console.log(power(7, 3)); // 343
console.log(power(4, -1)); // 0.25
console.log(power(1, 100)); // 1
console.log(power(0, 5)); // 0
console.log(power(0, 0)); // 1 (by convention)
console.log(power(-2, 3)); // -8
console.log(power(-2, 4)); // 16
console.log(power(2, 1)); // 2
console.log(power(2, -3)); // 0.125     




