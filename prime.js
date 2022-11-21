// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result:

function pow(a, b) {
  let result = a;
  for (var i = 0; i < b; i++) {
    result *= a;
  }
  console.log("pow");
  return result;
}

let pow2 = function (a, b) {
  let result = a;
  for (var i = 0; i < b; i++) {
    result *= a;
  }
  console.log("pow2");
  return result;
};

console.log(pow2(10, 10));
console.log(pow(2, 3));
console.log(pow2(2, 5));
