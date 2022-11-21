// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortS tring”.
// That is: removes all dashes, each word after dash becomes uppercased.
// let data = "my-short-string";

// function camelize(str) {
//   let arr = str.split("-");
//   let temp = arr.map((word, index) => {
//     console.log(word[0].toUpperCase());
//     let val = index == 0 ? word : word[0].toUpperCase() + word.slice(1);
//     return val;
//   });
//   console.log(arr);
//   console.log(temp);
//  w   }

// function camelize2(str) {
//   return str
//     .split("-")
//     .map((word, index) =>
//       index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join("");
// }

// console.log(camelize(data));

//==============================================

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.

// //with empty strings using map
// function filterRange2(arr, a, b) {
//   let temp = arr.map((value) => {
//     let res = a <= value && value <= b ? value : ;
//     return res;
//   });
//   return temp;
// }

// //filter makes saperate array with filtered itemss only
// function filterRange(arr, a, b) {
//   return arr.filter((value) => value >= a && value <= b);
// }
// data = [10, 20, 30, 40];
// console.log(filterRange(data, 20, 50));
// console.log(filterRange2(data, 20, 50));

//==============================================

// Filter range "in place"
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.

// function filterRangeInPlace(arr, a, b) {
//   return arr.filter((value) => a <= value && value <= b);
// }
// data = [10, 20, 8, 30, 12, 35, 40];
// console.log(filterRangeInPlace(data, 14, 35));

//==============================================

// Q: Sort in decending order by value

// let arr = [10, 20, 8, 30, -12, 35, -40, 0, -2];

// console.log(arr.sort((a, b) => b - a));

//=====================================================
//Q: Copy and sort array, while keeping origianla array

// let arr = ["knight", 35, "data", "combo"];
// function sort_arr(arr) {
//   return arr.slice().sort();
// }

// let arr2 = sort_arr(arr);
// console.log(arr);
// console.log(arr2);

//=====================================================

//Q: Create an extendable Calculator
//1: create a calculate(str) which ask "a+b"
//2. brak them add them and return sum.

// function Calculator() {
//   this.methods = {
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b,
//   };

//   this.calculate = function (str) {
//     let data = str.split(" ");
//     a = +data[0];
//     op = data[1];
//     b = +data[2];

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;
//     return this.methods[op](a, b);
//   };

//   this.addMethod = function (name, func) {
//     this.methods[name] = func;
//   };
// }

// let calc = new Calculator();
// calc.addMethod("*", (a, b) => a * b);
// calc.addMethod("/", (a, b) => a / b);
// calc.addMethod("**", (a, b) => a ** b);

// let result = calc.calculate("2 / 10");
// console.log(calc.calculate("2  * 10"));
// console.log(calc.calculate("2+    10"));
// console.log(calc.calculate("2 /  10"));
// console.log(calc.calculate("2 - 10"));
//======================================================

//Q: You have an array of user objects, each one has user.name.
// Write the code that converts it into an array of names.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];
// let names = users.map((item) => item.name);
// console.log(names);

//======================================================

//Q:You have an array of user objects, each one has name, surname and id.
//Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let userMapped = users.map((item) => ({
//   fullName: `${item.name} ${item.surname} `,
//   id: item.id,
// }));

// console.log(userMapped[0].id); // 1
// console.log(userMapped[0].fullName); // John Smit

//======================================================

//Q: Sort users by age
//Write the function sortByAge(users) that gets
//an array of objects with the age property and sorts them by age.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];

// function sortByAge(users) {
//   let temp = users.sort((a, b) => a.age - b.age);
//   return temp;
// }

// sortByAge(arr);
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); //pete
//================================================================

//Q:Shuffle ana Array :Write the function shuffle(array)
//that shuffles (randomly reorders) elements of the array.

// function shuffle(arr) {
//   arr.sort(() => Math.random() - 0.5);
// }
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// let count = 0;
// while (count < 10) {
//   shuffle(arr);
//   console.log(arr);
//   count++;
// }

//===========================================
// //Q: Get average age:
// Write the function getAverageAge(users) that gets an array of objects
// with property age and returns the average age.
// The formula for the average is (age1 + age2 + ... + ageN) / N.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// //long version
// function getAverageAgeLong(users) {
//   totlage = 0;
//   for (let key of users) {
//     totlage += key.age;
//   }
//   return totlage / users.length;
// }

// //Short version
// function getAverageAgeShort(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// console.log(getAverageAgeLong(arr));
// console.log(getAverageAgeShort(arr));
//==============================================================================

//Q:Filter unique array members
//Let arr be an array.
//Create a function unique(arr) that should return an array
// with unique items of arr.
//Each elements should only be once in an array (unique).

// let strings = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// function unique(str) {
//   let list = [];
//   for (let item of str) {
//     if (!list.includes(item)) list.push(item);
//   }
//   return list;
// }

// let res = unique(strings);
// console.log(res);

//=================================================

// Q:Create Create keyed object from array
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

//Using map
function groupByIdMap(arr) {
  let temp = {};
  arr.map((item) => (temp[item.id] = item));
  return temp;
}

//Using reduce
function groupByIdReduce(arr) {
  return arr.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
}

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupByIdMap(users);
console.log("Using Map: ");
console.table(usersById);
usersById = groupByIdReduce(users);
console.log(usersById);
