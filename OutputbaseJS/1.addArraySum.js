// ? Q.4 Given the following JavaScript code:

const a = [1, 4, 8, 6];
const b = [2, 4, 6, 1, 3, 5];
// output will be this in new array  [3,8,14,7,3,5]

const value = Math.max(b.length, a.length);
console.log(value);

let array = [];
for (let i = 0; i < value; i++) {
  // if(a.length)
  let aValue = a[i] || 0;
  let bValue = b[i] || 0;
  let final = aValue + bValue;
  array.push(final);
  // console.log("hello", final, array);
  // return final;
}

console.log(array);
