const stack = [];
function pushItem(n){
    stack.push(n);
}

function dequeue(){
    stack.shift();
}
pushItem(1);
pushItem(2);
pushItem(3);
pushItem(4);
dequeue();
console.log(stack);