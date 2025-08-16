function findElement(arr, n, ele){
    let i;
    for (i = 0; i<n; i++){
        if(arr[i] == ele){
            return i;
        }
    }
    return -1;
}
function deleteAtPosition(arr, ele) {
    let n = arr.length
    let pos = findElement(arr, n, ele);
    if (pos == -1){
        console.log('element not found');
        return ele;
    }

    for (let index = pos; index < n-1; index++) {
        arr[index] = arr[index+1]
    }
    arr[n - 1] = null;
    arr.length = n - 1;
    return arr;
}

let arr = [1, 20, 4, 3, 6, 10, 42, 36];
let ele = 4;

console.log(arr);
let newArr = deleteAtPosition(arr, ele);
console.log(newArr);

// Time Complexity: Worst: O(N)  
// Auxiliary Space: O(1)
