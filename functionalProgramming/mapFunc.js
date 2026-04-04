const arr = [1,2,3,4,5];
const newModifiedArray = arr.map((currentValue, index, array) => { 
    return currentValue * (index + 1);
})

console.log(`New Modified Value, ${newModifiedArray}`);


const allowedValues = arr.filter((value, index, array)=>{
    return value > 2;
})
console.log('allowed num',allowedValues);
const sumOfArray = arr.reduce((acc, curr, index, array)=> acc + curr, 0.1);
console.log("Sum : ", sumOfArray);


