//Function takes two parameters: bullets and dragons which are both positive integers
//Function must return a boolean. It takes 2 bullets to defeat a dragon so if there are enough bullets to take down the total number of dragons, return true. Else, return false
//5, 2 - true, 10, 8 - false
//Use an if statement to check if bullets is greater than or equal to dragons multiplied by 2. If it is, return true, if not return false


//

const hero = (bullets, dragons) => bullets >= (dragons * 2) ? true : false

console.log(hero(10, 5))
console.log(hero(7, 4))
console.log(hero(100, 40))