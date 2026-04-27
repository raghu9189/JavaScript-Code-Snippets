// without closure 
// function find(index) {
//     const arr = [];
//     for (let i = 0; i < 1000000; i++) {
//         arr[i] = i * i;
//     }
//     console.log(arr[index]);
// }
// console.time("3")
// find(3)
// console.timeEnd("3")

// console.time("78")
// find(78)
// console.timeEnd("78")

// output:
// 9
// 3: 30.94ms
// 6084
// 78: 9.48ms

// with closure
function createFind() {
    const arr = [];
    for (let i = 0; i < 1000000; i++) {
        arr[i] = i * i;
    }
    return function find(index) {
        console.log(arr[index]);
    }
}

const find = createFind();
console.time("3")
find(3)
console.timeEnd("3")

console.time("78")
find(78)
console.timeEnd("78")
