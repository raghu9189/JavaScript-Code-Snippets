let sentance = "My company name is Microsoft Microsoft!"
let newStr = sentance.replace(/MICROSOFT/ig, 'Tesla');
console.log(newStr);


let sentanceTwo = "My company name is Microsoft Microsoft!";
let myArray = sentanceTwo.split(' ');
console.log(myArray);

// Reverse an Array
// Method 1
console.log([...myArray].reverse())
// Method 2
for (let index = myArray.length -1 ; index >= 0 ; index--) {
    const element = myArray[index];
    console.log(element);
    
}

// console.log(Number.isInteger(10));
// console.log(Number.parseInt("1009"))
// console.log(Number.EPSILON)

let myItems = [1,2,3,4,5,6,7,8];
// myItems.forEach(function(item, index, x){
//     console.log(item, index)
// })

const myObj = {
    x: 1,
    y: 10,
    z: 25
}

