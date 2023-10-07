#The function's parameters are two single letter strings. The parameter can also be a symbol but not a letter
#The function must return a 1 if both parameters are the same case, must return a 0 if both are letters but not the same case, must return a -1 if one of the parameters is not a letter
#('a', 'b') - 1, (P, Q) - 1, (L, m) - 0,  (*, 1) - -1
#Check the symbol by using the method .isalpha and the keyword not. Check the others using the methods isupper() and islower()


def same_case(a, b):
	if not a.isalpha() or not b.isalpha():
		return -1
	elif a.isupper() and b.isupper() or a.islower() and b.islower():
		return 1
	elif a.isupper() and b.islower() or a.islower() and b.isupper():
		return 0
	
print(same_case('a', 'b'))
print(same_case('D', 'G'))
print(same_case('B', 'b'))
print(same_case('a', '?'))