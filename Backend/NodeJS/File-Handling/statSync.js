const fs = require("fs")


console.log("\n", "Reading an existing file using a synchronous file system operation from the project directory\n")
const ReadingResult = fs.readFileSync("./Async-fs.txt", "utf-8")
console.log(ReadingResult)


console.log("\n", "Reading another existing file using a synchronous file system operation from the project directory\n")
const NewReadingResult = fs.readFileSync("./Reading-Sync.txt", "utf-8")
console.log(NewReadingResult)


console.log("\n", "Reading an existing file using an asynchronous file system operation from the project directory\n")
fs.readFile("./Reading-Sync.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("Error. Unable to read the file.", err)
    } else {
        console.log("File read successfully.\n", result)
    }
})

console.log(fs.statSync("./Reading-Sync.txt"))
