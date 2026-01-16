const express = require("express"); // Importing express module
const userDetails = require("./MOCK_DATA.json"); // Importing local JSON data and store all users in a box called UserDetails

const app = express(); // Creating the server
const port = 8000; // Defining the port number

//First route, get all users return in the JSON format
app.get("/user/details", (req, res) => {
    res.json(userDetails)
})

//First route, get all users return in the JSON format
app.get("/user/names", (req, res) => {
    const names = userDetails.map(user => {
        return user.first_name + " " + user.last_name;
    });

    res.json(names);
});


//First route, get all users using the markup language
app.get("/users/names/styles", (req, res) => {
    const html = `
        <ul>
            ${userDetails
                .map(user => `<li>${user.first_name} ${user.last_name}</li>`)
                .join("")}
        </ul>
    `;
    res.send(html);
});



//Now Dynamiclly we are calling single user from the JSON
app.get("/user/id/:id",  (req, res) => {
    const id = Number(req.params.id);  //The Number Convert the string into the int, params This is an object created by Express. req.params = { id: "7" }
    const name = (req.name);
    const user = userDetails.find(u => u.id === id) //.find(...) Go through the list one by one and stop when condition matches.

    if(!user){
        return res.status(404).json({Message: "The user_id and name aren't found"})
    }
    res.json({
        id: user.id,
        name: user.first_name + " " + user.last_name
    })
})


app.listen(port, () =>{
    console.log("Your server started", port)
})

