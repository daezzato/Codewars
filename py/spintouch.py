#The function takes a list of strings that are either 'left' or 'right'. Each directional word counts as a 90 degree rotation in that direction
#The function must return a positive number that refers to how many full 360 degree rotations were made
#['right', 'right', 'right', 'right'] = 1, ['left', 'right', 'left', 'right'] = 0
#Set a right and left counter to 0. Use a for loop to go through every element. For every element that is right, add 90 to the right counter. Do the same with the left counter. Check to see which is bigger, then subtract it from the smaller one and divide it by 360. Then use the Math.floor method to round down

# def spin_around(lst):
# 	right = 0
# 	left = 0
# 	for dir in lst:
# 		if dir == 'right':
# 			right += 90
# 		elif dir == 'left':
# 			left += 90
# 	if right > left:
# 		rotations = (right - left) // 360
# 		return rotations
# 	elif left > right:
# 		rotations = (left - right) // 360
# 		return rotations
# 	elif right == left:
# 		rotations = (right - left) // 360
# 		return rotations
	
def spin_around(lst):
    return abs(lst.count("right") - lst.count("left")) // 4
	

print(spin_around(['left', 'right', 'left', 'right']))
print(spin_around(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']))
print(spin_around(['left', 'left', 'left', 'left']))
print(spin_around([]))
print(spin_around(['left']))