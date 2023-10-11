#The function contains 1 parameter that is an integer, representing the numerical month in a given calendar year
#The function must return an integer 1-4 denoting which quarter the specific month falls on
#11 (November) - 4 (4th quarter of the year)
#Check to see if the month is between 1-3 inclusive and return 1, check between 4-6 inclusive and return 2, check between 7-9 and return 3, check between 10-12 and return 4

def quarter_of(month):
	if month <= 3:
		return 1
	elif month > 3 and month <= 6:
		return 2
	elif month > 6 and month <= 9:
		return 3
	elif month > 9 and month <= 12:
		return 4
	

print(quarter_of(4))
print(quarter_of(9))
print(quarter_of(1))
print(quarter_of(12))