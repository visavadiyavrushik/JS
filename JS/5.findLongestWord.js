// !  =================== 6 ==============================

// ? Q.5 Write a function that takes a sentence as a parameter and returns the longest word in it.
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

// ? Function
const paragraph =
  "In the midst of winter, I found there was,widddthin me, an invincible summer.";

function findLongestWord(paragraph) {
  const words = paragraph.split(/\s+/);
  let longestWord = "";

  for (const word of words) {
    const cleanedWord = word.replace(/[^\w]/g, ""); // Remove non-alphanumeric characters
    if (cleanedWord.length > longestWord.length) {
      longestWord = cleanedWord;
    }
  }

  return longestWord;
}

const longestWord = findLongestWord(paragraph);
console.log("Longest word:", longestWord);
