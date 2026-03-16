function getItems(url) {
    const posts = [1,2,3];
    const blogs = [1,2,4];
    return { posts, blogs };
}

const {posts, blogs}= getItems("rr");
console.log(posts, blogs);