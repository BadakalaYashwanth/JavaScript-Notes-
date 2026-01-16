// Import Node.js built in http module
// This module is responsible for creating HTTP servers
const http = require("http")

// Import Node.js built in file system module
// This module provides APIs to work with files asynchronously or synchronously
const fs = require("fs")

// Create an HTTP server using http.createServer()
// This method registers a request handler that runs for every incoming HTTP request
const MyNewServer = http.createServer((req, res) => {

    // Prepare a log string for each request
    // Date.now() gives the current timestamp in milliseconds
    // req.method gives the HTTP method like GET or POST
    // req.url gives the requested route
    const clientLogData = `${Date.now()} - ${req.method} ${req.url}\n`

    // Asynchronously append the log data to log.txt
    // fs.appendFile is a non blocking file system method
    // The actual file write happens outside the JavaScript thread
    fs.appendFile("log.txt", clientLogData, (err) => {

        // If the log write fails, send an error response
        // Only one response is allowed per request
        if (err) {
            res.statusCode = 500
            res.end("Internal Server Error")
            return
        }

        // Simple routing based on the request URL
        // This decides what response the server sends back
        switch (req.url) {

            case "/":
                // Send response for the home route
                res.end("HomePage")
                break

            case "/about":
                // Send response for the about route
                res.end("I am Yaswanth")
                break

            default:
                // Handle unknown routes
                res.statusCode = 404
                res.end("404 Not Found")
        }
    })
})

// Start the HTTP server and listen on port 8001
// Once this is running, the server can accept client requests
MyNewServer.listen(8001, () => {
    console.log("Server started on port 8001")
})
