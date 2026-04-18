// Find Circle Area, Circumference, Diameter
// A=πr^2, C=2πr, D=2r
// Formal approach without Higher Order Functions

const radius = [3, 4, 5, 8, 9];
const calculateArea  = function (radius){
    const result = [];
    for(let i = 0; i <radius.length; i++){
        result.push(Math.PI * radius[i] * radius[i]);
    }
    return result;
};

console.log(calculateArea(radius));

const calculateCircumference = function(radius){
    const result = [];
    for(let i = 0; i <radius.length; i++){
        result.push(2 * Math.PI * radius[i] );
    }
    return result;
};

console.log(calculateCircumference(radius));

const calculateDiameter = function(radius){
    const result = [];
    for(let i = 0; i <radius.length; i++){
        result.push(2 * radius[i] );
    }
    return result;
};

console.log(calculateDiameter(radius));
