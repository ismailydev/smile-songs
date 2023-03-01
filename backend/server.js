const express = require("express");
require("dotenv").config();

require("./config/db")();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/songs", require("./routes/song"));

app.get("/", (req, res) => {
    res.send(
        "<h1>Welcome to <b>smile-songs-api</b></h1><p>Checkout /api/songs</p>"
    );
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
