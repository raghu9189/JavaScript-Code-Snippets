const map = new Map([
    ['a', 1], 
    ['b', 2], 
    ['c',3]
]);

console.log('get value of key a', map.get('a'));

map.set('d',4);
map.delete('a');
map.clear();
map.has('a');

// student map (Looping)
const student = new Map([
    ['name', 'raghu'],
    ['age', 25], 
    ['class', 12]
]);

for (const [k, v] of student) {
    console.log(`Key = ${k}, Value = ${v}`);
}

// iterating 
const iterator = student.entries(); // Get an iterator for key-value pairs

let result = iterator.next();
while (!result.done) {
  console.log(result.value); // Output: ['a', 1], ['b', 2], ['c', 3]
  result = iterator.next(); // Move to the next entry
}
