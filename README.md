# JavaScript Coding Challenges

This repository contains JavaScript code snippets for various coding challenges. Each challenge is accompanied by a description and solution. Feel free to use these functions or methods in your projects.

## Table of Contents

1. [Reverse a String](#reverse-a-string)
2. [Check Palindrome](#check-palindrome)
3. [Count Characters](#count-characters)
4. [Array Addition](#array-addition)
5. [Unique Characters](#unique-characters)
6. [Longest Word](#longest-word)
7. [Array Sum](#array-sum)

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
