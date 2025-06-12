class Queue {
    constructor() {
            this.items = [];
    }
    enqueue(element){
        this.items.push(element);
        return this.items.length;
    }
    dequeue(){
        return this.items.shift();
    }
    size(){
        return this.items.length;
    }
    isEmpty(){
        return this.items.length === 0;
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0];
        }
        return null;
    }
    print(){
        console.log(this.items);
    }
}

const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.dequeue();
myQueue.print()