// method one using temp array 

function reverseArray(arr) {
    const n = arr.length;
    const temp = Array(n);
    for (let index = 0; index < n; index++) {
        temp[index] = arr[n - index - 1];
    }
    // console.log(JSON.stringify(temp))
    for (let index = 0; index < n; index++) {
        arr[index] = temp[index];
    }
    return arr;
}
const arr = [1,4,2,5,3,6,7,9,8];
console.log(arr);
reverseArray(arr);
console.log(arr);
