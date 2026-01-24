// 2461. Maximum Sum of Distinct Subarrays With Length K
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let n = nums.length;
    let freq = new Map();
    let sum = 0;
    let maxSum = 0;
    
    for (let i = 0; i < n; i++) {
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
        sum += nums[i];
        
        if (i >= k) {
            freq.set(nums[i - k], freq.get(nums[i - k]) - 1);
            if (freq.get(nums[i - k]) === 0) {
                freq.delete(nums[i - k]);
            }
            sum -= nums[i - k];
        }
        
        if (i >= k - 1 && freq.size === k) {
            maxSum = Math.max(maxSum, sum);
        }
    }
    
    return maxSum;
};

// Example usage:
// console.log(maximumSubarraySum([1,2,3,2,2,1,4,5], 3)); // Output: 12
// console.log(maximumSubarraySum([5,2,1,2,5,2,1,2,5], 3)); // Output: 8
// console.log(maximumSubarraySum([1,2,3,4,5], 5)); // Output: 15
// console.log(maximumSubarraySum([1,1,1,1,1], 2)); // Output: 0

// The above code defines a function to find the maximum sum of distinct subarrays of length k. 
// It uses a sliding window approach with a frequency map to track the distinct elements in the current window.
// The function iterates through the array, updating the frequency map and sum as the window slides,
// and checks if the current window contains k distinct elements to potentially update the maximum sum found.
// The example usage demonstrates how to call the function with different inputs and outputs the results to the console.
