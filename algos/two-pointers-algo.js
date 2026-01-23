// explain two pointers algorithm in javascript
function twoPointers(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return [left, right]; // Return the indices of the two numbers
        } else if (sum < target) {
            left++; // Move the left pointer to the right to increase the sum
        } else {
            right--; // Move the right pointer to the left to decrease the sum
        }
    }
    return null; // Return null if no pair is found
}
const nums = [1, 2, 3, 4, 6, 8, 9, 11, 15];
const target = 10;
const result = twoPointers(nums, target);
console.log(result); // Output: [0, 6]

// The twoPointers function takes a sorted array 'arr' and a 'target' sum.
// It initializes two pointers, 'left' at the start of the array and 'right' at the end.
// The function enters a while loop that continues as long as 'left' is less than 'right'.
// Inside the loop, it calculates the sum of the elements at the 'left' and 'right' pointers.
// If the sum equals the target, it returns the indices of the two elements.
// If the sum is less than the target, it increments the 'left' pointer to increase the sum.
// If the sum is greater than the target, it decrements the 'right' pointer to decrease the sum.
// If no pair is found that adds up to the target, the function returns null.
// The time complexity of this algorithm is O(n) since each element is processed at most once.
// Example usage:
// The array 'nums' is sorted, and we are looking for two numbers that add up to 10.
// The function will return the indices [0, 6], corresponding to the numbers 2 and 8.
// The result is then printed to the console.

// This problem is similar to LeetCode Problem 167: Two Sum II - Input Array Is Sorted.