#The function's parameters is a list of strings that may or may not include a specific 'toggle' word which is 'flick'
#The function must return True for each string in the list as a default. But if the string is 'flick', then the default boolean for 'flick' and every subsequent word after it is False until there is another instance of 'flick'.
#['dog', 'cat', 'bird', 'flick', 'snow', 'flick'] - [True, True, True, False, False, True]
#Create an empty list and set a default variable to True. Then run a for loop on the array. If the iterating variable is equal to 'flick', set the default boolean to the opposite of the current default. Push that boolean into the new list. Then check if the iterating variable is just a regular string, then just push that boolean into the list.

def flick_switch(lst):
	new_lst = []
	toggle = True
	for word in lst:
		if word == 'flick':
			toggle = not(toggle)
		new_lst.append(toggle)

	return new_lst

print(flick_switch(["flick", "flick", "flick", "flick", "flick"]))
print(flick_switch(["bird"]))
print(flick_switch(["flick", "mountain", "tiger", "flick", "dog"]))
print(flick_switch(["plane", "jar", "bed", "flick", "boat"]))
print(flick_switch(["flick"]))