// Call, Bind and Apply in JavaScript (Explicit Binding)
// Question 8 - Append an array to another array

const array = ["a", "b"];
const elements = [0, 1, 2];

array.push.apply(array, elements);

console.log(array); // ["a", "b", 0, 1, 2]

// How it Works
// The Array.prototype.push() method normally takes a list of items as individual arguments, like push(1, 2, 3). 
// It doesn't natively accept a whole array to append.