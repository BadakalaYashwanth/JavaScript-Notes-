// Sample array with duplicate values
var products = ["Laptop", "Tablet", "Tablet", "Mobile", "Watch"];

/*
  Index positions:
  0 → Laptop
  1 → Mobile
  2 → Tablet
  3 → Mobile
  4 → Watch
*/

console.log("Original Array:", products);

/* ------------------------------------
   1️⃣ find() → FIRST matching element
------------------------------------ */

var foundProduct = products.find(function(item) {
    return item === "Mobile";
});

console.log("\nfind():");
console.log("First matching element:", foundProduct);

/*
  Output:
  Mobile
  (Stops searching after first match)
*/

/* ------------------------------------
   2️⃣ filter() → ALL matching elements
------------------------------------ */

var filteredProducts = products.filter(function(item) {
    return item === "Mobile";
});

console.log("\nfilter():");
console.log("All matching elements:", filteredProducts);

/*
  Output:
  ["Mobile", "Mobile"]
  (Scans entire array)
*/

/* ------------------------------------
   3️⃣ indexOf() → FIRST index position
------------------------------------ */

var firstIndex = products.indexOf("Mobile");

console.log("\nindexOf():");
console.log("First index of 'Mobile':", firstIndex);

/*
  Output:
  1
  (-1 if not found)
*/

/* ------------------------------------
   4️⃣ lastIndexOf() → LAST index position
------------------------------------ */

var lastIndex = products.lastIndexOf("Tablet");

console.log("\nlastIndexOf():");
console.log("Last index of 'Tablet':", lastIndex);

/*
  Output:
  3
  (-1 if not found)
*/
