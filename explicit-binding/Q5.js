// Call, Bind and Apply in JavaScript (Explicit Binding)
// Question 11 - Bind Chaining

function f() {
  console.log(this.name);
}

f = f.bind({ name: "John" }).bind({ name: "Ann" });

f();

// The Result: "John"
// Why does this happen?
// It might be tempting to think that the second .bind() overwrites the first, but in JavaScript, a function can only be bound once.

// The First Bind: When you call f.bind({ name: "John" }), it returns a new exotic function object. This new function is "hard-bound" to the John object.

// The Second Bind: When you call .bind({ name: "Ann" }) on that new function, you are essentially wrapping the already-bound function inside another function.

// The Execution: When f() is finally executed, it runs the outermost wrapper. However, that wrapper just calls the inner function (the one bound to John). Since the inner function is already bound, it ignores any further attempts to change its this context.

// Key Takeaway
// Once a function is bound using .bind(), its this context is locked. Any subsequent attempts to use .bind(), .call(), or .apply() on that specific bound function to change this will be silently ignored.