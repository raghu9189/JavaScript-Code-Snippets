const a = [1, 2, 3];

// Use reduce to calculate the sum
const sum = a.reduce((acc, x, index) => {
    console.log(`accu: ${acc}, value: ${x}, index: ${index}`)
    return acc + x;
}, 10);

console.log(sum);


const sub = a.reduce((acc, curr) => acc - curr, 0);
console.log(sub); // Output: -6