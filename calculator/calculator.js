// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
  // ... your code ...
  read() {
    this.a = +prompt("Enter value of a:", "a");
    this.b = +prompt("Enter value of b:", "b");
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert("sum :" + calculator.sum());
alert("mul :" + calculator.mul());
