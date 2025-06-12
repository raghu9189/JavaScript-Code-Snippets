// async/await example
(
    async function fetchData() {
        try {
            const myObj = {
                userId: 1,
                id: 1,
                title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                body: 'quia et suscipit\n' +
                  'suscipit recusandae consequuntur expedita et cum\n' +
                  'reprehenderit molestiae ut ut quas totam\n' +
                  'nostrum rerum est autem sunt rem eveniet architecto'
              }
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
            const data = await response.json();
            console.log(data);
        } catch (error) {
          console.error(error);
        }
      }
)();


