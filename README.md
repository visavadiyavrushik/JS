# JavaScript Coding Challenges

This repository contains JavaScript code snippets for various coding challenges. Each challenge is accompanied by a description and solution. Feel free to use these functions or methods in your projects.

## Table of Contents

1. [Reverse a String](#1-reverse-a-string)
2. [Check Palindrome](#2-check-palindrome)
3. [Count Characters](#3-count-characters)
4. [Array Addition](#4-array-addition)
5. [Unique Characters](#5-unique-characters)
6. [Longest Word](#6-longest-word)
7. [Array Sum](#7-sum-of-array-elements)
8. [Remove Duplicates](#8remove-du9licates)
9. [Remove null values and their keys](#9function-to-remove-null-values-and-their-keys)

---

## 1. Reverse a String

### Description

Write a function that takes a string as input and returns the string reversed.

### Solution

```javascript
function reverseString(str) {
  const splitstr = str.split("").reverse();
  const output = splitstr.reverse().join("");
  return output;
}

console.log(reverseString("abcd"));
```

---

## 2. Check Palindrome

### Description

Create a function that checks if a given word or phrase is a palindrome (string is the same from start and end).

### Solution

```javascript
function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanStr === cleanStr.split("").reverse().join("");
}

const word = "radar";
console.log("Is Palindrome:", isPalindrome(word));
```

---

## 3. Count Characters

### Description

Given a string, count the occurrences of each character and output the result.

### Solution (Type 1)

```javascript
const str = "hello";
const object = {};

for (let i = 0; i < str.length; i++) {
  if (object[str[i]] !== null && object[str[i]] !== undefined) {
    object[str[i]] = object[str[i]] + 1;
  } else {
    object[str[i]] = 1;
  }
}

console.log(object);
```

### Solution (Type 2)

```javascript
const str = "hello JS";
const characters = str.split("");
let output = {};

for (let i = 0; i < characters.length; i++) {
  const char = characters[i];
  output[char] = (output[char] || 0) + 1;
}

console.log(output);
```

---

## 4. Array Addition

### Description

Given two arrays, add the corresponding elements and create a new array with the results.

### Solution

```javascript
const a = [1, 4, 8, 6];
const b = [2, 4, 6, 1, 3, 5];

const value = Math.max(b.length, a.length);
let array = [];

for (let i = 0; i < value; i++) {
  let aValue = a[i] || 0;
  let bValue = b[i] || 0;
  let final = aValue + bValue;
  array.push(final);
}

console.log(array);
```

---

## 5. Unique Characters

### Description

Given a string, output the characters that do not repeat.

### Solution 1

```javascript
const str = "hello javacript";
let arr = [];
for (let i = 0; i < str.length; i++) {
  arr.push(str.charAt(i));
}

let object = {};
for (let i = 0; i < arr.length; i++) {
  if (object[arr[i]] !== null && object[arr[i]] !== undefined) {
    object[arr[i]] = object[arr[i]] + 1;
  } else {
    object[arr[i]] = 1;
  }
}

console.log(Object.keys(object).join(""));
```

### Solution 2

```javascript
const str = "hello javacript";
const f = {};

for (const char of str) {
  if (char !== " ") {
    f[char] = (f[char] || 0) + 1;
  }
}

console.log(Object.keys(f));
```

---

## 6. Longest Word

### Description

Write a function that takes a sentence as a parameter and returns the longest word in it.

### Solution

```javascript
const paragraph =
  "In the midst of winter, I found there was, within me, an invincible summer.";

function findLongestWord(paragraph) {
  const words = paragraph.split(/\s+/);
  let longestWord = "";

  for (const word of words) {
    const cleanedWord = word.replace(/[^\w]/g, "");
    if (cleanedWord.length > longestWord.length) {
      longestWord = cleanedWord;
    }
  }

  return longestWord;
}

const longestWord = findLongestWord(paragraph);
console.log("Longest word:", longestWord);
```

---

## 7. Sum of Array Elements

### Description

Write a function that calculates the sum of all elements in an array.

### Solution

```javascript
function arraySum(arr) {
  let sum = 0;
  if (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "string") {
        sum += arr[i];
      }
    }
  }
  return sum;
}

const arrSum = arraySum([5, 155, "12"]);
console.log("Array Sum:", arrSum);
```

---

## 8.Remove Duplicates

### Description

Write a function that removes duplicate elements from an array.

### Solution

```javascript
function removeDuplicate(r) {
  let newarr = [];
  for (let i = 0; i < r.length; i++) {
    if (!newarr.includes(r[i])) {
      newarr.push(r[i]);
    }
  }
  return newarr;
}

const arr = [10, 12, 15, 12, 10, 56];
const removeDuplicateValue = removeDuplicate(arr);
console.log("removeDuplicateValue: ", removeDuplicateValue);
```

---

## 9.Function to Remove null values and their keys

### Description

Write a Function to remove null values and their keys

### Solution

```javascript
const obj = {
  name: "John",
  age: 30,
  job: "developer",
  mobileNo: null,
};

// Function to remove null values and their keys
const removeNullValues = (inputObject) => {
  const result = {};

  for (const key in inputObject) {
    if (inputObject[key] !== null) {
      result[key] = inputObject[key];
    }
  }

  return result;
};

// Call the function with the given object
const newObj = removeNullValues(obj);

console.log(newObj);
```
