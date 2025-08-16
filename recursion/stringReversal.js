let a = 'hello'

function reverseString(inputStr){
    // base care
    if (inputStr == ''){
        return '';
    }
    // recursive case
    return reverseString(inputStr.slice(1)) + inputStr.charAt(0);
}
console.log(reverseString('hello'));