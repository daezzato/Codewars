#The function has an integer which serves as the length of the list, a first value, and a second value
#The function must return a list with the length of 'n', the first parameter, filled with the first and second values alternating in the list
#(5, true, false) - [true, false, true, false, true]
#Create an empty list. Run a for loop and run it up to 'n' times. Then check to see with the modulo operator if the index modulo 2 is equal to 0. If it is, push the first value into the empty list. If it isn't equal to 0, push the second value into the empty list

def alternate(n, first_value, second_value):
	new_list = []
	for i in range(n):
		if i % 2 == 0:
			new_list.append(first_value)
		else:
			new_list.append(second_value)

	return new_list

print(alternate(5, True, False))
print(alternate(9, 'blue', 'green'))
print(alternate(0, 'stork', 'dog'))
print(alternate(15, 23, 45))
