function getEvenNumbers(arr) {
  const evens = [];

  for (let n of arr) {
    if (n % 2 === 0) {
      evens.push(n);
    }
  }

  return evens;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
