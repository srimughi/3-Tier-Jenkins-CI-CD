const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());


// Home API

app.get("/", (req, res) => {

    res.send(
        "CloudTechno Backend is running successfully!"
    );

});


// Health check

app.get("/health", (req, res) => {

    res.json({
        status: "UP",
        application: "CloudTechno 3-Tier Application"
    });

});


// Contact API

app.post("/contact", (req, res) => {

    const {
        name,
        email,
        message
    } = req.body;

    console.log("New Contact Request");

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    res.json({
        success: true,
        message: "Contact request received successfully"
    });

});


app.listen(PORT, () => {

    console.log(
        `CloudTechno backend running on port ${PORT}`
    );

});