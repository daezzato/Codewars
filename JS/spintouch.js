//The function takes an array of strings that are either 'left' or 'right'. Each directional word counts as a 90 degree rotation in that direction
//The function must return a positive number that refers to how many full 360 degree rotations were made
//['right', 'right', 'right', 'right'] = 1, ['left', 'right', 'left', 'right'] = 0
//Set a right and left counter to 0. Use a for loop to go through every element. For every element that is right, add 90 to the right counter. Do the same with the left counter. Check to see which is bigger, then subtract it from the smaller one and divide it by 360. Then use the Math.floor method to round down

function spinAround(turns) {
	let right = 0
	let left = 0
	for (let i = 0; i < turns.length; i++) {
		if (turns[i] === 'right') {
			right += 90
		} else {
				left += 90
		}
	}
	if (right > left) {
		let rotations = (right - left) / 360
		return Math.floor(rotations)
	} else if (left > right) {
		let rotations = (left - right) / 360
		return Math.floor(rotations)
	} else if (right === left) {
		let rotations = (right - left) / 360
		return Math.floor(rotations)
	}
}

console.log(spinAround(['left', 'right', 'left', 'right']))
console.log(spinAround(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']))
console.log(spinAround(['left', 'left', 'left', 'left']))
console.log(spinAround([]))
console.log(spinAround(['left']))