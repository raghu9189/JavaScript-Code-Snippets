// [Expected Approach - 2] By Swapping Elements - O(n) Time and O(1) Space
// https://www.geeksforgeeks.org/dsa/program-to-reverse-an-array/

function reverseArray(arr) {
    const n = arr.length;
    for (let index = 0; index < n/2; index++) {
        let temp = arr[index];
        arr[index] = arr[n - index - 1];
        arr[n - index - 1] = temp;
    }
}
const arr = [1,4,2,5];
console.log(arr);
reverseArray(arr);
console.log(arr);
