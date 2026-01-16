const fs = require("fs")


// Safe synchronous directory creation
console.log("\n", "Creating a directory safely using a synchronous file system operation\n")

try {
    fs.mkdirSync("./sync-folder", { recursive: true })
    console.log("Synchronous directory is ready\n")
} catch (err) {
    console.log("Unexpected error during synchronous directory creation", err)
}


// Safe asynchronous directory creation
console.log("Creating a directory safely using an asynchronous file system operation\n")

fs.mkdir("./Async-folder", { recursive: true }, (err) => {
    if (err) {
        console.log("Unexpected error during asynchronous directory creation", err)
    } else {
        console.log("Asynchronous directory is ready\n")
    }
})
