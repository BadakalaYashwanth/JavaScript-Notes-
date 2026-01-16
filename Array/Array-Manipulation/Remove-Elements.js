var categories = ["ALL", "Electronics", "Footwear", "Fashion", "Mobiles"];

function show(action) {
    console.log(`\n${action}`);
    console.log("Current Array:", categories);
}

// Removes LAST element
function removeLast() {
    var removed = categories.pop();        // removes "Mobiles"
    console.log("Removed (pop):", removed);
    show("After pop()");
}

// Removes FIRST element
function removeFirst() {
    var removed = categories.shift();      // removes "ALL"
    console.log("Removed (shift):", removed);
    show("After shift()");
}

// Removes element at index 1
function removeSpecific() {
    var removed = categories.splice(1, 1); // removes "Electronics"
    console.log("Removed (splice):", removed);
    show("After splice()");
}

removeLast()
removeFirst()
removeSpecific()