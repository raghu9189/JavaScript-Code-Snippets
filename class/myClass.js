class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    setName(name){
        this.name = name;
    }
    setAge(age){
        this.age = age;
    }
}

const personA = new Person('Raghu', '26');
const personB = new Person();
personB.setName('Saisri');
personB.setAge('26');
console.log(personA.getName());
console.log(personA.getAge());
console.log(personB.getName());
console.log(personB.getAge());
console.log(personA instanceof Person);
