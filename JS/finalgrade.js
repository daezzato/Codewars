//Function has two parameters: exam and projects. Both are positive integers
//Function must return a final grade based on the students' exam scores and/or the number of completed projects
//91, 2 - 100
//Check if exam is greater than 90 or projects completed is greater than 10, then return 100. Check if exam is greater than 75 AND projects completed are at least 5, return 90. Check if exam is greater than 50 AND projects completed are at least 2, return 75. Everything else return 0


function finalGrade(exam, projects) {
	if (exam > 90 || projects > 10) {
		return 100
	} else if (exam > 75 && projects >= 5) {
			return 90
	} else if (exam > 50 && projects >= 2) {
			return 75
	} else {
		return 0
	}
}

console.log(finalGrade(45, 3))
console.log(finalGrade(64, 2))
console.log(finalGrade(83, 6))
console.log(finalGrade(22, 15))
	
	