
const arr = [1,2,3,4,5];

// insert at the end
arr.push(6,7,8);
console.log(arr);

// insert at the start
arr.unshift(999);
arr.unshift(888);
console.log(arr);

arr.splice(1, 0, 777);
console.log(arr)

// Array.prototype.insert = function ( index, ...items ) {
//     this.splice( index, 0, ...items );
// };
// arr.insert(1, 666)
// console.log(arr)

// arr.pop();
// console.log(arr);