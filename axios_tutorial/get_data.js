const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos/101',{
    params: {
        id: 1
    }
})
.then(function(response){
    console.log(response.data);
})
.catch(e=>console.log(e));