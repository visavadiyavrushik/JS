const fibonacci = (n) => {
  let fib = [];
  let a = 0,
    b = 1;

  for (let i = 0; i < n; i++) {
    fib.push(a);
    let temp = a + b;
    a = b;
    b = temp;
  }

  return fib;
};

console.log(fibonacci(7));
