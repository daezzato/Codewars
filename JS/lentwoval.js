//The function has an integer which serves as the length of the array, a first value, and a second value
//The function must return an array with the length of 'n', the first parameter, filled with the first and second values alternating in the array
//(5, true, false) - [true, false, true, false, true]
//Create an empty array. Run a for loop and run it up to 'n' times. Then check to see with the modulo operator if the index modulo 2 is equal to 0. If it is, push the first value into the empty array. If it isn't equal to 0, push the second value into the empty array

function alternate(n, firstValue, secondValue) {
	let newArr = []
	for (let i = 0; i < n; i++) {
		if (i % 2 === 0) {
			newArr.push(firstValue)
		} else {
				newArr.push(secondValue)
		}
	}
	return newArr
}

console.log(alternate(5, true, false))
console.log(alternate(9, 'blue', 'green'))
console.log(alternate(0, 'stork', 'dog'))
console.log(alternate(15, 23, 45))