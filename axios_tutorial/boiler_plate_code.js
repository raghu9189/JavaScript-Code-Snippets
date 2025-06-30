const axios = require('axios');

axios({
    method: 'GET',
    url: 'todos',
    baseURL: 'https://jsonplaceholder.typicode.com/',
    params: {
        id: 1
    }
})
.then(function(res){
    console.log(res.data);
})
