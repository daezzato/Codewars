//Function takes two string parameters that are numbers, but can also be empty strings. If they are empty, then they should be treated as 0
//Function must return the total of the two parameters in a string form
//"4", "2" - 6       "9", "" - 9
//Use the Number method to turn the strings into numbers. Get the sum. Then use the String method to turn that into a string



function sumStr(a, b) {
	return String(Number(a) + Number(b))
}

console.log(sumStr('3', '5'))
console.log(sumStr('62', '21'))
console.log(sumStr('3', ''))
console.log(sumStr('', ''))