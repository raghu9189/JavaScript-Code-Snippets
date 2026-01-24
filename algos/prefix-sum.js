
function buildPrefixSum(arr) {
  const prefix = [];
  prefix[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  return prefix;
}

function rangeSum(prefix, l, r) {
  return l === 0 ? prefix[r] : prefix[r] - prefix[l - 1];
}
// Example usage:
const arr = [1, 2, 3, 4, 5];
const prefix = buildPrefixSum(arr);
console.log(rangeSum(prefix, 1, 3)); // Output: 9 (2 + 3 + 4)
console.log(rangeSum(prefix, 0, 4)); // Output: 15 (1 + 2 + 3 + 4 + 5)
console.log(rangeSum(prefix, 2, 2)); // Output: 3 (3)

// The above code defines two functions: buildPrefixSum and rangeSum.
// buildPrefixSum constructs a prefix sum array from the input array, where each element at index i
// represents the sum of all elements from index 0 to i in the original array.
// rangeSum calculates the sum of elements between two indices l and r (inclusive) using the prefix sum array.
// The example usage demonstrates how to build a prefix sum array and calculate range sums efficiently.

// Time Complexity:
// Building the prefix sum array takes O(n) time, where n is the length of the input array.
// Each range sum query takes O(1) time.

// Space Complexity:
// The prefix sum array requires O(n) additional space.
// leetcode problems that can be solved using prefix sum technique include:
// 1. 303. Range Sum Query - Immutable
// 2. 304. Range Sum Query 2D - Immutable
// 3. 560. Subarray Sum Equals K
// 4. 974. Subarray Sums Divisible by K
// 5. 325. Maximum Size Subarray Sum Equals k
// 6. 1574. Shortest Subarray to be Removed to Make Array Sorted
// 7. 2389. Longest Subsequence With Limited Sum
// These problems often involve calculating sums over subarrays or ranges, making prefix sums a useful technique for efficient computation.