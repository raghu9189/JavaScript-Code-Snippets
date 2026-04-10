
console.log("start");

function importantAction(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("This is important Primary Task")
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
        return checking(0);
    })
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err)
    })

console.log("stop");