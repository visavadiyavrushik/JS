// import "./styles.css";

// ! ========================= 1 ================================================

// ?  Q.1 Write a function that takes a string as input and returns the string reversed.

// function reverseString(str) {
//   const splitstr = str.split("").reverse();

//   const output = splitstr.reverse().join("");

//   return output;
// }
// console.log(reverseString("abcd"));

// ! =========================== 2 ===============================================

// ?  Q.2 Create a function that checks if a given word or phrase is a palindrome (string is same from start and end).

// function isPalindrome(str) {
//   const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   console.log("cleanStr: ", cleanStr);
//   return cleanStr === cleanStr.split("").reverse().join("");
// }
// const word = "radar";
// console.log("isPalindrome(phrase);: ", isPalindrome(word));

// !  ========================== 3 ===============================================

// ?  Q.3 Given the following JavaScript code: (method 1)
// const str = "hello";
// output:- m = 1 ,s= 2 ,i=2,n=1,g=1

// * Answer
// const d = str.split("");
// let output = {};

// for (let i = 0; i < d.length; i++) {
//   if (f[d[i]] !== null && f[d[i]] !== undefined) {
//     f[d[i]] = f[d[i]] + 1;
//   } else {
//     f[d[i]] = 1;
//   }
// }
// console.log(output);

// * ? (Method 2)
// const str = "hcheckello";

// const characters = str.split("");
// let output = {};

// for (let i = 0; i < characters.length; i++) {
//   const char = characters[i];
//   output[char] = (output[char] || 0) + 1;
// }

// console.log(output);

// * ? Function
// function countCharacters(str) {
//   const characters = str.split("");
//   let output = {};

//   for (let i = 0; i < characters.length; i++) {
//     const char = characters[i];
//     output[char] = (output[char] || 0) + 1;
//   }

//   return output;
// }

// const result = countCharacters("hello");
// console.log(result);

// ! =================== 4 =============================

// ? Q.4 Given the following JavaScript code:

// const a = [1, 4, 8, 6];
// const b = [2, 4, 6, 1, 3, 5];
// // output will be this in new array  [3,8,14,7,3,5]

// const value = Math.max(b.length, a.length);
// console.log(value);

// let array = [];
// for (let i = 0; i < value; i++) {
//   // if(a.length)
//   let aValue = a[i] || 0;
//   let bValue = b[i] || 0;
//   let final = aValue + bValue;
//   array.push(final);
//   // console.log("hello", final, array);
//   // return final;
// }

// console.log(array);

// !  =================== 5 ==============================

// ? Q.5 take one string and in the output letter in not repet 2nd time.
// const str = "hello javacript";

// let arr = [];

// for (let i = 0; i < str.length; i++) {
//   arr.push(str.charAt(i));
// }

// let f = {};

// for (let i = 0; i < arr.length; i++) {
//   if (f[arr[i]] !== null && f[arr[i]] !== undefined) {
//     f[arr[i]] = f[arr[i]] + 1;
//   } else {
//     f[arr[i]] = 1;
//   }
// }
// console.log(Object.keys(f).join(""));

// ? js built in function
// const str = "hello javacript";
// const f = {};

// for (const char of str) {
//   if (char !== " ") {
//     f[char] = (f[char] || 0) + 1;
//   }
// }

// console.log(Object.keys(f).join(""));

// !  =================== 6 ==============================

// ? Q.6 Write a function that takes a sentence as a parameter and returns the longest word in it.
// const a = "hello my name,javascript";

// const b = a.split(/\s+/);
// // console.log(b);
// // b.map((j, i) => console.log(j));
// var d = "";

// for (const c of b) {
//   if (e.length > d.length) {
//     d = c;
//   }
// }
// console.log("Longest word", d);

// Function
// const paragraph =
//   "In the midst of winter, I found there was,widddthin me, an invincible summer.";

// function findLongestWord(paragraph) {
//   const words = paragraph.split(/\s+/);
//   let longestWord = "";

//   for (const word of words) {
//     const cleanedWord = word.replace(/[^\w]/g, ""); // Remove non-alphanumeric characters
//     if (cleanedWord.length > longestWord.length) {
//       longestWord = cleanedWord;
//     }
//   }

//   return longestWord;
// }

// const longestWord = findLongestWord(paragraph);
// console.log("Longest word:", longestWord);

// !  =================== 7 ==============================

// ? Q.7 Write a function that calculates the sum of all elements in an array.

