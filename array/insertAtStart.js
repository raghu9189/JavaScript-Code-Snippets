function insertAtStart(arr, ele) {
    let n = arr.length;
    arr[n] = 0;
    for (let index = n; index >= 0; index--) {
        arr[index] = arr[index-1]
    }
    arr[0] = ele
    return arr;
}

let arr = [1, 20, 4, 3, 6];
let ele = 34;

console.log(arr);
let newArr = insertAtStart(arr, ele);
console.log(newArr);

// before
// 1, 20, 4, 3, 6, 0

// after
// 34, 1, 20, 4, 3, 6, 

// Time Complexity: Worst: O(N)  
// Auxiliary Space: O(1)




