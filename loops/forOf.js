const person = {
    firstName: "Raghu",
    lastName: "Ballu",
    age: 26,
    occupation: "software engineer",
};

for (const key of Object.keys(person)) {
    console.log(person[key]);
}

