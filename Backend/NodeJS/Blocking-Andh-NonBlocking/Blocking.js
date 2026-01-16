// Blocking synchronous file system example
// This code demonstrates how synchronous I O blocks the main JavaScript thread

// Import Node.js core modules
const fs = require("fs")   // File system operations
const os = require("os")   // System information only

// Print the number of logical CPU cores
// This is informational and does NOT affect execution or performance
console.log("CPU cores available:", os.cpus().length)

// Executed immediately on the main thread
console.log("1")

// Executed immediately on the main thread
console.log("2")

// Blocking synchronous file read
// JavaScript execution STOPS here until the file is fully read
// The event loop is frozen during this time
const result = fs.readFileSync("Sync.txt", "utf8")

// Executed only after the blocking operation completes
console.log(result)

// Execution resumes normally after file read finishes
console.log("3")
console.log("4")

// End of program
// Multiple CPU cores do not help because the main thread was blocked
