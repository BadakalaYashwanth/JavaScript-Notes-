// split.js — for Node (console)
var csvData = "John-9876543211, David-9876543210";

// split into records (trim to remove spaces)
var [john, david] = csvData.split(',').map(s => s.trim());

// extract name and phone
var [johnName, johnPhone] = john.split('-');
var [davidName, davidPhone] = david.split('-');

// output to console (Node)
console.log(`Hello! ${johnName}`);
console.log(`OTP sent to your mobile ${johnPhone}`);

// If you want to show david too:
console.log(`Hello! ${davidName}`);
console.log(`OTP sent to your mobile ${davidPhone}`);
