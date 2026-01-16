/* ----------------------------------
   STRING SORTING (Default Behavior)
---------------------------------- */

var fruits = ["Banana", "Apple", "Mango", "Orange"];
console.log("Original Fruits:", fruits);

// sort() → alphabetical (string-based)
fruits.sort();
console.log("After sort():", fruits);

// reverse() → reverse current order
fruits.reverse();
console.log("After reverse():", fruits);




/* ----------------------------------
   NUMBER SORTING (Default = WRONG)
---------------------------------- */

var numbers = [10, 2, 30, 4, 25];

console.log("\nOriginal Numbers:", numbers);

// WRONG numeric sorting (string comparison)
numbers.sort();
console.log("After sort() (WRONG for numbers):", numbers);




/* ----------------------------------
   CORRECT NUMERIC SORTING
---------------------------------- */

// Ascending order (small → big)
numbers.sort(function(a, b) {
    return a - b;
});
console.log("Numeric Ascending:", numbers);

// Descending order (big → small)
numbers.sort(function(a, b) {
    return b - a;
});
console.log("Numeric Descending:", numbers);
