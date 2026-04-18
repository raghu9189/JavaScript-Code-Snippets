const elements = [2,3,4,5,6,7];
const binary = function(element){
    return parseInt(element.toString(2));
}
const output = elements.map(binary);
console.log(output);