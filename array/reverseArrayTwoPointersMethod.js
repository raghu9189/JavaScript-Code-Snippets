// Two pointers method

// The idea is to maintain two pointers: left and right, 
// such that left points at the beginning of the array and right points to the end of the array. 
// While left pointer is less than the right pointer, swap the elements at these two positions.
//  After each swap, increment the left pointer and decrement the right pointer to move towards the center of array. 
// This will swap all the elements in the first half with their corresponding element in the second half.

function reverseArray(arr) {
    let left = 0, right = arr.length - 1
    while(left < right){

        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;

    }
}
const arr = [1,4,2,5,3,6,7,9,8];
console.log(arr);
reverseArray(arr);
console.log(arr);
