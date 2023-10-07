#The function contains 2 parameters, first is an list of numbers, second is a multiplier that will be applied to each element in the list
#The function must return a new list of numbers, each having been multiplied by the multiplier
#[1, 2, 3] 4, - [4, 8, 12]
#Create a new list. Run a for loop, append the iterating variable multiplying the multiplier.


def mul_by_n(lst, n):
	new_list = []
	for x in lst:
		new_list.append(x * n)
	return new_list

print(mul_by_n([1, 2, 3], 4))
print(mul_by_n([10, 3, 45], 0))
print(mul_by_n([2, 2, 2, 2], 1))
print(mul_by_n([], 4))
	
