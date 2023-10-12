
//The function takes in 2 integers as parameters: the first is the father's age, the second is the son's age
//The function must return the number of years ago that the father was twice the age of the son's current age
// 43, 13 - 17
// Double the son's age and then subtract the dad's age from the son's doubled age. If the son's doubled age is greater than or equal to the dad's age, subtract the son's doubled age with the dad's age

function twiceAsOld(dadYearsOld, sonYearsOld) {

	if (sonYearsOld * 2 >= dadYearsOld) {
		return (sonYearsOld * 2) - dadYearsOld
	} else {
			return dadYearsOld - (sonYearsOld * 2)
	}
}

// function twiceAsOld2(dadYearsOld, sonYearsOld) {
// 	return Math.abs(dadYearsOld - (sonYearsOld * 2))
// }

console.log(twiceAsOld(43, 13))
console.log(twiceAsOld(55, 17))
console.log(twiceAsOld(32, 9))
console.log(twiceAsOld(75, 32))
console.log(twiceAsOld(36, 7))
console.log(twiceAsOld(55, 30))