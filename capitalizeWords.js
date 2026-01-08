function capitalizeWords(sentence) {
  const words = sentence.split(" ");
  const updated = [];

  for (let w of words) {
    const first = w.charAt(0).toUpperCase();
    const rest = w.slice(1);
    updated.push(first + rest);
  }

  return updated.join(" ");
}

console.log(capitalizeWords("hello world"));
