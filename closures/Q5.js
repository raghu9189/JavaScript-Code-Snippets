// scalable closure with constructor function 
function Counter() {
    var count = 0;
    this.increment = function () {
        count++;
        console.log(count);
    }
    this.decrement = function () {
        count--;
        console.log(count);
    }
}

var counter1 = new Counter();
counter1.increment();
counter1.increment();
counter1.increment();

