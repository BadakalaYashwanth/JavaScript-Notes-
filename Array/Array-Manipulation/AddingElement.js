var categories = ["Electronics", "Footwear", "Fashion"];

/*
  Utility function to print the current state of the array
  along with the action performed.
*/
function showCategories(action) {
    console.log(`\n${action}`);
    console.log(categories);
}

/*
  push()
  - Adds new element(s) at the END of the array
  - Does NOT shift existing indexes
  - Fastest and most commonly used
  - Can add MULTIPLE values at once
*/
function addAtEnd() {
    categories.push("Mobiles", "Laptops");
    showCategories("After push()");
}

/*
  unshift()
  - Adds new element(s) at the START of the array
  - Shifts ALL existing indexes to the right
  - Can add MULTIPLE values at once
  - Slightly slower because of index shifting
*/
function addAtStart() {
    categories.unshift("ALL", "Trending");
    showCategories("After unshift()");
}

/*
  splice()
  - Most powerful array method
  - Can ADD, REMOVE, or REPLACE elements
  - Modifies the original array

  Syntax:
    array.splice(startIndex, deleteCount, item1, item2, ...)

  Here:
    startIndex = 3  → position where insertion starts
    deleteCount = 0 → delete nothing
    "Accessories", "Watches" → elements to insert
*/
function addAtSpecificPosition() {
    categories.splice(3, 0, "Accessories", "Watches");
    showCategories("After splice()");
}

/*
  Summary Table:

  | Method      | Where it adds | Index changes?   | Use case       |
  | ----------- | ------------- | ---------------- | -------------- |
  | push()      | End           | No shifting      | Best & fastest |
  | unshift()   | Start         | Yes (shifts all) | Use carefully  |
  | splice()    | Anywhere      | Depends          | Most powerful  |

  Notes:
  - push() and unshift() can add MULTIPLE values, not just one.
  - splice() can add, remove, or replace elements — it’s a Swiss-army knife.
*/

// Run functions
addAtEnd();
addAtStart();
addAtSpecificPosition();
