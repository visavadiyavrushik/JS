# JavaScript Coding Challenges

This repository contains JavaScript code snippets for various coding challenges. Each challenge is accompanied by a description and solution. Feel free to use these functions or methods in your projects.

## Table of Contents

1. [Sum of Matrix](#1-sum-of-matrix)

---

## 1. Sum of Matrix

### Solution

```javascript
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
```

---

## 2. Give rank by subject marks

### Solution

```javascript
const List = [
  {
    subject: "Maths",
    marks: "95",
  },
  {
    subject: "Chemistry",
    marks: "86",
  },
  {
    subject: "Physics",
    marks: "95",
  },
  {
    subject: "Sansskrit",
    marks: "80",
  },
  {
    subject: "Envirnment",
    marks: "80",
  },
];

const giveRank = (arr) => {
  // Sort the array by marks in descending order
  const sortedArr = arr.sort((a, b) => b.marks - a.marks);
  let rank = 1;

  sortedArr.forEach((sub, i) => {
    if (i > 0 && sub.marks === sortedArr[i - 1].marks) {
      sub.rank = sortedArr[i - 1].rank;
    } else {
      sub.rank = rank;
      rank++;
    }
  });

  return sortedArr;
};

console.log(giveRank(List));
```

---
