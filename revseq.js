// There will be one integer greater than 0 as the parameter
// The function must return an array of integers from n to 1
// (3) - [3, 2, 1]
// Create an empty array. Run a for loop and have the iterating variable greater than 0 and decrementing after every loop


function reverseSeq (number) {
  let numArray = []
  for (let i = number; i > 0; i--) {
    numArray.push(i)
  }return numArray
}


console.log(reverseSeq(5))
console.log(reverseSeq(15))
console.log(reverseSeq(47))
console.log(reverseSeq(1))
