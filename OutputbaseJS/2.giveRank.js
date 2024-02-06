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
