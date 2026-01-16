const fs = require("fs")

// Appending data using a synchronous file system operation with timestamp
console.log("\n", "Appending data using a synchronous file system operation with timestamp\n")

fs.appendFileSync(
    "Sync-fs.txt",
    `\n[${Date.now()}] First sync append message. Written using fs.appendFileSync.\n`
)

fs.appendFileSync(
    "Sync-fs1.txt",
    `\n[${Date.now()}] Second sync append message. Appended after the first message.\n`
)

console.log("Synchronous append operations completed\n")

fs.appendFile(
    "Reading-Sync.txt",
    `[${Date.now()}] First async append message. Written using fs.appendFile.\n`,
    (err) => {
        if (err) {
            console.log("Error. Failed to append data asynchronously.", err)
        } else {
            console.log("Asynchronous append operation completed successfully\n")
        }
    }
)
