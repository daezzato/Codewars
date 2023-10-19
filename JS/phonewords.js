


function phoneWords(stringOfNums) {
	const phoneNums = {a:'2', b:'22', c:'222', d:'3', e:'33', f:'333', g:'4', h:'44', i:'444', j:'5', k:'55', l:'555', m:'6', n:'66', o:'666', p:'7', q:'77', r:'777', s:'7777', t:'8', u:'88', v:'888', w:'9', x:'99', y:'999', z:'9999'}
	let newMessage = []
	let splitStr = stringOfNums.split('')
	for (let i = 0; i < splitStr.length; i++) {
		for (let [key, value] of Object.entries(phoneNums)) {
			if (splitStr[i] === value) {
				newMessage.push(key)
			}
		}
	
	}
	return newMessage.join('')
	

}

console.log(phoneWords('653'))
console.log(phoneWords("443355555566604466690277733099966688"))


