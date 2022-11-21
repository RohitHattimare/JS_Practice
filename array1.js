// let arr = [1, 2, 3, 4, 5, 6, { data: "value" }, "perfume"];
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// ============================================================================

// Let’s try 5 array operations.

// 1; Create an array styles with items “Jazz” and “Blues”.
// 2: Append “Rock-n-Roll” to the end.
// 3: Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// 4: Strip off the first value of the array and show it.
// 5: Prepend Rap and Reggae to the array.

// let styles = ["Jazz", "Blues"];

// console.log("1: " + styles);

// styles.push("Rock-n-Roll");
// console.log("2: " + styles);

// styles[(styles.length - 1) / 2] = "Classic";

// console.log("3: " + styles);
// styles.shift();
// console.log("4: " + styles);

// styles.unshift("Rap", "Reggae");

// console.log("5: " + styles);
// ============================================================================

// importance: 4
// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

//Using While
// function sumInput1() {
//   let list = [];

//   while (true) {
//     let input1 = prompt("Enter a No.", 0);
//     if (input1 === "" || input1 === null || !isFinite(input1)) break;
//     list.push(+input1);
//   }
//   let sum = 0;
//   for (let inp of list) {
//     sum += inp;
//   }
//   return sum;
// }

// //Using Do While
// function sumInput() {
//   let Num = [];
//   do {
//     let input1 = prompt("Enter a No.", 0);
//     Num.push(+input1);
//   } while (isFinite(input1) || input1 != "" || input1 != null1);

//   let sum = 0;
//   for (let inp of list) {
//     sum += inp;
//   }
//   return sum;
// }

// alert(sumInput());

// ============================================================================

// A maximal subarray
// importance: 2
// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

// The task is: find the contiguous subarray of arr with the maximal sum of items.

// Write the function getMaxSubSum(arr) that will return that sum

/* Pseudo Code:
    1] loop from start to end of array and loose one element from beg with each iteration
    2] store added elements each iteration
    3] check which is bigger 
*/
//Method:1
// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let partialSum = 0;

//   for (let item of arr) {
//     // for each item of arr
//     partialSum += item; // add it to partialSum
//     maxSum = Math.max(maxSum, partialSum); // remember the maximum
//     if (partialSum < 0) partialSum = 0; // zero if negative
//   }

//   return maxSum;
// }

// console.log(getMax([-1, 2, 3, -9])); // 5
// console.log(getMax([-1, 2, 3, -9, 11])); // 11
// console.log(getMax([-2, -1, 1, 2])); // 3
// console.log(getMax([100, -9, 2, -3, 5])); // 100
// console.log(getMax([1, 2, 3])); // 6
// console.log(getMax([-1, -2, -3])); // 0

// console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
// console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
// console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
// console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
// console.log(getMaxSubSum([1, 2, 3])); // 6
// console.log(getMaxSubSum([-1, -2, -3])); // 0

// //Method :2
// function getMax(arr) {
//   local_sum = 0;
//   final_sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     val = arr[i];
//     //   for (let val of arr) {
//     local_sum += val;
//     final_sum = Math.max(local_sum, final_sum);
//     if (local_sum < 0) local_sum = 0;
//   }
//   return final_sum;
// }

let arr = [1, 2, 3, 4, 5];

arr = arr.concat(7, 9);
console.log(arr.concat(7, 9));
console.log(arr);
data = arr.splice(2, 0, 444, 444, 444);

console.log(arr);
console.log(data);
console.log(arr.concat(888, 888, 888));
data = arr.concat(888, 888, 888);
console.log(data);

console.log(data.slice(8));

data.forEach((item, index, array) => {
  console.log(`${item} is at ${index} from ${array} `);
});
