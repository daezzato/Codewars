#There will be one parameter which will be an integer representing the US dollar amount
#The function must return the conversion of the US Dollar to the Chinese Yuan by multiplying with the conversion rate of 6.75. The output should also be represented as a string with 2 decimal places and the text Chinese Yuan
# 15 - '101.25 Chinese Yuan'
#Create a conversion variable that multiplies the parameter with 6.75. Then use the str.format() to have the output limited up to 2 decimal places


def usdcny(usd):
	conv = usd * 6.75
	return '{:.2f} Chinese Yuan'.format(conv)


print(usdcny(23))
print(usdcny(122))
print(usdcny(63))