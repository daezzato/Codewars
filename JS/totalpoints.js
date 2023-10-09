//Function contains an array of strings that display 2 team scores. X is home team and Y is away team. Format for each element in the array is x:y
//Wins are calculated when the home team's score is greater than away teams's score by adding 3. Draws are calculated when the home team and away team have the same score by adding 1. Losses are calculated when the home team's score is less than the away team's score by adding 0. The function must return the total number of points accumulated by the home team
//Example: ["1:0", "4:2", "2:2", "3:5"] = 10
//Create an variable starting at 0. Run a for loop and grab the home teams score with the 0 index for each element and check the away team's score by grabbing the 2nd index and seeing which team won or if there was a draw. For every win, add 3 to the variable. For every draw, add 1. For every loss, don't add anything.


function points(games) {
	let total = 0
	for (let i = 0; i < games.length; i++) {
		if (games[i][0] === games[i][2]) {
			total += 1
		} else if (games[i][0] > games[i][2]) {
			total += 3
		}
	}
	return total
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]))
console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]))
console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]))