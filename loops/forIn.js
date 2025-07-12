const data = {
    name: "raghu",
    age: 25,
    gender: "male"
}

// with object key - value
for (const key in data) {
    // if (Object.prototype.hasOwnProperty.call(data, key)) {
    //     const element = data[key];
    //     console.log(key, element);
    // }
    const element = data[key];
    console.log(key, element);
}

// with array
const items = [10, 20, 30, 40, 50]
for (const key in items) {
    console.log(items[key])
}