// WITHOUT DESTRUCTURING (ES5)
var values = [10, 20];

var a = values[0];
var b = values[1];

console.log("ES5 → a:", a);
console.log("ES5 → b:", b);

// WITH DESTRUCTURING (ES6+)
var [x, y] = values;

console.log("ES6 → x:", x);
console.log("ES6 → y:", y);
