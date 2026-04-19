// promise all example 
// https://api.github.com/users/raghu9189, https://api.github.com/users/saisripadakanti, https://api.github.com/users/KaushikSheel12

async function fetchUserData(url){
    const resp = await fetch(url);
    const jsonData = await resp.json();
    const {login, name} = jsonData;
    return {login, name};
}

// all
Promise.all([
    fetchUserData("https://api.github.com/users/raghu9189"),
    fetchUserData("https://api.github.com/users/saisripadakanti"),
    fetchUserData("https://ap2i.git432hub.com/users/KaushikSheel12"), // wrong URL to mimic situation
]).then(function(res){
    console.log(JSON.stringify(res));
}).catch(function(err){
    console.log(err);
})

// allSettled
Promise.allSettled([
    fetchUserData("https://api.github.com/users/raghu9189"),
    fetchUserData("https://api.github.com/users/saisripadakanti"),
    fetchUserData("https://ap2i.git432hub.com/users/KaushikSheel12"),
]).then(function(res){
    console.log(JSON.stringify(res));
}).catch(function(err){
    console.log(err);
})