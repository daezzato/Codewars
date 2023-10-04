// There will be an array of strings
// The function must return the strings sorted by ascending order of characters from smallest to greatest
// ['dog', 'bottle', 'starfish']
//Use the sort method on the array based on the length of each element of the array

function sortByLength (array) {
  return array.sort((a, b) => a.length - b.length)
};



console.log(sortByLength(['dog', 'beetle', 'tiger']))
console.log(sortByLength(['two', 'pizza', 'washroom', 'polygon', 'it']))
console.log(sortByLength(['water', 'stingray', 'lint']))