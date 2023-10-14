//Function has an array of integers
//Function must return the first element of the array that is not consecutive
//[1, 2, 3, 5] - 5
//Run a for loop starting with 1 as the index. Then we will check to see if the value of the previous index plus 1 is not equal to the current index. If it isn't equal, then we return the value of the current index. Otherwise we return null as default



function firstNonConsecutive (arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + 1 !== arr[i]) {
      return arr[i]
      
    }
  } return null
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7]))
console.log(firstNonConsecutive([22, 23, 26, 27, 28]))
console.log(firstNonConsecutive([10, 14, 15, 16, 17, 18]))