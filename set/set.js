const set = new Set([1,2,3,4, 4, 4,5,99,99, null, undefined, undefined]);
console.log(set.size);

// adding element 
set.add(11);
set.add(1);
console.log(set);

// deleting element
set.delete(1)
console.log(set);

// check whether element exists or not
const isItemExists = set.has(1);
console.log(isItemExists);

// delete all elements
set.clear();
console.log(set, " size of set is " + set.size);


