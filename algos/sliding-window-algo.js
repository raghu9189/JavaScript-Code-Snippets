// explain sliding window algorithm in javascript
function slidingWindow(arr, k) {
    let windowSum = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        windowSum += arr[i];
        if (i >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[i - (k - 1)];
        }
    }
    return maxSum;
}
const nums = [2, 1, 5, 1, 3, 2];
const k = 3;
const result = slidingWindow(nums, k);
console.log(result); // Output: 9
// The slidingWindow function takes an array 'arr' and an integer 'k' representing the size of the window.
// It initializes 'windowSum' to keep track of the sum of the current window and 'maxSum' to store the maximum sum found.
// The function iterates through the array using a for loop.
// For each element, it adds the current element to 'windowSum'.
// Once the index 'i' reaches 'k - 1', it means we have a complete window of size 'k'.
// At this point, it updates 'maxSum' with the maximum of the current 'maxSum' and 'windowSum'.
// Then, it subtracts the element that is sliding out of the window (i.e., the element at index 'i - (k - 1)') from 'windowSum'.
// Finally, the function returns 'maxSum', which is the maximum sum of any contiguous subarray of size 'k'.
// The time complexity of this algorithm is O(n) since it processes each element of the array exactly once.

// Example usage:
// The array 'nums' contains the elements [2, 1, 5, 1, 3, 2], and we are looking for the maximum sum of any contiguous subarray of size 3.
// The function will return 9, which corresponds to the subarray [5, 1, 3].
// The result is then printed to the console.

// This problem is similar to LeetCode Problem 643: Maximum Average Subarray I.
