// explain the difference between deep copy and shallow copy in javascript with examples.
// In JavaScript, the terms "deep copy" and "shallow copy" refer to two different ways of copying objects and their properties.

// A shallow copy creates a new object that references the same memory location as the original object for its nested objects. 
// This means that if you modify a nested object in the copied object, it will also affect the original object because both objects share the same reference to that nested object.
// Example of shallow copy:
const originalShallow = {
    name: "Alice",
    address: {
        city: "Wonderland",
        zip: "12345"
    }
};

// Creating a shallow copy using Object.assign
const shallowCopy = Object.assign({}, originalShallow);

// Modifying the nested object in the shallow copy
shallowCopy.address.city = "New Wonderland";

console.log(originalShallow.address.city); // Output: "New Wonderland"
// As you can see, modifying the nested object in the shallow copy also affected the original object.

// A deep copy, on the other hand, creates a new object and recursively copies all nested objects. This means that the new object and the original object do not share any references to nested objects. 
// Therefore, modifying a nested object in the deep copy will not affect the original object.
// Example of deep copy:
const originalDeep = {
    name: "Bob",
    address: {
        city: "Builderland",
        zip: "67890"
    }
};

// Creating a deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(originalDeep));

// Modifying the nested object in the deep copy
deepCopy.address.city = "New Builderland";

console.log(originalDeep.address.city); // Output: "Builderland"
// In this case, modifying the nested object in the deep copy did not affect the original object.

// In summary:
// - Shallow Copy: Copies the top-level properties, but nested objects are shared between the original and copied objects.
// - Deep Copy: Recursively copies all properties, creating entirely independent objects.   


// deep copy using structuredClone (modern approach)
const originalStructured = {
    name: "Charlie",
    address: {
        city: "Chocolate Factory",
        zip: "11223"
    }
};

const structuredCopy = structuredClone(originalStructured);
structuredCopy.address.city = "New Chocolate Factory";

console.log(originalStructured.address.city); // Output: "Chocolate Factory"
// structuredClone creates a deep copy, so the original object remains unaffected.

// Note: structuredClone is a modern method and may not be supported in all environments.
// For older environments, you can use libraries like Lodash for deep cloning