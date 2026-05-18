const express = require("express");
const cors = require('cors');

const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());

const user = {
    email: "pragyan@gmail.com",
    password: "12345"
}

app.post("/login", (req, res)=> {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    if (email === user.email && password === user.password) {

        return res.status(200).json({
            success: true,
            message: "Login Successful"
        });

    }

    return res.status(401).json({
        success: false,
        message: "Invalid Email or Password"
    });
})

app.listen(5000, ()=> {
    console.log("Server is Running");
})