const calc = {
    number: 0,
    add: function(num){
        this.number += num;
        return this;
    },
    multiply: function(num){
        this.number *= num;
        return this;
    },
    printNumber: function(){
        console.log(this.number);
    }
};

const result = calc.add(10).multiply(5).printNumber();