// function arraysum(val) {
//   let sum = 0;
//   if (val.length) {
//     for (let i = 0; i < val.length; i++) {
//       if (typeof val[i] !== "string") {
//         sum += val[i];
//       }
//     }
//   }
//   return sum;
// }
// const arr = arraysum([5, 155, "12"]);
// console.log("arr: ", arr);

// ! ===================== 8 =================================

//  ? Q.8 Write a function that removes duplicate elements from an array

// function removeDuplicate(r) {
//   let newarr = [];
//   for (let i = 0; i < r.length; i++) {
//     if (!newarr.includes(r[i])) {
//       newarr.push(r[i]);
//     }
//   }
//   return newarr;
// }

// const arr = [10, 12, 15, 12, 10, 56];
// const removeDuplicateValue = removeDuplicate(arr);
// console.log("removeDuplicateValue: ", removeDuplicateValue);

// ! ===================== 9 =================================

//  ? Q.9 Write a Function to remove null values and their keys

// const obj = {
//   name: "John",
//   age: 30,
//   job: "developer",
//   mobileNo: null,
// };

// // Function to remove null values and their keys
// const removeNullValues = (inputObject) => {
//   const result = {};

//   // Iterate through the keys
//   for (const key in inputObject) {
//     // Check if the value is not null
//     if (inputObject[key] !== null) {
//       // Add the key-value pair to the result object
//       result[key] = inputObject[key];
//     }
//   }

//   return result;
// };

// // Call the function with the given object
// const newObj = removeNullValues(obj);

// console.log(newObj);

// ? 10

// function countPossibilities(target, coins) {
//   // Initialize an array to store the number of possibilities for each target value
//   const dp = new Array(target + 1).fill(0);
//   // There is 1 possibility to make 0 rupees (by not selecting any coin)
//   dp[0] = 1;

//   // Iterate through each coin denomination
//   for (const coin of coins) {
//     // Update the possibilities array based on the current coin
//     for (let i = coin; i <= target; i++) {
//       dp[i] += dp[i - coin];
//     }
//   }

//   // Return the number of possibilities to make the target amount
//   return dp[target];
// }

// // Function to get target amount from the user
// function getTargetAmountFromUser() {
//   let targetAmount = parseInt(prompt("Enter the target amount in rupees:"));

//   // Validate the input
//   while (isNaN(targetAmount) || targetAmount < 0) {
//     targetAmount = parseInt(
//       prompt("Invalid input. Please enter a valid positive number:")
//     );
//   }

//   return targetAmount;
// }

// // Main function to calculate possibilities for the target amount entered by the user
// function main() {
//   const targetAmount = getTargetAmountFromUser();
//   const coins = [1, 2, 5, 10];
//   const possibilities = countPossibilities(targetAmount, coins);
//   console.log(
//     `Number of possibilities to make ${targetAmount} rupees: ${possibilities}`
//   );
// }

// // Call the main function
// main();

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// console.log(shuffleArray([1, [3, 4], [6, 7], [2, 3]]));

// reverse string without use reverse
// function reverseString(str) {
//   // ? 1
//   // let reversed = "";
//   // for (let char of str) {
//   //   reversed = char + reversed;
//   // }
//   // return reversed;

//   // ? 2
//   let rev = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
//   }
//   return rev;
// }

// console.log(reverseString("hello"));

// Find the First Non-Repeating Character
// const firstUniqueChar = (str) => {
//   let count = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     count[char] = (count[char] || 0) + 1;
//   }

//   for (let i = 0; i < str.length; i++) {
//     if (count[str[i]] === 1) {
//       return str[i];
//     }
//   }
//   return count;
// };

// console.log(firstUniqueChar("swiss")); // Output: "w"

// Find the Majority Element in an Array
// const majorityElement = (arr) => {
//   const count = {};
//   let maxNum = null;
//   let maxCount = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     count[num] = (count[num] || 0) + 1;

//     if (count[num] > maxCount) {
//       maxCount = count[num];
//       maxNum = num;
//     }
//   }

//   return maxNum;
// };

// console.log(">>>>", majorityElement([4, 2, 2, 3, 3, 3]));

// Generate Fibonacci Series Up to N (Without Recursion)
// const fibonacci = (n) => {
//   let fib = [];
//   let a = 0,
//     b = 1;

//   for (let i = 0; i < n; i++) {
//     fib.push(a);
//     let temp = a + b;
//     a = b;
//     b = temp;
//   }

//   return fib;
// };

// console.log(fibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]

// const flattenArray = (arr) => {
//   return arr.flat(3);
// };

// console.log(flattenArray([1, [2, [3, [4]], 5]]));
