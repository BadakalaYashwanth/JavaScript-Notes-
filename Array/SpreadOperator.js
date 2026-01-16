var one   = [10, 20];
var two   = [30, 40];

var three  = [one];              // [[10, 20]]
var three1 = [...one];           // [10, 20]

var three3 = [one, two];         // [[10, 20], [30, 40]]

var three4 = [...one, two];      // [10, 20, [30, 40]]
var three5 = [...one, ...two];   // [10, 20, 30, 40]

console.log(`three  : ${JSON.stringify(three)}`);
console.log(`three1 : ${JSON.stringify(three1)}`);
console.log(`three3 : ${JSON.stringify(three3)}`);
console.log(`three4 : ${JSON.stringify(three4)}`);
console.log(`three5 : ${JSON.stringify(three5)}`);
