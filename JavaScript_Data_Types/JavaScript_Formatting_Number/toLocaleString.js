console.log("JavaScript provides various methods for presenting numbers.");

var _amountValue = 100000000.00;

// Using toLocaleString()
let indianFormat = _amountValue.toLocaleString("en-IN");
let usFormat = _amountValue.toLocaleString("en-US");
let germanFormat = _amountValue.toLocaleString("de-DE");  // extra example

console.log("Original Number:", _amountValue);

console.log("Indian Locale Format:", indianFormat);
console.log("US Locale Format:", usFormat);
console.log("German Locale Format:", germanFormat);

// checking types
console.log("Type of Indian Format:", typeof indianFormat);
console.log("Type of US Format:", typeof usFormat);
console.log("Type of German Format:", typeof germanFormat);
