function outerFunction() {
    let testMyNum = 0
    function incrementTestMyNum(k) {
        testMyNum = testMyNum + k;
        console.log(testMyNum);
    }
    return incrementTestMyNum;
}
// outerFunction();
// outerFunction();
// outerFunction();

// for (let index = 1; index <= 5; index++) {
    
// }

function outerFunction1() {
    let myNum = 0;
    return {
        increment: function(){
            myNum=myNum+1; 
            console.log(myNum);
        },
        decrement: function(){
            myNum=myNum-1; 
            console.log(myNum);
        }
    };
}

const countMeClosure = outerFunction1();
countMeClosure.increment();
countMeClosure.increment();
countMeClosure.decrement();
