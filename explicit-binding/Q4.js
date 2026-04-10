// Call, Bind and Apply in JavaScript (Explicit Binding)
// Question 14 - Explicit Binding with Arrow Function

const age = 10;

var person = {
  name: "Piyush",
  age: 20,
  getAgeArrow: () => console.log(this),
  getAge: function () {
    console.log(this.age);
  },
};

var person2 = { age: 24 };

person.getAgeArrow.call(person2); // ?
person.getAge.call(person2);      // 24


// Explanation of the Output
// If you are wondering what the first call results in:

// person.getAgeArrow.call(person2): This will log the Window object (or the global object).

// Why? Arrow functions do not have their own this. They inherit this from the scope in which they were defined (lexical scoping). Since person is defined in the global scope, the arrow function points to the global object. Methods like .call(), .apply(), and .bind() cannot change the this context of an arrow function.

// person.getAge.call(person2): This logs 24.

// Why? This is a regular function. Regular functions have their own this context which can be explicitly set using .call(). In this case, you successfully pointed this to person2.

