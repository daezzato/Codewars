#Function has two parameters: exam and projects. Both are positive integers
#Function must return a final grade based on the students' exam scores and/or the number of completed projects
#91, 2 - 100
#Check if exam is greater than 90 or projects completed is greater than 10, then return 100. Check if exam is greater than 75 AND projects completed are at least 5, return 90. Check if exam is greater than 50 AND projects completed are at least 2, return 75. Everything else return 0


def final_grade(exam, projects):
	if exam > 90 or projects > 10:
		return 100
	elif exam > 75 and projects >= 5:
		return 90
	elif exam > 50 and projects >= 2:
		return 75
	else:
		return 0
	

print(final_grade(45, 3))
print(final_grade(64, 2))
print(final_grade(83, 6))
print(final_grade(22, 15))