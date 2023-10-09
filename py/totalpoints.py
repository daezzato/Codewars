#Function contains a list of strings that display 2 team scores. X is home team and Y is away team. Format for each element in the array is x:y
#Wins are calculated when the home team's score is greater than away teams's score by adding 3. Draws are calculated when the home team and away team have the same score by adding 1. Losses are calculated when the home team's score is less than the away team's score by adding 0. The function must return the total number of points accumulated by the home team
#Example: ["1:0", "4:2", "2:2", "3:5"] = 10
#Create an variable starting at 0. Run a for loop and grab the home and away teams scores by using the split method to remove the colon from the string. For every win for the home team, add 3 to the variable. For every draw, add 1. For every loss, don't add anything.


def points(games):
	counter = 0
	for game in games:
		x, y = game.split(':')
		if x == y:
			counter += 1
		elif x > y:
			counter += 3
	return counter


print(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))
print(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]))
print(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]))
print(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]))