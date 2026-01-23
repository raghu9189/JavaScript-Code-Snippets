// impplement binary search algorithm in javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1; 
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; 
        } else if (arr[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }
    return -1; 
}

const nums = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
const target = 7;
const result = binarySearch(nums, target);
console.log(result);
// explain the code above
// The binarySearch function takes a sorted array 'arr' and a 'target' value to search for.
// It initializes two pointers, 'left' and 'right', to the start and end of the array.  
// It then enters a while loop that continues as long as 'left' is less than or equal to 'right'.
// Inside the loop, it calculates the middle index 'mid' and checks if the middle element is equal to the target.
// If it is, the function returns the index 'mid'. If the middle element is less than the target, 
// it moves the 'left' pointer to 'mid + 1' to search in the right half of the array. 
// If the middle element is greater than the target, it moves the 'right' pointer to 'mid - 1' to search in the left half.
// If the target is not found in the array, the function returns -1.
// Time complexity of this algorithm is O(log n) because with each iteration, the search space is halved.

// Example usage:
// The array 'nums' is sorted, and we are searching for the target value 7.
// The function will return the index of 7 in the array, which is 3.
// The result is then printed to the console.