
// O(1) Time complexity 
function getSumOfNaturalNumbers(number) {
    return number * (number  + 1) / 2;
}

// console.log('Ouput : ', getSumOfNaturalNumbers(5));

// Recursive Method
function getSumOfNaturalNumbersRecursive(number) {

    if (number == 1){
        return 1;
    }

    return number + getSumOfNaturalNumbersRecursive(number - 1);
}

// console.log('Ouput : ', getSumOfNaturalNumbersRecursive(5));

// print numbers in decreasing order with using recursion 

function printNumberNToOne(number){
    if (number == 0){
        return 0;
    }
    console.log('Number ', number);
    return printNumberNToOne(number-1);
}

printNumberNToOne(3)

function printNumberOneToN(number){
    if (number == 10){
        return number;
    }
    console.log('Number ', number);
    return printNumberOneToN(number + 1);
}

// printNumberOneToN(1)