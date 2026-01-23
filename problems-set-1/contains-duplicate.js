// array that contains duplicate values
// with the help of set data structure
function containsDuplicate(nums) {
    const numSet = new Set();
    for (let num of nums) {
        if (numSet.has(num)) {
            return true;
        }
        numSet.add(num);
    }
    return false;
}

// Example usage:
// console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
// console.log(containsDuplicate([1, 2, 3, 1])); // Output: true


// without using set data structure
// using sorting approach
function containsDuplicateWithoutSet(nums) {
    nums.sort((a, b) => a - b); // Sort the array
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return true;
        }
    }
    return false;
}

// Example usage:
// console.log(containsDuplicateWithoutSet([1, 2, 3, 4])); // Output: false
// console.log(containsDuplicateWithoutSet([1, 2, 3, 1])); // Output: true

const nonsortedArray = [1, 10, 2, 21];
console.log(nonsortedArray.sort((a,b) => a - b)); // Output: [1, 2, 10, 21]


function containsDuplicateSimpler(nums) {
    return new Set(nums).size !== nums.length;
}
    
// Example usage:
// console.log(containsDuplicateSimpler([1, 2, 3, 4])); // Output: false
// console.log(containsDuplicateSimpler([1, 2, 3, 1])); // Output: true

// can u tell me leetcode problem number for this problem?
// Yes, the LeetCode problem number for "Contains Duplicate" is 217.