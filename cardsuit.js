// There will be a string parameter that contains the card number or letter for jack, queen, king and a symbol of a card suit
// The function must return a string of the card suit
// 3♦ - spades
// Separate the card number with the suit and store into a variable. Use the includes method to see if the variable contains a particular suit. Apply this for all the suits.

function defineSuit(card) {
	let splitCard = card.split('')
	if (splitCard.includes('♣')) {
		return 'clubs'
	} else if (splitCard.includes('♦')) {
		return 'diamonds'
	} else if (splitCard.includes('♥')) {
		return 'hearts'
	} else if (splitCard.includes('♠')) {
		return 'spades'
	}
}

console.log(defineSuit('3♦'))
console.log(defineSuit('K♥'))
console.log(defineSuit('10♣'))
console.log(defineSuit('A♠'))