function evaluate(operation) {
    return function (a) {
        return function (b) {
            if (operation === "add") return a + b;
            else if (operation === "sub") return a - b;
            else if (operation === "mul") return a * b;
            else if (operation === "div") return a / b;
            else return "Invalid operation";
        }
    }
}

console.log(evaluate("add")(1)(2));
console.log(evaluate("sub")(1)(2));
console.log(evaluate("mul")(1)(2));
console.log(evaluate("div")(1)(2));