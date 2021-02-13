const express = require("express");
const path = require('path');

const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './static/index.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './static/speakers.html'));
});


app.listen(port, () => {
    console.log("Server is listening at port 5000!! ");
});