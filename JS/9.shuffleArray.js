// ! ========================= 9 ================================================

// ?  Q.9 How can you shuffle an array in JavaScript?

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

console.log(
  shuffleArray([
    [3, 4],
    [6, 7],
    [2, 3],
  ])
);
