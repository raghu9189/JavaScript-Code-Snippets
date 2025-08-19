const stack = {
    size: 0,
    items: [],
    push: function(item){
        this.items.push(item);
        this.size++;
    },
    pop: function(){
        if(this.size == 0){
            return -1;
        }
        delete this.items[this.size-1];
        this.items.length = this.size-1;
        this.size--;
    },
    peek: function(){
        if(this.size == 0){
            return -1;
        }
        return this.items[this.size-1];
    }
}
console.log(stack.pop())
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop()
console.log(stack.items, stack.size);
console.log('peek ', stack.peek());
