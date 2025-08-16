// Delete at the end
function deleteAtEnd(arr) {
    arr[arr.length - 1] = null
    arr.length = arr.length - 1
    return arr;
}


let arr = [1, 20, 4, 3, 6];

console.log(arr);
let newArr = deleteAtEnd(arr);
console.log(newArr);

// Time Complexity: O(1)  
// Auxiliary Space: O(1)