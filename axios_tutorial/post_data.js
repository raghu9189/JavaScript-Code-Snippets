const axios = require('axios');

axios.post('https://jsonplaceholder.typicode.com/posts/',
     {
        title: "My name is Steve Rogers 199!",
        body: "I am Captain America"
    }
)
.then(function(response){
    console.log(response.data);
})
.catch(e=>console.log(e));