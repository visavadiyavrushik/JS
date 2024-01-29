// !  =================== 7 ==============================

// ? Q.6 Write a function that calculates the sum of all elements in an array.

function arraysum(val) {
  let sum = 0;
  if (val.length) {
    for (let i = 0; i < val.length; i++) {
      if (typeof val[i] !== "string") {
        sum += val[i];
      }
    }
  }
  return sum;
}
const arr = arraysum([5, 155, "12"]);
console.log("arr: ", arr);
