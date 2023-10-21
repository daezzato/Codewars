#Function takes in an list of numbers
#The function must remove any duplicates in the list, keeping the rightmost appearances of the duplicates
#[3, 4, 5, 3, 5, 8] - [4, 3, 5, 8]
#create new empty list. Use a for loop and use the reversed keyword to start from the last index of the list. Then check if the number is not in the new list, then append the number into the list. Then return the new list using a slicing operator


def solve(arr):
	new_list = []
	for num in reversed(arr):
		if not num in new_list:
			new_list.append(num)
	return new_list[::-1]


print(solve([3, 4, 4, 3, 6, 3]))
print(solve([1,2,1,2,1,2,3]))
print(solve([1,1,4,5,1,2,1]))