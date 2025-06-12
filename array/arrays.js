const arr = [1,2,3,4,6,'hello',90];

/*
Insert / Remove from end = O(1)
New elements to add to the array.
Appends new elements to the end of an array, and returns the new length of the array.
*/
// Insert
const lenOfarr = arr.push(56);
console.log(arr);
console.log(lenOfarr);
console.log(arr.length); // find length by property 
// Remove
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
const removedValue = arr.pop();
console.log("removed last element" + removedValue);
console.log("elements " + arr);

/*
Insert / Remove from begining = O(n)
Inserts new elements at the start of an array, and returns the new length of the array.
*/
// Insert
const lenOfUnshiftedArray = arr.unshift(23);
console.log('Added at the begining ' + arr);
console.log(lenOfUnshiftedArray);
// Remove
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
const removedFirstElement = arr.shift();
console.log('removed first element ' + removedFirstElement);
console.log('elements ' + arr);

// Accessing elements O(1) 
// Subscript notation
console.log("First index element " + arr[0]);
console.log("Last index element " + arr[arr.length - 1]);
// Using array method at()
console.log("First index element(Method) " + arr.at(0));


// Searching element O(n)
const targetValue = 4;
for (let index = 0; index < arr.length; index++) {
    if(arr[index] == targetValue){
         console.log("Found index " + index);
    }
}

/*
JavaScript Array join()
The join() method also joins all array elements into a string.
It behaves just like toString(), but in addition you can specify the separator:
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * "));

// concatinating arrays using concat() - O(n)
const arrX = [1,2,3,4,5];
const arrY = [6,7,8,9,10];
console.log("merged array " + arrX.concat(arrY));


