// There will be an array of various types (strings, booleans, numbers)
// The function must move all of the zeros to the end while maintaining the order of the other elements
// [2, 5, true, 0, 33, 'hello', 'book', 0, 22] - [2, 5, true, 33, 'hello', 'book', 22, 0, 0]
// Create two separate arrays - 1 to store the zeros and the other to store the other elements. Loop through the array and check to see if the iterating variable is equal to 0. If it is, push it to the zeros array. If it isn't, push it to the non zeros array. Then use the concat method to put the arrays together

function moveZeros(arr) {
  let nonZeros = []
  let zeros = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(arr[i])
    } else {
      nonZeros.push(arr[i])
    }
  }
  return nonZeros.concat(zeros)
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
console.log(moveZeros(['cloud',0,true,1,0,'store',0]))
console.log(moveZeros([false,-4,0,1,0,'bike',0,1]))