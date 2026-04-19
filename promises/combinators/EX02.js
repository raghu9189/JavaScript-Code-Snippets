// promise all example 
const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("P1 Success")
    }, 3000)
});

const p2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject("P2 Success")
    }, 1000)
});

const p3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("P3 Success")
    }, 5000)
});

// all
// Promise.all([p1, p2, p3]).then(function(res){
//     console.log(JSON.stringify(res));
// }).catch(function(err){
//     console.log(err);
// })
function showMeResp(res){
    document.getElementById("showme").addEventListener("click", function(){
        document.getElementById("display").innerHTML = JSON.stringify(res);
    })
}
// allSettled
Promise.allSettled([p1, p2, p3]).then(function(res){
    console.log(JSON.stringify(res));
    showMeResp(res);
}).catch(function(err){
    console.log(err);
})