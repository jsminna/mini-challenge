/* This function accepts a string containing multiple words as input
   You're expected to find and return the length of the longest word in the string */
const findLongestWordLength = str => {
  let words = str.split(" ");
  let longestWord = " ";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

console.log(findLongestWordLength("Javascript is a fun language"));
console.log(findLongestWordLength("solving problem is a good way to learn"));

// Return an array consisting of the largest number from each provided sub-array
const findLargestOfArrays = arrays => {
   if (Array.isArray(arrays)) {
    return arrays.map(subArr => Math.max(...subArr));
  } else {
    return [];
  }
};

console.log(findLargestOfArrays([[1, 2], [2, 3], [3, 4]]));
console.log(findLargestOfArrays([[1, 2, 3, 4], [5, 18, 0, 12], [3, 5, 12, 5], [28, 9, 2, 34]]));
