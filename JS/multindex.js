// There will be an array of positive and/or negative integers
// The function must return the numbers that are multiples of their indices of the original array in a new array
// [3, 10, 4, 7, 8]  - [10, 4, 8]
// Use an arrow function and filter through the array, grabbing both the iterating variable and its index. Use the modulo operator to determine if the item is divisible by its index in the array.


let multipleOfIndex = array => array.filter((item, index) => item % index === 0)


console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))
console.log(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]))
console.log(multipleOfIndex([4, -4]))

