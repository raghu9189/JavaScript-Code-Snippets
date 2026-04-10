
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
            resolve("This is important Tertiary Task")
        }, 1000);
    })
}

const callFunctions = async () => {
    const message1 = await primaryAction();
    const message2 = await secondaryAction();
    const message3 = await tertiaryAction();

    const result = { message1, message2, message3};
    console.log(result);
}

callFunctions();

console.log("stop");
