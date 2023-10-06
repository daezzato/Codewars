// There will be two parameters, which will both be 2 separate arrays. Each array can have positive or negative numbers with any amount of elements in both arrays
// The function must return the sum of all of the elements in both arrays
// [1, 2, 3] [4, 5, 6] - 21
// Create a separate function and use the reduce method to calculate the sum of all the elements in an array. Then use that function to calculate the arguments passed into the original function



let sumArray = arr => arr.reduce((acc, curr) => acc + curr, 0)
let arrayPlusArray = (arr1, arr2) => sumArray(arr1) + sumArray(arr2)



console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
console.log(arrayPlusArray([23, 142, 0, 64, -34], [99, 5334, 2343, 2, 9, 11]))
console.log(arrayPlusArray([-1, -55, -15], [-84, -25, -111, -2, -9]))