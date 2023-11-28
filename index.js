// import "./styles.css";

// !  ============ 1 =================

// ?  Q.1 Given the following JavaScript code: (method 1)
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

// =================== 2 =============================

// const b = [1, 4, 8, 6];
// const a = [2, 4, 6, 1, 3, 5];
// output will be this in new array  [3,8,14,7,3,5]

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

//  =================== 3 =====================

// const str = "asjkldfjalksdjf";
// // output:- m = 1 , s= 2 i=3

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
// console.log(Object.keys(f));

//  =============== 4 ============

// const str = "kjaskfjkasjdfkjalk";
// const charCount = {};

// for (const char of str) {
//   if (charCount[char]) {
//     charCount[char]++;
//   } else {
//     charCount[char] = 1;
//   }
// }

// let output = "";
// for (const char in charCount) {
//   output += `${char}: ${charCount[char]}, `;
// }

// console.log(output);

// ===================== 5 ===========

// function calculateCharacterFrequency(str) {
//   const sanitizedStr = str.toLowerCase().replace(/\s/g, "");

//   const frequencyMap = new Map();

//   for (const char of sanitizedStr) {
//     console.log(char);
//     if (frequencyMap.has(char)) {
//       frequencyMap.set(char, frequencyMap.get(char) + 1);
//     } else {
//       frequencyMap.set(char, 1);
//     }
//   }

//   let result = "";
//   for (const [char, frequency] of frequencyMap) {
//     result += `${char}: ${frequency}, `;
//   }

//   return result;
// }

// // Example usage
// const str = "Hello";
// const frequencyOutput = calculateCharacterFrequency(str);
// console.log(frequencyOutput);

// ! ========================= 6 ================================================

// ?  Q.6 Write a function that takes a string as input and returns the string reversed.

// function reverseString(str) {
//   const splitstr = str.split("").reverse();

//   const output = splitstr.reverse().join("");

//   return output;
// }
// console.log(reverseString("abcd"));

// ! =========================== 7 ===============================================

// ?  Q.7 Create a function that checks if a given word or phrase is a palindrome (string is same from start and end).

// function isPalindrome(str) {
//   const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   //   console.log("cleanStr: ", cleanStr);
//   return cleanStr === cleanStr.split("").reverse().join("");
// }
// const word = "radar";
// console.log("isPalindrome(phrase);: ", isPalindrome(word));
