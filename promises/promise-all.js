
console.log("start");

function primaryAction(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("This is important Primary Task")
        }, 1000);
    })
}

function secondaryAction(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("This is important Secondary Task")
        }, 1000);
    })
}

function tertiaryAction(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("This is important Tertiary Task")
        }, 1000);
    })
}

// Promise.all([
//     primaryAction(),
//     secondaryAction(),
//     tertiaryAction(),
// ]).then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err)
// });

Promise.allSettled([
    primaryAction(),
    secondaryAction(),
    tertiaryAction(),
]).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err)
});

console.log("stop");
