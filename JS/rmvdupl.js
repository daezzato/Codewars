//Function takes in an array of numbers
//The function must remove any duplicates in the array, keeping the rightmost appearances of the duplicates
//[3, 4, 5, 3, 5, 8] - [4, 3, 5, 8]
//create new empty array. For every iteration, put the number in the new array. Start from the end and work backwards. Then check to see if the new array does not include (includes method) that number alreaedy. If it doesn't, then add it to the array


function solve(arr) {
	let newArr = []
	for (let i = arr.length-1; i >= 0; i--) {
		if (!newArr.includes(arr[i])) {
			newArr.push(arr[i])
		}
	}
	return newArr.reverse()
}

console.log(solve([3, 4, 4, 3, 6, 3]))
console.log(solve([1,2,1,2,1,2,3]))
console.log(solve([1,1,4,5,1,2,1]))