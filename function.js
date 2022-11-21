"use strict";

let ask = (que, yes, no) => (que ? yes() : no());

ask(
  "a",
  () => console.log("Yes give me food"),
  () => console.log("No I am full")
);
console.log(typeof null); // error in the language
console.log(typeof function () {});

// function sum(a, b) {
//   return a + b;
// }

// let sum2 = function (a, b) {
//   return a + b;
// };

// let sum3 = (a, b) => a * b;

// console.log(sum(2, 3));
// console.log(sum2(3, 4));
// console.log(sum3(4, 5));
