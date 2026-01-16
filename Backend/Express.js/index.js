const http = require("http")
const express = require("express")
const fs = require("fs")

const app = express()

// Logger middleware MUST be before routes
app.use((req, res, next) => {
    const log = `${Date.now()} ${req.method} ${req.url}\n`

    fs.appendFile("server.log", log, (err) => {
        if (err) {
            res.status(500).send("Internal Server Error")
            return
        }
        next()
    })
})

app.get("/", (req, res) => {
    res.send("Hello from Express.js")
})

app.get("/about", (req, res) => {
    res.send("Hello from About Page" + " hey there " + req.query.name + " you are " + req.query.age + " years old")
})

app.get("/data", (req, res) => {
    res.send("Data from Express.js")
})

app.get("/info", (req, res) => {
    res.json({ message: "Info from Express.js" })
})

app.get("/signin", (req, res) => {
    res.status(200).send("Signin Request")
})

app.post("/signup", (req, res) => {
    res.status(201).send("Success Signup Page POST Request")
})

app.get("/contact", (req, res) => {
    res.status(200).send("Contact Page")
})

const server = http.createServer(app)

server.listen(3000, () => {
    console.log("Server running on port 3000")
})
