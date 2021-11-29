var express = require("express");
var app = express();
// variable users that is just an array
var users = [];


// Here we tell the program that the data comming in give it to me in json form
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// This tells the application that I will put all my static pages in the public folder
app.use(express.static(__dirname + '/public'));

// Here we are basically telling node that if you cant find the port switch to port 3000
var port = process.env.port || 3000;

const subNumbers = (number1, number2) => {
    // parse int will make the string input integer
    var num1 = parseInt(number1);
    var num2 = parseInt(number2);
    // This part is so that is user does not send a number
    if (isNaN(num1) || isNaN(num2)) {
        return false;
    } else {
        var result = num1 - num2;
        return result;
    }
}

app.get("/subTwoNumbers", (req, res) => {
    // request is telling what we need from the user
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = subNumbers(number1, number2)

    if (result == false) {
        // Since we dont have any data it'll be null
        res.json({ statusCode: 200, data: null, message: "Fail" })
    } else {
        // response is what the user will get
        res.json({ statusCode: 200, data: result, message: "Success" })
    }

})

// This is a post api. This will add users to the above created users array
app.post("/user/create", (req, res) => {
    let userData = {};
    userData.name = req.body.name;
    userData.age = req.body.age;
    users.push(userData);
    res.json({ statusCode: 200, data: result, message: "User Created" });
})

// This get api will take queries
// It will send the user array to the user
app.get("/user", (req, res) => {

    var age = parseInt(req.query.age);
    var userFormatted = [];

    if (isNaN(age)) {
        res.json({ statusCode: 200, data: result, message: "User Created" })
    } else {
        // With this we can actually query users with age as a filter
        for (var i = 0; i < users.length; i++) {
            if (age < users[i].age) {
                userFormatted.push(users[i]);
            }
        }
        res.json({ statusCode: 200, data: result, message: "Success" });
    }

})

// This is a express function
app.listen(port, () => {
    // This will show up on the console and tell us which port we are running on
    console.log("Application started on port: ", port)
})