#Function takes two parameters: bullets and dragons which are both positive integers
#Function must return a boolean. It takes 2 bullets to defeat a dragon so if there are enough bullets to take down the total number of dragons, return true. Else, return false
#5, 2 - true, 10, 8 - false
#Use an if statement to check if bullets is greater than or equal to dragons multiplied by 2. If it is, return true, if not return false

def hero(bullets, dragons):
    if bullets >= (dragons * 2):
        return True
    else:
        return False
    
print(hero(10, 5))
print(hero(7, 4))
print(hero(100, 40))