// Problem 1: Reverse a String

function reverseString(str) {
  const strArray = str.split(""); 
  strArray.reverse();
  const reversedStr = strArray.join("");
  return reversedStr
}

console.log(reverseString('hello'))