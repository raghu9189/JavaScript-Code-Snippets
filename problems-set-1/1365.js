// 1365. How Many Numbers Are Smaller Than the Current Number
// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.

// Example 1:
// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const sortedNums = [...nums].sort((a, b) => a - b);
    const numToCountMap = new Map();
    
    for (let i = 0; i < sortedNums.length; i++) {   
        if (!numToCountMap.has(sortedNums[i])) {
            numToCountMap.set(sortedNums[i], i);
        }
    }
    
    const result = nums.map(num => numToCountMap.get(num));
    return result;
};

// Example usage:
console.log(smallerNumbersThanCurrent([8,1,2,2,3])); // Output: [4,0,1,1,3]
console.log(smallerNumbersThanCurrent([6,5,4,8]));   // Output: [2,1,0,3]
console.log(smallerNumbersThanCurrent([7,7,7,7]));   // Output: [0,0,0,0]

// Explanation:
// The function first creates a sorted copy of the input array.
// It then maps each unique number to its index in the sorted array, which represents how many numbers are smaller than it.
// Finally, it constructs the result array by looking up each number in the original array in the map.
// The time complexity of this solution is O(n log n) due to the sorting step, and the space complexity is O(n) for the map and the result array.
