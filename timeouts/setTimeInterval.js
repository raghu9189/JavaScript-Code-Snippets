const greetEveryTime = (userName='User') => {
    console.log(`Hello ${userName}`);
}
console.log(`Start 📌`)
let counter = 0;
const interval = setInterval(()=>{
    counter++;
    console.log(`Interval tick ${counter}`);
    
    // stop at time 5th
    if (counter == 5) clearInterval(interval);
    greetEveryTime('Raghu');
}, 2000);
console.log(`End 📌`);