
// There will be two string parameters - first is the name of the animal, second is the name of the dish
// The function must return a boolean. Checking to see if the first and last letters of the dish match the first and last letters of the animal
// cat - carrot
// Check to see if the first index of the animal and the dish are the same. Then check the last characters of both by grabbing the length of each parameter and subtracting by 1 to get the last index.

function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}


console.log(feast('cat', 'carrot'))
console.log(feast('dog', 'drumstick'))
console.log(feast('crow', 'coleslaw'))