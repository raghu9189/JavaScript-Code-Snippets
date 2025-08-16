function sumOfNaturalNumber(inputNumber) {
    // base case
    if (inputNumber <= 1){
        return inputNumber
    }

    // recursive case
    return inputNumber + sumOfNaturalNumber(inputNumber - 1);
}

let result = sumOfNaturalNumber(5);
console.log("Sum : ", result);