// Problem 6: Sum of All Numbers in an Array
function sumArray(numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}

console.log(sumArray([1, 2, 3, 4]));
