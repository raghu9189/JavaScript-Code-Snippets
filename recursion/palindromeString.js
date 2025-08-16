function isPalindrome(inputStr){
    // base case
    if(inputStr.length == 0 || inputStr.length == 1){
        return true;
    }
    // recursive case
    if(inputStr.charAt(0) == inputStr.charAt(inputStr.length - 1)){
        return isPalindrome(inputStr.slice(1, inputStr.length - 1));
    }
    // fallback case
    return false;
}

console.log(isPalindrome('racecar1'));