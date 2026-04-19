async function fetchData() {
    const URL = "https://api.github.com/users/raghu9189";
    const response = await fetch(URL);
    const jsonData = await response.json();
    console.log(JSON.stringify(jsonData));
}
fetchData();