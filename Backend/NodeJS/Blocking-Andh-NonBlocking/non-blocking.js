// Import the file system module
// This module provides both blocking and non blocking APIs
const fs = require("fs")

// Printed immediately on the main JavaScript thread
console.log("1")

// Printed immediately on the main JavaScript thread
console.log("2")

// Non blocking asynchronous file read
// The file reading is delegated to the OS or libuv thread pool
// JavaScript does NOT wait for this operation to finish
fs.readFile("Async-fs.txt", "utf8", (err, result) => {

    // This callback is executed later
    // It runs only after the file read is completed
    // It still runs on the same single JavaScript thread
    if (err) {
        console.error(err)
        return
    }

    // Printed after the asynchronous operation completes
    // This happens AFTER 3 and 4 are printed
    console.log(result)
})

// Executed immediately because the readFile call is non blocking
console.log("3")

// Executed immediately because the event loop is free
console.log("4")
