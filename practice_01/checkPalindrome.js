// A string is a palindrome if it reads the same forwards and backward. 
// To check if a string is a palindrome, you can reverse the string and compare it with the original. 
// (Efficient) u can loop through string till middle of string and compare
// If they are identical, the string is a palindrome. 
// examples
// 1. "not a palindrome"
// 2. "abccba"
// 3. "abcdcba"

function isPalindromeString(s){
    const middleLen = s.length / 2;
    const len = s.length;
    console.log('middle value ', middleLen);
    
    for (let index = 0; index < middleLen; index++) {

        if(s[index] != s[len - index - 1]){
            console.log(`s[${index}] is not equal to s[${len - index - 1}]`);
            return false
        }
        console.log(`s[${index}] is equal to s[${len - index - 1}]`);
    }

    return true;
}

const s1 = "not a palindrome";
const s2 = "abccba";
const s3 = "abcdcba";

console.log(isPalindromeString(s3))
