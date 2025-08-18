const arr = [1,2,3,4,5];
const modifiedArray = arr.map(k => k * 2);
console.log(modifiedArray);

// arr.map((value, index, ar)=>{
//     console.log(value, index, ar);
// })

const allowedValues = arr.filter((value, index)=>{
    return value > 2;
})
console.log('allowed num',allowedValues);
const sumOfArray = arr.reduce((acc, curr)=> acc + curr, 0);


