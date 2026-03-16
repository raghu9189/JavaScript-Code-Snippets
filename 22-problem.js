const person = {
    id: 23,
    name: "Raghu",
    address: {
        city: "Hyd",
        pin: "505552"
    }
}

// convert the above object into an array of keys   

// [
//     "id",
//     "name",
//     "address.city",
//     "address.pin"
// ]

function flattenObject(obj, prefix = '') {
    let result = [];

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = prefix ? `${prefix}.${key}` : key;

            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                result = result.concat(flattenObject(obj[key], newKey));
            } else {
                result.push(newKey);
            }
        }
    }

    return result;
}

const flattenedKeys = flattenObject(person);
console.log(flattenedKeys);


