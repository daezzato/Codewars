// 1 integer that can be even or odd
// The function must return a string "Even" for even numbers and "Odd" for odd numbers
// 2, 3, 0
//One way to determine if a number is even or odd is by dividing a number by 2. If the number doesn't
//return any remainders, then the number is even. If there is a remainder, then the number is odd.
//To optimize, I can try to use a ternary operator, using the modulo and seeing if the number is divisible by 2, which will determine if its even or odd

//function evenOrOdd(number) {
//  if (number % 2 === 0) {
//    return 'Even'
//  } else {
//    return 'Odd'
//  }
//}


const evenOrOdd = number => number % 2 === 0 ? 'Even' : 'Odd'

console.log(evenOrOdd(5))
console.log(evenOrOdd(-32))
console.log(evenOrOdd(11))

