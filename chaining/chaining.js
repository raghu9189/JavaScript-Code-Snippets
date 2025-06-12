const obj = {
    myNum: 0,
    add: function(num){
        this.myNum += num;
        return this;
    },
    subtract: function(num){
        this.myNum -= num;
        return this;
    },
    printNum: function(){
        console.log(this.myNum);
    }
};
obj.subtract(10).add(200).printNum();