
#Function has an array of integers
#Function must return the first element of the array that is not consecutive
#[1, 2, 3, 5] - 5
#Assign i to the first index of the array. Run a for loop and check to see if the iterating variable is equal to i. If it is not, return the iterating variable and then add 1 to i. 


def first_non_consecutive(arr):
    i = arr[0]
    for x in arr:
        if x != i:
            return x
        i += 1
    return None

print(first_non_consecutive([1, 2, 3, 4, 6, 7]))
print(first_non_consecutive([22, 23, 26, 27, 28]))