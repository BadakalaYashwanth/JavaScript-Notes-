const http = require("http")
const fs = require("fs")
const { URL } = require("url")

const PORT = 8000

const server = http.createServer((req, res) => {

    // Ignore browser favicon request early
    if (req.url === "/favicon.ico") {
        res.end()
        return
    }

    // Parse URL using modern WHATWG URL API
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`)
    const pathname = parsedUrl.pathname
    const method = req.method

    // Prepare request log
    const logEntry = `${Date.now()} ${method} ${pathname}\n`

    // Non-blocking request logging
    fs.appendFile("server.log", logEntry, (err) => {
        if (err) {
            res.statusCode = 500
            res.end("Internal Server Error")
            return
        }

        // Route handling
        if (pathname === "/") {

            if (method === "GET") {
                res.statusCode = 200
                res.end("Home Page")
                return
            }

            res.statusCode = 405
            res.end("Method Not Allowed")
            return
        }

        if (pathname === "/about") {
            res.statusCode = 200
            res.end("About Page")
            return
        }

        if (pathname === "/contact") {
            res.statusCode = 200
            res.end("Contact Page")
            return
        }

        if (pathname === "/signup") {

            if (method === "GET") {
                res.statusCode = 200
                res.end("Signup Page - GET Request")
                return
            }

            if (method === "POST") {
                res.statusCode = 201
                res.end("Success, Signup Page - POST Request")
                return
            }

            res.statusCode = 405
            res.end("Method Not Allowed")
            return
        }

        // Fallback for unknown routes
        res.statusCode = 404
        res.end("404 Page Not Found")
    })
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
