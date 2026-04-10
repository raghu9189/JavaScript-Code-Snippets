// This is a great question for testing your understanding of the fundamental difference between **immediate execution** and **function generation**.

// ### The Code
// ```javascript
// // Call, Bind and Apply in JavaScript (Explicit Binding)
// // Question 4 - Output Based Question

const person = { name: "Piyush" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 24));
console.log(sayHi.bind(person, 24));
// ```

// ---

// ### The Output
// 1.  **`Piyush is 24`**
// 2.  **`ƒ sayHi(age) { ... }`** (or the function definition string)

// ---

// ### Why is the output different?

// #### 1. `sayHi.call(person, 24)`
// The `.call()` method executes the function **immediately**. 
// * It sets `this` to `person`.
// * It passes `24` as the `age` argument.
// * It returns the string `"Piyush is 24"`, which `console.log` then prints.

// #### 2. `sayHi.bind(person, 24)`
// The `.bind()` method **does not execute** the function. Instead, it creates a **new function** with the context and arguments already "pre-filled."
// * When you `console.log` the result of a `.bind()`, you aren't logging the result of the function; you are logging the **function itself**.
// * To get the string output from the second line, you would need to invoke it like this: 
//     `console.log(sayHi.bind(person, 24)());`


// ### Summary Table

// | Method | Executes Immediately? | What does it return? |
// | :--- | :--- | :--- |
// | **`.call()`** | **Yes** | The actual result of the function (the string). |
// | **`.bind()`** | **No** | A brand new function object. |

// Are you preparing for an interview? This specific "call vs bind" comparison is a very common trick question!