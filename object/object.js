/* 
Object Time Comnplexity

Insert = O(1)
Remove = O(1)
Access = O(1)
Search = O(n)
Object.keys() = O(n)
object.values() = O(n)
Object.entries() = O(n)

*/

const obj = {
    name: 'Raghu',
    age: 25,
    'isHuman': true,
}

// Accessing objects 
// bracket notation
console.log(obj['name']);

// dot notation
console.log(obj.age);

const objKeys = Object.keys(obj); // return [ 'name', 'age', 'isHuman' ]
console.log(objKeys);
const objValues = Object.values(obj); // return [ 'Raghu', 25, true ]
console.log(objValues);
const objEntries = Object.entries(obj); // return [ [ 'name', 'Raghu' ], [ 'age', 25 ], [ 'isHuman', true ] ]
console.log(objEntries);
