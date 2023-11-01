//Function takes a string that could be a sentence of any letter or any character
//The function must return the same string but with a duplication of every consonant with an added 'o'. Vowels are not affected
//'hello' - 'hohelollolo
//Create an array of all consonants, both upper and lowercase. Then split the sentence into an array and create an empty array. In a for loop, check to see if the iterating variable is included in the list of consonants. Then check in that if statement if the iterating variable is upper case. If it is, then push the iterating variable and an uppercase O and the iterating variable into the array. If it isn't then push the iterating variable and a lowercase O and the iterating variable into the array. Going back to the first if statement, if the iterating variable is not in the list of consonants, then just push the iterating variable as is. Then return the new array and join it together





function robberEncode(sentence) {
  let cons = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 
              'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 
              'z', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
             'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
  let splitStr = sentence.split('')
  let newArr = []
  for (let i = 0; i < splitStr.length; i++ ) {
    if (cons.includes(splitStr[i])) {
      if (splitStr[i] !== splitStr[i].toLowerCase()) {
        newArr.push(splitStr[i] + 'O' + splitStr[i])
      } else {
          newArr.push(splitStr[i] + 'o' + splitStr[i])
      }
    } else {
      newArr.push(splitStr[i])
    }
  }
  return newArr.join('')
}

console.log(robberEncode('hello world'))
console.log(robberEncode("follow the white rabbit"))
console.log(robberEncode("S.O.S"))
console.log(robberEncode("coding is fun"))