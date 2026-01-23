// 268. Missing Number LeetCode Problem
// https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
};

// Example usage:
console.log(missingNumber([3, 0, 1])); // Output: 2
console.log(missingNumber([0, 1]));    // Output: 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // Output: 8
console.log(missingNumber([0]));       // Output: 1