const items = [10, 20, 30, 40, 50];

for (let i = 0; i < items.length; i++){
    console.log("Item : ", items[i]);
}

// 2D array

const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    for (let j = 0; j < arr[i].length; j++) {
        const item = arr[i][j];
        console.log("ITEM: ",item);
    }
    // console.log(element);    
}