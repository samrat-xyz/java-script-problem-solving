function removeDuplicates(arr) {
  const removed = new Set(arr);
  return [...removed];   // Set → Array
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
