// implement palindrome algorithm without using built-in functions or regex 
function isPalindrome(str) {
    // Convert to lowercase manually
    let lowerStr = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // A-Z
            lowerStr += String.fromCharCode(charCode + 32);
        } else {
            lowerStr += str[i];
        }
    }

    // Remove non-alphanumeric characters manually
    let cleanedStr = '';
    for (let i = 0; i < lowerStr.length; i++) {
        let charCode = lowerStr.charCodeAt(i);
        if ((charCode >= 97 && charCode <= 122) || // a-z
            (charCode >= 48 && charCode <= 57)) { // 0-9
            cleanedStr += lowerStr[i];
        }
    }

    // Check if cleanedStr is a palindrome
    let left = 0;
    let right = cleanedStr.length - 1;
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false   
console.log(isPalindrome("")); // true
console.log(isPalindrome("No 'x' in Nixon")); // true
console.log(isPalindrome("12321")); // true
console.log(isPalindrome("12345")); // false
console.log(isPalindrome("Able was I ere I saw Elba")); // true
console.log(isPalindrome("!@#$$#@!")); // true
console.log(isPalindrome("Not a palindrome")); // false
console.log(isPalindrome("Was it a car or a cat I saw?")); // true
console.log(isPalindrome("Eva, can I see bees in a cave?")); // true
console.log(isPalindrome("Madam In Eden, I'm Adam")); // true
console.log(isPalindrome("Step on no pets"));
// true
console.log(isPalindrome("123@321")); // true
console.log(isPalindrome("1a2")); // false  
console.log(isPalindrome("A Toyota's a Toyota")); // true