#Function takes two string parameters that are integers, but can also be empty strings. If they are empty, then they should be treated as 0
#Function must return the total of the two parameters in a string form
#4", "2" - 6       "9", "" - 9
#Check to see if both are digits, check to see if a is a digit, check to see if b is a digit, check to see if both are not digits, then use the integer method to turn the strings into integers. Then add them together and use the string method to turn the result into a string




def sum_str(a, b):
	if a.isdigit() and b.isdigit():
		return str(int(a) + int(b))
	elif a.isdigit() and not b.isdigit():
		b = 0
		return str(int(a) + int(b))
	elif not a.isdigit() and b.isdigit():
		a = 0
		return str(int(a) + int(b))
	elif not a.isdigit() and not b.isdigit():
		a = 0
		b = 0
		return str(int(a) + int(b))

print(sum_str('5', '4'))
print(sum_str('16', '23'))
print(sum_str('54', ''))
print(sum_str('', ''))