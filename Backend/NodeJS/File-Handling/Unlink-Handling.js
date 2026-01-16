const fs = require("fs")


// Deleting a file using a synchronous file system operation with timestamp
console.log("\n", "Deleting a file using a synchronous file system operation with timestamp\n")

fs.unlinkSync(
    "unlinkhandling2.txt"
)

console.log(`[${Date.now()}] Synchronous file deletion completed successfully\n`)


// Deleting a file using an asynchronous file system operation with timestamp
console.log("Deleting a file using an asynchronous file system operation with timestamp\n")

fs.unlink(
    "unlinkhandling1.txt",
    (err) => {
        if (err) {
            console.log(`[${Date.now()}] Error. Failed to delete the file asynchronously.`, err)
        } else {
            console.log(`[${Date.now()}] Asynchronous file deletion completed successfully\n`)
        }
    }
)
