//The function's parameters is an array of strings that may or may not include a specific 'toggle' word which is 'flick'
//The function must return True for each string in the array as a default. But if the string is 'flick', then the default boolean for 'flick' and every subsequent word after it is False until there is another instance of 'flick'.
//['dog', 'cat', 'bird', 'flick', 'snow', 'flick'] - [true, true, true, false, false, true]
//Create an empty array and set a default variable to true. Then run a for loop on the array. If the iterating variable is equal to 'flick', set the default boolean to the opposite of the current default. Push that boolean into the new array. Then check if the iterating variable is just a regular string, then just push that boolean into the array.


function flickSwitch(arr){
  let newArr = []
  let x = true
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'flick'){
      x = !x
      newArr.push(x)
    } else if (arr[i]){
      newArr.push(x)
    }
  }
  return newArr
}

console.log(flickSwitch(["flick", "flick", "flick", "flick", "flick"]))
console.log(flickSwitch(["bird"]))
console.log(flickSwitch(["flick", "mountain", "tiger", "flick", "dog"]))
console.log(flickSwitch(["plane", "jar", "bed", "flick", "boat"]))
console.log(flickSwitch(["flick"]))