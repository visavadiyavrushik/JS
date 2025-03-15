// ! ========================= 1 ================================================

// ?  Q.1 Write a function that takes a string as input and returns the string reversed.

function reverseString(str) {
  const splitstr = str.split("");

  const output = splitstr.reverse().join("");

  return output;
}
console.log(reverseString("abcdd"));

// reverse string without use reverse
function reverseString(str) {
  // ? 1
  // let reversed = "";
  // for (let char of str) {
  //   reversed = char + reversed;
  // }
  // return reversed;

  // ? 2
  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}

console.log(reverseString("hello"));
