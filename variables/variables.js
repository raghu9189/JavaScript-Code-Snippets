// https://dandkim.com/js-var-let-const/

var a = 10;
function print(){
    var a = 30;
    console.log(a);
}
print();
console.log(a);

{
    const b = 50
    let a = 40
    console.log(a) // 40
    console.log(b) // 50
}

   console.log(a) // error
    console.log(b) // error