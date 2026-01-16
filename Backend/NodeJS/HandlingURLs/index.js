const http = require("http")
const fs = require("fs")
const url = require("url")

const MyServer = http.createServer((req, res) => {
    if(req.end === "/favicon.ico") return res.end();

    const log = `${Date.now()}: ${req.url} New Request Received\n`
    const myUrl = url.parse(req.url, true)
    console.log(myUrl)
    fs.appendFile("log.txt", log, (err) => {

        // keep the if condition, basic and necessary
        if (err) {
            res.statusCode = 500
            res.end("Internal Server Error")
            return
        }

        switch (myUrl.pathname) {
            case "/":
                res.end("Homepage")
                break

            case "/about":
                const username = myUrl.query.name
                res.end(`Hi, ${username}`)
                break

            default:
                res.statusCode = 404
                res.end("404 Not Found")
        }
    })
})

// fix the wrong log message only
MyServer.listen(8000, () => console.log("Server started on port 8000"))
