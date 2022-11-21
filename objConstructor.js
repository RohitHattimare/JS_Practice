// //Calculator

// function Calculator() {
//   this.read = function () {
//     this.a = +prompt("a ? ");
//     this.b = +prompt("b ? ");
//   };

//   this.sum = function () {
//     return this.a + this.b;
//   };

//   this.mul = function () {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

//Accumulator

function Accumulator(start) {
  this.value = start;

  this.read = function () {
    this.value += +prompt("Enter new number", "?");
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
