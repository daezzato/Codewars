#The function takes a string as the first parameter and a letter as the second parameter
#The function must return the index of the second occurrence of that letter in the string. If there is no letter in the string or it only occurs once, return -1
#'Hello', 'l' - 3, 'apple', 'o' - -1
#Create a counter variable and an empty list. Run a for loop on the string and use enumerate to get the index. Check to see if the current iterating variable is equal to the symbol. IF it is, add 1 to the counter and push the index of that current iterating variable to the empty list. Then check to see if the count is greater than 1. If it is, return the 1 index of the indices list. If it isn't greater than 1, then return -1.


def second_symbol(s, symbol):
	count = 0
	indices = []
	for i, letter in enumerate(s):
		if letter == symbol:
			count += 1
			indices.append(i)

	if count > 1:
		return indices[1]
	else:
		return -1
	
# def second_symbol(s, c):
#     return s.find(c, s.find(c)+1)

print(second_symbol('hello', 'l'))
print(second_symbol('basketball', 'g'))
print(second_symbol('blue stars', 's'))
print(second_symbol('', 'r'))