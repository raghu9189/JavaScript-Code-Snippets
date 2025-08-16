function insertAtPosition(arr, pos, ele) {
    let n = arr.length;
    arr[n] = 0;
    for (let index = n; index >= pos; index--) {
        arr[index] = arr[index-1]
    }
    arr[pos-1] = ele
    return arr;
}

let arr = [1, 20, 4, 3, 6];
let pos = 2;
let ele = 34;

console.log(arr);
let newArr = insertAtPosition(arr, pos, ele);
console.log(newArr);

// before
// 1, 20, 4, 3, 6, 0

// after
// 1, 34, 20, 4, 3, 6, 

// Time Complexity: Worst: O(N)  
// Auxiliary Space: O(1)




