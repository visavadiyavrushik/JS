// ! =========================== 2 ===============================================

// ?  Q.2 Create a function that checks if a given word or phrase is a palindrome (string is same from start and end).

function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanStr === cleanStr.split("").reverse().join("");
}
const word = "radar";
console.log("isPalindrome(phrase);: ", isPalindrome(word));
