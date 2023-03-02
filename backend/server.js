const express = require("express");
require("dotenv").config();

require("./config/db")();

const PORT = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
