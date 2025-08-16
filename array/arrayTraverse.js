const arr = [4,6,7,2,3,1,8,9];
const n = arr.length;

// forward traverse
for(let i = 0; i<n;i++){
    console.log(arr[i]);
}

// backward traverse
for(let i = n-1; i >= 0 ;i--){
    console.log(arr[i]);
}
