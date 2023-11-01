#Function takes a string that could be a sentence of any letter or any character
#The function must return the same string but with a duplication of every consonant with an added 'o'. Vowels are not affected
#'hello' - 'hohelollolo
#Create an array of all consonants, both upper and lowercase. Then split the sentence into an array and create an empty array. In a for loop, check to see if the iterating variable is included in the list of consonants. Then check in that if statement if the iterating variable is upper case. If it is, then push the iterating variable and an uppercase O and the iterating variable into the array. If it isn't then push the iterating variable and a lowercase O and the iterating variable into the array. Going back to the first if statement, if the iterating variable is not in the list of consonants, then just push the iterating variable as is. Then return the new array and join it together





def robber_encode(sentence):
  cons = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 
              'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 
              'z', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
             'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
  
  newArr = []
  for letter in sentence:
    if letter in cons:
      if letter != letter.lower():
        newArr.append(letter + 'O' + letter)
      else:
        newArr.append(letter + 'o' + letter)
    else:
      newArr.append(letter)

  return ''.join(newArr)


print(robber_encode('hello world'))
print(robber_encode("follow the white rabbit"))
print(robber_encode("S.O.S"))
print(robber_encode("coding is fun"))