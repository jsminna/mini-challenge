/* This function accepts a string containing multiple words as input
   You're expected to find and return the length of the longest word in the string */
   const findLongestWordLength = (str) => {
    if (typeof str == 'string') {
      const longestWord = str.split(" ").reduce((acc, word) => {
        if (acc.length < word.length) {
          return word
        } else {
          return acc
        }
      }, "")
      return longestWord
    } else {
      return ''
    }
  }
  
  // Return an array consisting of the largest number from each provided sub-array
  const findLargestOfArrays = (arrays) => {
    if (Array.isArray(arrays)) {
      return arrays.map(subArr => Math.max(...subArr));
    } else {
      return []
    }
  }