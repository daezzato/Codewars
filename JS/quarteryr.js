//The function contains 1 parameter that is an integer, representing the numerical month in a given calendar year
//The function must return an integer 1-4 denoting which quarter the specific month falls on
//11 (November) - 4 (4th quarter of the year)
//Check to see if the month is between 1-3 inclusive and return 1, check between 4-6 inclusive and return 2, check between 7-9 and return 3, check between 10-12 and return 4


const quarterOf = (month) => {
	if (month <= 3) {
		return 1
	} else if (month > 3 && month <= 6) {
			return 2
	} else if (month > 6 && month <= 9) {
			return 3
	} else if (month > 9 && month <= 12) {
			return 4
	}
}

console.log(quarterOf(5))
console.log(quarterOf(2))
console.log(quarterOf(7))
console.log(quarterOf(10))