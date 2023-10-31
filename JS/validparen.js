//Function takes in a string of parentheses.
//Function must return a boolean by determining if the sequence of parentheses is valid or not
//)( - false, (()) - true
//Create a counter variable with the value of 0. Loop through the string of parentheses. If the current iterating variable is (, then add 1 to the counter. If the iterating variable is ), the subtract 1 from the counter. Then outside the loop, check to see if the counter is less than 0. If it is then return false. Then check to see if the counter is equal to 0, which would then return true.



function validParentheses(parentStr) {
	let counter = 0
	for (let i = 0; i < parentStr.length; i++) {
		if (parentStr[i] === '(') {
			counter++
		} else if (parentStr[i] === ')') {
				counter--
		}
		if (counter < 0) {
			return false
		}
	}
	return counter === 0
}


console.log(validParentheses(')('))
console.log(validParentheses('((()))'))
console.log(validParentheses('()()()'))
console.log(validParentheses('()(())((()))(())()'))