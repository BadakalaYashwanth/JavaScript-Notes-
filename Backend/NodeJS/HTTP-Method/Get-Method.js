const http = require("http")
const url = require("url")

const server = http.createServer((req, res) => {

    if (req.method !== "GET") {
        res.statusCode = 405
        res.end("Method Not Allowed")
        return
    }

    const parsedUrl = url.parse(req.url, true)
    const path = parsedUrl.pathname
    const query = parsedUrl.query

    if (path === "/") {
        res.statusCode = 200
        res.end("Home Page")

    } else if (path === "/greet") {
        const name = query.name || "Guest"
        res.statusCode = 200
        res.end(`Hello, ${name}`)

    } else {
        res.statusCode = 404
        res.end("404 Not Found")
    }
})

server.listen(8000, () => {
    console.log("GET server running on port 8000")
})
