const str1 = 'Hello'
const str2 = "World"

console.log(str1, str2);

// string interpolation 
const para = `The final value is ${200+10}`
console.log(para)

// Escape Characters
console.log(`Hello we\'re so called \"vikings\" node/node \\ there you are`)

// multiline strings using string templates

let text =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(text);

// Expression substitutions
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

console.log(total)