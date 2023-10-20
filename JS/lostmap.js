//There's an array of integers. Can be positive or negative
//Function must return a new array with each value doubled
//[1, 2, 3] - [2, 4, 6]
//Use the map method and multiply every element by 2

// function maps(x) {
// 	let newArr = []
// 	for (let i = 0; i < x.length; i++) {
// 		newArr.push(x[i] * 2)
// 	}
// 	return newArr
// }

const maps = array => array.map(num => num * 2)


console.log(maps([1, 2, 3]))
console.log(maps([9, 22, 14, 57, 2, 0, -3]))
console.log(maps([11, 22, 33, 44, 55]))
