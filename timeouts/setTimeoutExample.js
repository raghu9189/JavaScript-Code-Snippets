const sayHello = (userName='User') => {
    console.log(`Hello ${userName}`)
}
console.log(`Start 📌`)
const resp = setTimeout(()=>sayHello('Raghu'), 2000);
console.log(`End 📌`)