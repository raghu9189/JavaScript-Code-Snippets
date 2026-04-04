// https://dandkim.com/js-var-let-const/

var a = 10;
function print(){
    var a = 30;
    console.log(a);
}
print();
console.log(a);