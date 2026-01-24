const set = new Set([1,2,3,4, 4, 4,5,99,99, null, undefined, undefined]);

// size of set
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

// iterate over set
for (const item of set){
    console.log(item);
}

// delete all elements
set.clear();
console.log(set, " size of set is " + set.size);

// set methods: union, intersection, difference
const setA = new Set([1,2,3,4,5]);
const setB = new Set([4,5,6,7,8]);

// union
const unionSet = new Set([...setA, ...setB]);
console.log("Union: ", unionSet);

// intersection
const intersectionSet = new Set([...setA].filter(x => setB.has(x)));
console.log("Intersection: ", intersectionSet);

// difference
const differenceSet = new Set([...setA].filter(x => !setB.has(x)));
console.log("Difference: ", differenceSet);
