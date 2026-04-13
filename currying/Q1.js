// convert this f(a,b,c) = a+b+c into f(a)(b)(c) = a+b+c

function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(add(1)(2)(3));

