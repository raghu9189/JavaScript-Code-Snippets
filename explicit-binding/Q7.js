// Call, Bind and Apply in JavaScript (Explicit Binding)
// Question 6 - What is the output?

var status = "😎";

setTimeout(() => {
  const status = "😍";

  const data = {
    status: "🥑",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus()); // 🥑
  console.log(data.getStatus.call(this)); // 😎
}, 0);


// ### Simple Explanation

// 1.  **`data.getStatus()` output: 🥑**
//     * This is a standard method call. In JavaScript, when you call a function as a method of an object (`data.method()`), the `this` keyword refers to the object itself. So, `this.status` becomes `data.status`, which is the avocado.

// 2.  **`data.getStatus.call(this)` output: 😎 (not 😍)**
//     * This is where it gets clever. We are using an **arrow function** for `setTimeout`. 
//     * Arrow functions do not have their own `this`; they inherit it from the outside scope. In this case, the outside scope is the **Global/Window scope**.
//     * Therefore, inside the `setTimeout`, `this` still refers to the `window` object.
//     * When you run `.call(this)`, you are telling the function to use the global `window` as its context. 
//     * The `var status = "😎"` is a global variable (attached to `window`), while `const status = "😍"` is just a local variable inside the function block. `this.status` looks for the property on the object, so it finds the global `var` and ignores the local `const`.


// ### Key Takeaway
// `this` refers to **objects and properties**, not local variables declared with `const` or `let`. Because the arrow function passed to `setTimeout` preserves the global `this`, `.call(this)` points to the global `status`.

