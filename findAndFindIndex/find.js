const users = [
    {
        id: 1,
        name: "raghu",
    },
    {
        id: 2,
        name: "Saisri",
    },
    {
        id: 3,
        name: "Ramya",
    },
    {
        id: 4,
        name: "Hari Chandana",
    },
]
const data = users.find((item)=>item.id == 2);
console.log(data);
