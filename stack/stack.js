class Stack{

    constructor(){
        this.items = [];
    }

    isEmpty(){
        this.items.length === 0; 
    }

    push(value){
        this.items.push(value);
    }

    pop(){
        if(this.isEmpty()){
            return "Stack Underflow";
        }
        return this.items.pop();
    }

    size(){
        if (this.isEmpty()) {
            return "Stack Underflow";
        }
        return this.items.length;
    }

    peek(){
        if(this.isEmpty()){
            return "Stack Underflow";
        }
        return this.items[this.size()-1];
    }

    print(){
        console.log(this.items);
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.size());
console.log(stack.pop());
stack.print();
console.log(stack.peek());
