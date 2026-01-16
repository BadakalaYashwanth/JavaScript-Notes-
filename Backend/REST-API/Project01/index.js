const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();
const port = 8000;


// Decelearing a plug in (middleware) to parse request bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // FIX: required to read JSON body


//This is the Hybrid Server we are calling both HTML and JSON APIs
// HTML rendering of users with name

// JSON API for all users
app.get("/api/users", (req, res) => {
    res.json(users);
});

// Accessing single user by ID
app.get("/api/users/userdetailsid/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
});

app.get("/users/userdeatailsid", (req, res) => {
    const id = parseInt(req.query.id);
    const user_name = users.find(user => user.id === id);

    if (!user_name) {
        return res.status(404).send("<h1>User not found</h1>");
    }

    res.send(`<h1>${user_name.first_name} ${user_name.last_name} --- ${user_name.id}</h1>`);
});


//Now we are using the GET, PATCH, DELETE methods for a single user based on ID from the JSON
app.route("/api/users/:id")
.get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
})
.patch((req, res) => {
    return res.json({ status: "Pending" });
})
.delete((req, res) => {
    return res.json({ status: "Pending" });
});

app.post("/api/users", (req, res) => {
    const body = req.body;

    users.push({ ...body, id: users.length + 1 });

    fs.writeFile(
        "./MOCK_DATA.json",
        JSON.stringify(users, null, 2),
        (err) => {
            if (err) {
                return res.status(500).json({ message: "File write failed" });
            }
            return res.json({ status: "Success" });
        }
    );
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
