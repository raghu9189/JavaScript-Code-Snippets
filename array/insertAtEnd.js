// Insert at the end
// In an unsorted array, the insert operation is faster as compared to a sorted array
// because we don't have to care about the position at which the element is to be placed.
function insertAtEnd(arr, ele) {
    arr[arr.length] = ele
    return arr;
}


let arr = [1, 20, 4, 3, 6];
let ele = 34;

console.log(arr);
let newArr = insertAtEnd(arr, ele);
console.log(newArr);

// Time Complexity: O(1)  
// Auxiliary Space: O(1)