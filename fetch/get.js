async function fetchData(url) {
    const responseData = await fetch(url, {method: "GET"})
    console.log(responseData.ok)
    
}

fetchData("https://jsonplace3holder.typicode.com/posts")