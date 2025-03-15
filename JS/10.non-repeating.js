// ! ===================== 9 =================================

//  ? Q.10 Find the First Non-Repeating Character

const firstUniqueChar = (str) => {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    count[char] = (count[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      return str[i];
    }
  }
  return count;
};

console.log(firstUniqueChar("swiss")); // Output: "w"
