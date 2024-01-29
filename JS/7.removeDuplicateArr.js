// ! ===================== 8 =================================

//  ? Q.7 Write a function that removes duplicate elements from an array

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
