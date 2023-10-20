
#There's an list of integers. Can be positive or negative
#Function must return a new list with each value doubled
#[1, 2, 3] - [2, 4, 6]
#Create an empty list. Use a for loop and append every new element multiplied by 2


def maps(a):
	new_list = []
	for i in range(len(a)):
		new_list.append(a[i]*2)
	return new_list



print(maps([1, 2, 3]))
print(maps([9, 22, 14, 57, 2, 0, -3]))
print(maps([11, 22, 33, 44, 55]))