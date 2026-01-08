// Problem 4: Find the Maximum Number
function findMax(numbers) {
  const sorted = numbers.sort((a, b) => b - a);
  return sorted[0];
}

console.log(findMax([5, 1, 9, 3]));
