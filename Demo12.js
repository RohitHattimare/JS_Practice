//Create script to prompt 2 numbers and print the sum of

// let num1 = +prompt("Enter Num1", "-----");
// let num2 = +prompt("Enter Num2", "-----");

// let sum = num1 + num2;
// alert(sum);

// ---------------------------------------

// -> Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
// The resulting value must be returned as a number.
// The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

// function readNumber() {
//   let num;

//   do {
//     num = prompt("Enter Num", 0);
//   } while (!isFinite(num));

//   if (num === null || num === "" || num === " ") return null;

//   return +num;
// }

// alert(` read : ${readNumber()} `);

// ======================================================================
// strg demo2: check Spam
// function checkSpam(str) {
//   str = str.toLowerCase();
//   return str.includes("viagra") || str.includes("xxx");
// }

// console.log(checkSpam("buy ViAgRA now"));
// console.log(checkSpam("free xxxxx"));
// console.log(checkSpam("innocent rabbit"));
// console.log(checkSpam(""));
//===============================================================

//Truncate the textContent

//Method :1
// function truncate(str, maxlen) {
//   if (str.length >= maxlen) {
//     str = str.slice(0, maxlen - 1) + "...";
//   }
//   return str;
// }

//method 2:
// truncate = (str, maxlen) => {
//   return str.length >= maxlen ? str.slice(0, maxlen - 1) + "..." : str;
// };

// console.log(truncate("Hi everyone!", 20));
// console.log(truncate("What I'd like to tell on this topic is:", 20));

//=============================================================

//Extract the money

function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue("$120"));
console.log(extractCurrencyValue("$12312312310"));
[].at();
