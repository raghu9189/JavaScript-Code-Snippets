
console.log("start");

// Primary
function importantAction(taskName, cb){
     setTimeout(()=>{
            cb(taskName);
        }, 1000);
}

// Secondary
function secondaryAction(taskName, cb){
     setTimeout(()=>{
            cb(taskName);
        }, 1000);
}

// Tertiary
function tertiaryAction(taskName, cb){
     setTimeout(()=>{
            cb(taskName);
        }, 1000);
}

importantAction("TS01", function(message){
    console.log(`This is important Primary Task ${message}`)

    secondaryAction("TS02", function(message){
        console.log(`This is important Secondary Task ${message}`)

        tertiaryAction("TS03", function(message){
            console.log(`This is important Tertiary Task ${message}`)
        })
        
    })

})
console.log("stop");