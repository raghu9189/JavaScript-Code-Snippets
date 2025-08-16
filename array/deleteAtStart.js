function deleteAtPosition(arr) {
    let n = arr.length

    for (let index = 0; index < n-1; index++) {
        arr[index] = arr[index+1]
    }
    arr[n - 1] = null;
    arr.length = n - 1;
    return arr;
}

let arr = [1, 20, 4, 3, 6, 10, 42, 36];

console.log(arr);
let newArr = deleteAtPosition(arr);
console.log(newArr);

// Time Complexity: Worst: O(N)  
// Auxiliary Space: O(1)
