import url from "url"
const addr = "https://chatgpt.com/c/8210c355-b0b6-4537-9189-214d21a0b43c?page=1&offset=23"
const q = url.parse(addr, true);
console.log(q.hostname);
console.log(q.pathname);
console.log(q.search);
const data = q.query;
console.log(data.offset);