const fs = require("fs")

// Synchronous file write operation
// This call blocks the event loop until the file is completely written
fs.writeFileSync(
    "./Sync-fs.txt",
    "First message written using fs.writeFileSync. This operation runs synchronously and blocks execution until the write is completed."
)

fs.writeFileSync(
    "./Sync-fs1.txt",
    "Second message written using fs.writeFileSync. This demonstrates another synchronous file write that executes in sequence."
)


// Asynchronous file write operation
// This call does not block the event loop and executes in the background
fs.writeFile(
    "./Async-fs.txt",
    "First asynchronous message written using fs.writeFile. This operation runs non blocking and uses a callback to handle completion.",
    (err) => {}
)
