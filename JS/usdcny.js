// There will be one parameter which will be an integer representing the US dollar amount
// The function must return the conversion of the US Dollar to the Chinese Yuan by multiplying with the conversion rate of 6.75. The output should also be represented as a string with 2 decimal places and the text Chinese Yuan
// 15 - '101.25 Chinese Yuan'
// Create a conversion variable that multiplies the parameter with 6.75. Then return a template literal while also using the method .toFixed(2) for 2 decimal places



function usdcny(usd) {
  const conv = usd * 6.75;
  return `${conv.toFixed(2)} Chinese Yuan`
}

console.log(usdcny(20))
console.log(usdcny(134))
console.log(usdcny(93))