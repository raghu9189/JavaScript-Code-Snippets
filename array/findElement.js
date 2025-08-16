// Javascript program to implement linear 
// search in unsorted array

// Function to implement search operation 
function findElement(arr, n, key){
    let i;
    for (i = 0; i<n; i++){
        if(arr[i] == key){
            return i;
        }
    }
    return -1;
}

let arr = [1,2,3,4,5];
let n = arr.length;
let key = 5;

let position = findElement(arr, n, key);

if (position == -1)
    console.log("Element not found");
else
    console.log("Element Found at Position: " + (position + 1));

// Time Complexity: O(N) 
// Auxiliary Space: O(1)