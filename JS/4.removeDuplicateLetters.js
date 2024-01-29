// ? Q.4 take one string and in the output letter in not repet 2nd time.

// DSA

const str = "hello javacript";

let arr = [];

for (let i = 0; i < str.length; i++) {
  arr.push(str.charAt(i));
}

let f = {};

for (let i = 0; i < arr.length; i++) {
  if (f[arr[i]] !== null && f[arr[i]] !== undefined) {
    f[arr[i]] = f[arr[i]] + 1;
  } else {
    f[arr[i]] = 1;
  }
}
console.log(Object.keys(f).join(""));

// 1
function removeDuplicateLetters(inputString) {
  // Convert the input string to an array of characters
  const characters = inputString.split("");

  // Create a Set to keep track of unique letters
  const uniqueLetters = new Set();

  // Filter out duplicate letters and build the result string
  const resultString = characters
    .filter((char) => {
      if (!uniqueLetters.has(char)) {
        uniqueLetters.add(char);
        return true;
      }
      return false;
    })
    .join("");

  return resultString;
}

// 2
function removeDuplicateLetters2(str) {
  const f = {};
  for (const char of str) {
    if (char !== " ") {
      f[char] = (f[char] || 0) + 1;
    }
  }

  console.log(Object.keys(f).join(""));
}

// Example usage:
const inputString = "hello world";
const outputString = removeDuplicateLetters(inputString);
const outputString2 = removeDuplicateLetters2(inputString);
console.log(outputString, outputString2);
