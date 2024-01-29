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
function countCharacters(str) {
  const characters = str.split("");
  let output = {};

  for (let i = 0; i < characters.length; i++) {
    const char = characters[i];
    output[char] = (output[char] || 0) + 1;
  }

  return output;
}

const result = countCharacters("hello");
console.log(result);
