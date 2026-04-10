
console.log("start");

function importantAction(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("This is important Primary Task")
        }, 1000);
    })
}

function checking(num){
    return new Promise((resolve, reject)=>{
        if (num) resolve("it is positive");
        else reject("it is zero");
    });
}

importantAction()
    .then((res)=>{
        console.log(res)
        // returning new promise here
        return checking(1);
    })
    // chaining here
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })

console.log("stop");