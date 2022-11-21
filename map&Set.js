// let map = new Map();
// map
//   .set(5.5, "helo1")
//   .set(6.5, "helo2")
//   .set(7.5, "helo")
//   .set(8.5, "helo3")
//   .set(9.5, "helo4")
//   .set(3.5, "helo5")
//   .set(4.5, "helo6")
//   .set(2.5, "helo7");

// console.log(map.set(1.5, "helo8"));
// console.log(map.get(3.5));
// console.log(map.has(3.5));
// console.log(map.delete(3.5));
// console.log(map.has(3.5));
// console.log(map.size);

// for (let key of map.keys()) {
//   console.log(key);
// }
// for (let value of map.values()) {
//   console.log(value);
// }
// for (let value of map) {
//   console.table(value);
// }

//sample 2
// let map2 = new Map([
//   ["hello", 1.5],
//   ["bye", 2.5],
//   [123, 213456],
// ]);

// for (let key of map2.keys()) {
//   console.log(key);
// }

// for (let value of map2.values()) {
//   console.log(value);
// }

// for (let value of map2) {
//   console.table(value);
// }

// map.forEach((value, key, map) => {
//   console.log(`${value}  are store in key  ${key}`);
// });

//Example of map.entries:

// let obj = {
//   id: 1,
//   name: "John",
// };

// let map3 = new Map(Object.entries(obj));

// console.table(map3);

// console.table(map3.entries());

// let obj2 = Object.fromEntries(map3);
// console.table(obj2);
//==================================================================

//Set :

// let set = new Set([1, 2, 3, 4, 5]);
// set.add(6);

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };
// console.log(set);
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// set.add("game");
// set.add("frame");
// set.add("prem");

// set.add("game");
// set.add("frame");
// set.add("prem");
// // console.log(set);
// for (let user of set.entries()) {
//   console.log(user); // John (then Pete and Mary)
// }
// let obj = { name: "Obj" };

//==================================================================

//Q: Filter Unique Array Memebers
// let values = [
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

// //method1: Stored in set Object
// let unique = new Set(values);

// //method 2: Create array from aobject
// function uniq(arr) {
//   return Array.from(new Set(arr));
// }

// console.log(unique);
// console.log(uniq(values));

//==================================================================
/*Q:Filter anagrams
Anagrams are words that have the same number of same letters, but in different order */

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr) {
//   let map = new Map();
//   for (let word of arr) {
//     sorted = word.toLowerCase().split("").sort().join("");
//     map.set(sorted, word);
//   }
//   return Array.from(map.values());
// }

// console.log(aclean(arr));

//==================================================================
/* Q: Iterable Keys: We’d like to get an array of map.keys() in a variable\
       and then apply array-specific methods to it, e.g. .push.*/

let map = new Map();
map.set("Name", "john");
map.set("surname", "sina");
map.set("age", "immortal");

let keys = Array.from(map.values());
keys.push("more");
map.set("more", 123);
console.log(map);
