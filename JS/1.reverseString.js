// ! ========================= 1 ================================================

// ?  Q.1 Write a function that takes a string as input and returns the string reversed.

function reverseString(str) {
  const splitstr = str.split("");

  const output = splitstr.reverse().join("");

  return output;
}
console.log(reverseString("abcdd"));
