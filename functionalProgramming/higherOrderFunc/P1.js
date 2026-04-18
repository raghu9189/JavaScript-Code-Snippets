// Find Circle Area, Circumference, Diameter
// A=πr^2, C=2πr, D=2r
// Formal approach with Higher Order Functions

const radius = [3, 4, 5, 8, 9];

const area = function(radius){
    return Math.PI * radius * radius;
}

const circumference  = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

const calculate  = function (radius, logic){
    const result = [];
    for(let i = 0; i <radius.length; i++){
        result.push(logic(radius[i]));
    }
    return result;
};

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

// or with map

console.log(radius.map(area))
console.log(radius.map(circumference))
console.log(radius.map(diameter))



