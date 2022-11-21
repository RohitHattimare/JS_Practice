// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

// user = {};
// user.name = "john";
// user.surname = "Smith";
// user.name = "pete";
// delete user.name;

//--------------------------------------------------------

//2]Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
//Should work like that:

// function isEmpty(obj) {
//   //logic 1 : for empty object
//   for (let keys in obj) {
//     return false;
//   }
//   return true;
// }

// //logic 2: empty obj
// function isEmpty2(obj) {
//   console.log(Object.keys(obj) === 0);
// }

// user = {};
// console.log("1\t" + isEmpty2(user));

// user.name = "lada";
// console.log("2\t" + isEmpty2(user));

//------------------------------------------------------------------------------------------------------------

//3] We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

// let salaries = {};

// function totalSalarie(salaries) {
//   let sum = 0;
//   for (let keys in salaries) {
//     sum += salaries[keys];
//   }

//   if (sum != 0) return true;
//   else return false;
// }

// console.log(totalSalarie(salaries));

//------------------------------------------------------------

//4] Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.

// ---------------------
let multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (!isNaN(obj[key])) obj[key] *= 2;
  }
  return obj;
};
console.log(" before : ", menu);
console.log("AFTER", multiplyNumeric(menu));
