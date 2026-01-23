// 448.  Find All Numbers Disappeared in an Array
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const n = nums.length;
    const numSet = new Set(nums);
    const disappearedNumbers = [];
    
    for (let i = 1; i <= n; i++) {
        if (!numSet.has(i)) {
            disappearedNumbers.push(i);
        }
    }
    
    return disappearedNumbers;
};

// Example usage:
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])); // Output: [5,6]
console.log(findDisappearedNumbers([1,1]));             // Output: [2]

// Explanation:
// In the first example, the numbers 5 and 6 are missing from the array [4,3,2,7,8,2,3,1].
// In the second example, the number 2 is missing from the array [1,1].

// The function works by first creating a set of the numbers present in the input array.
// It then iterates through the range from 1 to n (the length of the array) and checks which numbers are not in the set.
// Those missing numbers are collected in an array and returned as the result.

// The time complexity of this solution is O(n) and the space complexity is also O(n) due to the use of the set.

// Optimized Approach without extra space
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let idx = Math.abs(nums[i]) - 1;
        if (nums[idx] > 0) {
            nums[idx] *= -1;
        }
    }
    
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }
    return result;   
};
// Example usage:
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])); // Output: [5,6]
console.log(findDisappearedNumbers([1,1]));             // Output: [2]

// This optimized approach modifies the input array to mark the presence of numbers.
// It uses the sign of the numbers at specific indices to indicate whether a number has been seen.
// The time complexity remains O(n) while the space complexity is reduced to O(1).