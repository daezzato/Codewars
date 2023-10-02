
// There will be an array of strings "wolf" or "sheep". There will only be one string "wolf"
// The function must return a particular string, depending on the index of the wolf
// wolf index = 0, `Pls go away and stop eating my sheep`. wolf index = >= 1 `Oi! Sheep number...! You are about to be eaten by a wolf!`
// Reverse the array and find the index of the string 'wolf'

function warnTheSheep(queue) {
  let wolfIndex = queue.reverse().indexOf('wolf')
  if (wolfIndex === 0) {
    return `Pls go away and stop eating my sheep`
  } else {
    return `Oi! Sheep number ${wolfIndex}! You are about to be eaten by a wolf!`
  }
}