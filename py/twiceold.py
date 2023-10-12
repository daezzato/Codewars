#The function takes in 2 integers as parameters: the first is the father's age, the second is the son's age
#The function must return the number of years ago that the father was twice the age of the son's current age
# 43, 13 - 17
# Double the son's age and then subtract the dad's age from the son's doubled age. If the son's doubled age is greater than or equal to the dad's age, subtract the son's doubled age with the dad's age

def twice_as_old(dad_years_old, son_years_old):
	if (son_years_old * 2) >= dad_years_old:
		return (son_years_old * 2) - dad_years_old
	elif dad_years_old > (son_years_old * 2):
		return dad_years_old - (son_years_old * 2)
	

print(twice_as_old(36, 11))
print(twice_as_old(29, 0))
print(twice_as_old(44, 20))
print(twice_as_old(57, 38))