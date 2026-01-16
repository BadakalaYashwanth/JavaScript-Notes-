const http = require("http")

// The http module is a built in Node.js module
// It is used to create HTTP servers and handle requests and responses

// req represents the incoming HTTP request from the client
// res represents the HTTP response that will be sent back to the client
const MyNewServer = http.createServer((req, res) => {

    // This message is logged every time a new request reaches the server
    console.log("New request received")

    // req.headers contains the HTTP request headers sent by the client
    // It includes metadata such as browser details, accepted formats, and authorization info
    // It does NOT reliably contain the client IP address
    console.log(req.headers)

    // Send a response back to the client and close the connection
    res.end("Hello. This message is from the server.")
})

// Start the server on port 8000
// localhost:8000 will be available once the server is running
MyNewServer.listen(8000, () => {
    console.log("Server started on port 8000")
})
