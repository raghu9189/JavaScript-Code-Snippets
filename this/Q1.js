// 'this' keyword in javascript implicit binding

const user = {
    name: "Raghu",
    greet(){
        console.log(`Hello, ${this.name}`);
    },
    farewell: ()=>{
        console.log(`Goodbye, ${this.name}`);
    }
}

user.greet() // Hello, Raghu
user.farewell() // Goodbye, undefined
