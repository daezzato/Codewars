//The function takes a string as the first parameter and a letter as the second parameter
//The function must return the index of the second occurrence of that letter in the string. If there is no letter in the string or it only occurs once, return -1
//'Hello', 'l' - 3, 'apple', 'o' - -1
//Create a counter variable and an empty array. Run a for loop on the string. Check to see if the current iterating variable is equal to the symbol. IF it is, add 1 to the counter and push the index of that current iterating variable to the empty array. Then check to see if the count is greater than 1. If it is, return the 1 index of the indices array. If it isn't greater than 1, then return -1.

function secondSymbol(s, symbol) {
	
	let count = 0
	let indices = []
	for (let i = 0; i < s.length; i++) {
		if (s[i] === symbol) {
			count+= 1
			indices.push(i)
		}
	}
	if (count > 1) {
		return indices[1]
	} else {
			return -1
	}
}

console.log(secondSymbol('helllllo', 'l'))
console.log(secondSymbol('basketball', 'g'))
console.log(secondSymbol('blue stars', 's'))
console.log(secondSymbol('', 'r'))